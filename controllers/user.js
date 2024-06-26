const User = require("../models/user");
const bcrypt = require("bcrypt");
const sequelize = require("../connections/database");
const jwt = require("jsonwebtoken");
const path = require("path")
exports.getSignup = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'signup.html'));
};
exports.postSignup = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let password = req.body.password;
    let userWithEmail = await User.findOne({
      where: {
        email,
      },
    });
    let userWithPhone = await User.findOne({
      where: {
        phone,
      },
    });
    if (userWithEmail || userWithPhone) {
      return res.status(401).json({
        error: "User Already Exists",
      });
    }
    let saltrounds = 10;
    let hash = await bcrypt.hash(password, saltrounds);
    await User.create({
      name,
      email,
      phone,
      password: hash,
    });
    await t.commit();
    res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    await t.rollback();
    res.status(500).json({
      error: "Something Went Wrong !!",
    });
  }
};
exports.generateAccessToken = (id, name) => {
  return jwt.sign({ id, name }, process.env.SECRET_KEY);
};
exports.getLogin = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
};
exports.postLogin = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.findOne({
      where: {
        email,
      },
      transaction: t,
    });
    if (!user) {
      await t.rollback();
      return res.status(404).json({
        error: "User Not found",
      });
    }
    let valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      await t.rollback();
      return res.status(401).json({
        error: "Incorrect Password",
      });
    }
    await t.commit();
    res.status(201).json({
      message: "Logged In Successfully",
      token: exports.generateAccessToken(user.id, user.name),
    });
  } catch (error) {
    console.log("error message: "+error)
    await t.rollback();
    res.status(500).json({
      success: false,
      error: "Something Went Wrong!",
    });
  }
};
exports.getUsers =async(req,res)=>{
  try {
      let users = await User.findAll();
      res.status(201).json({
          users:users
      }) 
  } catch (error) {
      res.status(500)
      .json({
          success:false,
          error: "Something Went Wrong!"
      })
  }
}