const Sequelize = require("sequelize");
const db = require("../db/db");

const Person = db.define("persons", {
  //      firstName - not empty or null
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  //  lastName - not empty or null
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  //  email - not empty or null; must be a valid email
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true, isEmail: true }
  },
  //  imageUrl - with a default value
  imageURL: { type: Sequelize.STRING, defaultValue: "/person.png" }
});

module.exports = Person;
