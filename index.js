const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
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
app.use(cors());
app.use("/api/v1/users", require("./routes/user"));
app.use("/api/v1/chats", require("./routes/chat"));
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
