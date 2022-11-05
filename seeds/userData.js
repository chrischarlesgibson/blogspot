const { User } = require("../models");

const userData = [
  {
    username: "Tom Jones",
    email: "TomJones@gmail.com",
    password: "password",
  },
  {
    username: "Tyler Durden",
    email: "TDurden@gmail.com",
    password: "password123",
  },
  {
    username: "Sam Smith",
    email: "ssmith@gmail.com",
    password: "password321",
  },
  {
    username: "John Doe",
    email: "JohnDoe@gmail.com",
    password: "password4563456",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
