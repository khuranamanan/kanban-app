const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    column: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Column",
    },
    name: String,
    description: String,
    dueDate: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
