const Sequelize = require("sequelize");
const sequelize = require("../connections/database");
const Forgotpassword = sequelize.define("forgotpassword", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  active: Sequelize.BOOLEAN,
  expiresby: Sequelize.DATE,
});

module.exports = Forgotpassword;