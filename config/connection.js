const mongoose = require("mongoose");
const { DATABASE_HOST_LIVE } = require("./environment");

mongoose
  .connect(DATABASE_HOST_LIVE, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch(error => {
    console.log("there is something wrong", error);
  });

const db = mongoose.connection;

module.exports = db;
