const sequelize = require("../config/connection");
const seedBlogposts = require("./blogpostData");
const seedComments = require("./commentData");
const seedUsers = require("./userData");

const seedAllData = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedBlogposts();

  await seedComments();

  //process.exit is a function that tells Node.js to end the process which is running at the same time with an exit code. By calling this function Node.js will force the current process that’s running to exit as soon as possible. putting 0 in as a parameter tells it to end the proceess without any kind of error
  process.exit(0);
};
seedAllData();
