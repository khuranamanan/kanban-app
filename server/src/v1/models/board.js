const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    columns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Column",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Board", boardSchema);
