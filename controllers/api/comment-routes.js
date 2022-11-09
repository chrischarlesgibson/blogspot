const router = require("express").Router();
const { Comment, Blogpost, User } = require("../../models");
const withAuth = require("../../utils/auth");
//WORKS//create POST route for add comments
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      include: { model: Blogpost },
      include: { model: User, where: { id: req.session.user_id } },
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//WORKS//get all comments
router.get("/", withAuth, async (req, res) => {
  try {
    const commentsData = await Comment.findAll({
      include: [{ model: User }, { model: Blogpost }],
    });
    res.status(200).json(commentsData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
//create PUT route for updating YOUR comments only
// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const commentData = await Comment.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!commentData) {
//       res.status(404).json({ message: "No comment found with this id!" });
//       return;
//     }
//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//WORKS//create DELETE route for deleting YOUR comments only
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const DeleteCommentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!DeleteCommentData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }
    res.status(200).json(DeleteCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
