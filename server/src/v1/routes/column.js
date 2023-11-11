const express = require("express");
const router = express.Router();
const columnController = require("../controllers/columnController");

router.post("/", columnController.createColumn);
router.get("/board/:boardId", columnController.getAllColumns);
router.get("/:columnId", columnController.getColumn);
router.put("/:columnId", columnController.updateColumn);
router.delete("/:columnId", columnController.deleteColumn);

module.exports = router;
