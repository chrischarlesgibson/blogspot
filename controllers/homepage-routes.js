const router = require("express").Router();
const { User, Comment, Blogpost } = require("../models");
const withAuth = require("../utils/auth");

//WORKS//get all blogposts for homepage
router.get("/", async (req, res) => {
  try {
    const allBlogpostData = await Blogpost.findAll({
      include: [
        {
          model: Comment,
          attributes: ["id", "text"],
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });

    const blogPosts = allBlogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    res.render("homepage", {
      blogPosts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//create GET route to get to login page when the user is not logged in and trys to click on a post to read it

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
module.exports = router;
