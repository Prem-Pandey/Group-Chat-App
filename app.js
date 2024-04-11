const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const path = require("path");
// const sequelize = require("sequelize")
env.config();
const userRoutes = require("./routes/user");

const sequelize = require("./connections/database");
const User = require("./models/user");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.static("public"));
app.use(userRoutes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, `${req.url}`));
});


async function main() {
  try {
    // await sequelize.sync();
    console.log("Database Connection Successfull");
    app.listen(3000);
    console.log("connected to Port 3000");
  } catch (error) {
    console.log(error);
  }
}
main();
