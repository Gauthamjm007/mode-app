const mongoose = require("mongoose");
const setupDB = () => {
  console.log(process.env.MONGO_URI, "ui");
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to db");
    })
    .catch(() => {
      console.log("error connecting to the database");
    });
};

module.exports = setupDB;
