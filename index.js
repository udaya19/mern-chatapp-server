const express = require("express");
const app = express();
require("dotenv").config();
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
app.use(express.json());
app.use("/api/v1/users", require("./routes/user"));
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
