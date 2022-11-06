const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    //if they are logged in then execute th eroute function
    next();
  }
};

module.exports = withAuth;
