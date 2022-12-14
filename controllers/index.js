const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homepage-routes");
const dashboardRoutes = require("./dashboard-route");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
module.exports = router;
