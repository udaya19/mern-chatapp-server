const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
try {
  mongoose
    .connect("mongodb://localhost/mern-chatApp")
    .then(() => {
      console.log("Database connected succesfully");
    })
    .catch(() => {
      console.log("Failed");
    });
} catch (error) {
  console.log("failed");
}
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
