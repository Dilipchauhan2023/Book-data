const Sequelize = require("sequelize");

const sequelize = new Sequelize("book_data", "root", "@Dilip2003", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
