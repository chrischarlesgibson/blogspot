const router = require("express").Router();
const { User, Blogpost, Comment } = require("../../models");
const withAuth = require("../../utils/auth");
//create GET route by post id to get specific posts

//WORKS// CREATE new user signup//
router.post("/", async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUserData.id;
      req.session.username = newUserData.username;
      req.session.email = newUserData.email;
      req.session.loggedIn = true;

      res.status(200).json(newUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//NOT WORKING// Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    // Verify the posted password with the password store in the database. check password is an instance method that compares inpoutted password with encrypted password in db. returns true or false
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.email = userData.email;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//NOT WORKING// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
