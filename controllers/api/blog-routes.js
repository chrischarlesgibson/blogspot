const router = require("express").Router();
const { Blogpost, User } = require("../../models");
const withAuth = require("../../utils/auth");

//get blogpost by id
router.get("/:id", async (req, res) => {
  try {
    const singleBlogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["text", "user_id", "created_at"],
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
    res.status(500).json(err);
  }
});
//create PUT route for updating YOUR post

router.put("/:id", withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!blogpostData) {
      res.status(404).json({ message: "No blog post found with this id!" });
      return;
    }
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//create DELETE route fpor deleting YOUR post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!blogpostData) {
      res.status(404).json({ message: "No blog post found with this id!" });
      return;
    }
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//create POST route for posting a new blog post
router.post("/", withAuth, async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
    });
    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
