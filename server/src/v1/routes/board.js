const express = require("express");
const router = express.Router();
const boardController = require("../controllers/boardController");

router.post("/", boardController.createBoard);
router.get("/", boardController.getAllBoards);
router.get("/columns", boardController.getAllBoardsWithColumns);
router.get("/:boardId", boardController.getBoard);
router.put("/:boardId", boardController.updateBoard);
router.delete("/:boardId", boardController.deleteBoard);

module.exports = router;
