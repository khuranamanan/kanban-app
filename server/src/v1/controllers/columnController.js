const Column = require("../models/column");
const Item = require("../models/item");
const Board = require("../models/board");

const createColumn = async (req, res) => {
  try {
    const { boardId, name } = req.body;

    const newColumn = await Column.create({ board: boardId, name });

    const board = await Board.findById(boardId);
    if (board) {
      board.columns.push(newColumn._id);
      await board.save();
    }

    res.status(201).json({ column: newColumn });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllColumns = async (req, res) => {
  try {
    const boardId = req.params.boardId;

    const columns = await Column.find({ board: boardId }).populate({
      path: "items",
      ref: "Item",
    });

    res.json({ columns });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getColumn = async (req, res) => {
  try {
    const columnId = req.params.columnId;

    const column = await Column.findById(columnId);

    res.json({ column });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateColumn = async (req, res) => {
  try {
    const columnId = req.params.columnId;
    const { name } = req.body;

    const updatedColumn = await Column.findByIdAndUpdate(
      columnId,
      { name },
      { new: true }
    );

    res.json({ column: updatedColumn });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteColumn = async (req, res) => {
  try {
    const columnId = req.params.columnId;

    const deletedColumn = await Column.findByIdAndDelete(columnId);

    if (deletedColumn) {
      await Item.deleteMany({ column: columnId });
    }

    const board = await Board.findById(deletedColumn.board);
    if (board) {
      board.columns = board.columns.filter((id) => id.toString() !== columnId);
      await board.save();
    }

    res.json({ column: deletedColumn });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createColumn,
  getAllColumns,
  getColumn,
  updateColumn,
  deleteColumn,
};
