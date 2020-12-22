const router = require("express").Router();
const userRoutes = require("./users");
const activitiesRoutes = require("./activities");
const contactsRoutes = require("./contacts");
const summaryRoutes = require("./summary")

router.use("/users", userRoutes);
router.use("/activities", activitiesRoutes);
router.use("/contacts", contactsRoutes);
router.use("/summary", summaryRoutes);

module.exports = router;
