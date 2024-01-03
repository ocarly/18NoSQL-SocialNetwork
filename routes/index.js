const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>DO NOT PASS GO. Please collect 404 Error!</h1>");
});

module.exports = router;