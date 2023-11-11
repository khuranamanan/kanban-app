const Item = require("../models/item");
const Column = require("../models/column");

const createItem = async (req, res) => {
  try {
    const { columnId, name, description, dueDate } = req.body;

    const newItem = await Item.create({
      column: columnId,
      name,
      description,
      dueDate,
    });

    const column = await Column.findById(columnId);
    if (column) {
      column.items.push(newItem._id);
      await column.save();
    }

    res.status(201).json({ item: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllItems = async (req, res) => {
  try {
    const columnId = req.params.columnId;

    const items = await Item.find({ column: columnId });
    res.json({ items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;

    const item = await Item.findById(itemId);

    res.json({ item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const { name, description, dueDate } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      { name, description, dueDate },
      { new: true }
    );

    res.json({ item: updatedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;

    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    const column = await Column.findById(item.column);
    if (column) {
      column.items = column.items.filter((id) => id.toString() !== itemId);
      await column.save();
    }

    const deletedItem = await Item.findByIdAndDelete(itemId);

    res.json({ item: deletedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const moveItemToColumn = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const { newColumnId } = req.body;

    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    const oldColumn = await Column.findById(item.column);
    if (oldColumn) {
      oldColumn.items = oldColumn.items.filter(
        (id) => id.toString() !== itemId
      );
      await oldColumn.save();
    }

    const newColumn = await Column.findById(newColumnId);
    if (newColumn) {
      newColumn.items.push(itemId);
      await newColumn.save();
    }

    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      { column: newColumnId },
      { new: true }
    );

    res.json({ item: updatedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
  moveItemToColumn,
};
