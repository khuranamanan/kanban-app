const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.post("/", itemController.createItem);
router.get("/column/:columnId", itemController.getAllItems);
router.get("/:itemId", itemController.getItem);
router.put("/:itemId", itemController.updateItem);
router.delete("/:itemId", itemController.deleteItem);
router.put("/move/:itemId", itemController.moveItemToColumn);

module.exports = router;
