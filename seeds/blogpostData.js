const { Blogpost } = require("../models");

const blogPostData = [
  {
    title: "Why Septum Piercings are Problematic",
    article:
      "fwerjbfxerkg  xerkgjhx 3g erhgx  r hgx3h x3gu 3reig xh 3xriugh3ir ughoi4 gx3 3rig x34igh 34ig 3itx 4otig 3otig x3otig x3o4tg h",
    post_date: "September 23, 2021 08:30:00",
  },
  {
    title: "I put my life savings into Dogecoin. Here's Why.",
    article:
      "fwerjbfxerkg  xerkgjhx 3g erhgx  r hgx3h x3gu 3reig xh 3xriugh3ir ughoi4 gx3 3rig x34igh 34ig 3itx 4otig 3otig x3otig x3o4tg h",
    post_date: "September 30, 2021 08:30:00",
  },
  {
    title: "This is a test title",
    article:
      "fwerjbfxerkg  xerkgjhx 3g erhgx  r hgx3h x3gu 3reig xh 3xriugh3ir ughoi4 gx3 3rig x34igh 34ig 3itx 4otig 3otig x3otig x3o4tg h",
    post_date: "September 23, 2021 10:30:00",
  },
];
const seedBlogposts = () => Blogpost.bulkCreate(blogPostData);

module.exports = seedBlogposts;
