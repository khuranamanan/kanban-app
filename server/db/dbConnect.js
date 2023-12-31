const mongoose = require("mongoose");

const mongoURI = process.env["MONGODB_URI"];

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(mongoURI, {
      dbName: "kanban",
    });
    if (connection) {
      console.log(`DB Connected succesfully`);
    }
  } catch (err) {
    console.log(`Connection failed ${err}`);
  }
};

module.exports = { dbConnect };
