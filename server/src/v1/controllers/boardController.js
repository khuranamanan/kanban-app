const Board = require("../models/board");
const Column = require("../models/column");
const Item = require("../models/item");

const createBoard = async (req, res) => {
  try {
    const { name, description, requiredColumns } = req.body;

    const newBoard = await Board.create({ name, description });

    const createdColumns = await Promise.all(
      requiredColumns.map(async (columnName) => {
        const newColumn = await Column.create({
          board: newBoard._id,
          name: columnName,
        });

        newBoard.columns.push(newColumn._id);
        return newColumn;
      })
    );

    await newBoard.save();

    res.status(201).json({ board: newBoard, columns: createdColumns });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.json({ boards });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllBoardsWithColumns = async (req, res) => {
  try {
    const boards = await Board.find().populate({
      path: "columns",
      ref: "columns",
    });
    res.json({ boards });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBoard = async (req, res) => {
  try {
    const boardId = req.params.boardId;

    const board = await Board.findById(boardId);

    res.json({ board });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateBoard = async (req, res) => {
  try {
    const boardId = req.params.boardId;
    const { name, description } = req.body;

    const updatedBoard = await Board.findByIdAndUpdate(
      boardId,
      { name, description },
      { new: true }
    );

    res.json({ board: updatedBoard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteBoard = async (req, res) => {
  try {
    const boardId = req.params.boardId;

    const deletedBoard = await Board.findByIdAndDelete(boardId);

    if (deletedBoard) {
      await Promise.all(
        deletedBoard.columns.map(async (columnId) => {
          await Item.deleteMany({ column: columnId });

          await Column.findByIdAndDelete(columnId);
        })
      );
    }

    res.json({ board: deletedBoard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createBoard,
  getAllBoards,
  getAllBoardsWithColumns,
  getBoard,
  updateBoard,
  deleteBoard,
};
