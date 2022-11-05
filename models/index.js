const User = require("./user");
const Comment = require("./comment");
const Blogpost = require("./blogpost");

//blogpost belongto user
Blogpost.belongsTo(User, {
  foreignKey: "user_id",
});
//user has many blogposts

User.hasMany(Blogpost, {
  foreignKey: "user_id",
});
//comment belongto user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});
//user has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

//blogpost has many comments
Blogpost.hasMany(Comment, {
  foreignKey: "blogpost_id",
});

//comment belongs to blogpost

Comment.belongsTo(Blogpost, {
  foreignKey: "blogpost_id",
});
module.exports = { Blogpost, User, Comment };
