const express = require("express");
const router = express.Router();

router.use("/boards", require("./board"));
router.use("/columns", require("./column"));
router.use("/items", require("./item"));

module.exports = router;
