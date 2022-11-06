const router = require("express").Router();
const userRoutes = require("./user-routes");
const commentRoutes = require("./comment-routes");
const blogRoutes = require("./blog-routes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/blogposts", blogRoutes);

module.exports = router;
