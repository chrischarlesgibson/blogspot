const router = require("express").Router();
const { User, Comment, Blogpost } = require("../models");
const withAuth = require("../utils/auth");

//WORKS//get all blogposts for homepage
router.get("/", async (req, res) => {
  try {
    const allBlogpostData = await Blogpost.findAll({
      attributes: ["id", "title", "article", "created_at"],
      include: [
        {
          model: Comment,
          attributes: ["id", "text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
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

//get for a blogpost by id

router.get("/blogposts/:id", withAuth, async (req, res) => {
  try {
    const allBlogpostData = await Blogpost.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "article", "created_at"],
      include: [
        {
          model: Comment,
          attributes: ["id", "text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
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
