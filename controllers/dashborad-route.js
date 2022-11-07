const router = require("express").Router();
const { User, Comment, Blogpost } = require("../models");
const withAuth = require("../utils/auth");

//need to test get all blogposts for dasboard
router.get("/", withAuth, async (req, res) => {
  try {
    console.log(
      "-----------------------------------------------------------------------------------"
    );
    const allBlogpostData = await Blogpost.findAll({
      where: {
        user_id: req.session.user_id,
      },
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
    res.render("dashboard", {
      blogPosts,
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get a single post on the dasboard
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const singleBlogpostData = await Blogpost.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["text", "user_id", "created_at", "id", "post_id"],
          include: {
            model: User,
            atrributes: ["username"],
          },
        },
      ],
    });

    const singleBlogpost = singleBlogpostData.get({ plain: true });

    res.render("single-blogpost", {
      ...singleBlogpost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
