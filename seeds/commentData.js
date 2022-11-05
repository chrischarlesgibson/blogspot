const { Comment } = require("../models");

const commentData = [
  {
    text: "I agree 100%!",
    comment_date: "September 23, 2021 08:30:00",
    user_id: 1,
    post_id: 1,
  },
  {
    text: "You're a loser!",
    comment_date: "September 23, 2021 08:30:00",
    user_id: 2,
    post_id: 1,
  },
  {
    text: "No, You're a loser! You're the one commenting on a blogpost",
    comment_date: "September 23, 2021 08:30:00",
    user_id: 1,
    post_id: 1,
  },
  {
    text: "very nice!",
    comment_date: "September 23, 2021 08:30:00",
    user_id: 2,
    post_id: 2,
  },
  {
    text: "4rt345t345t45",
    comment_date: "September 23, 2021 08:30:00",
    user_id: 1,
    post_id: 2,
  },
  {
    text: "cool blog!",
    comment_date: "September 23, 2021 08:30:00",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
