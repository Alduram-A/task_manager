const mongoose = require("mongoose");

const connectDB = (url) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url, {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then((connection) => {
        console.log("MongoDB Connected");
        resolve(connection);
      })
      .catch((error) => {
        console.error("MongoDB Connection Error:", error);
        reject(error);
      });
  });
};

module.exports = connectDB;
