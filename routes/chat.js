const express = require("express");
const router = express.Router();
const Chat = require("../model/chat");
const { isAuth } = require("../middlewares/auth");

router.post("/create-new-chat", isAuth, async (req, res) => {
  try {
    const newChat = new Chat(req.body);
    const savedChat = await newChat.save();
    res.json({
      success: true,
      message: "Chat created succesfully",
      data: savedChat,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error in creating chat",
    });
  }
});

router.get("/get-all-chats", isAuth, async (req, res) => {
  try {
    const chats = await Chat.find({ members: { $in: [req.body.userId] } });
    res.json({
      success: true,
      message: "Chat fetched succesfully",
      data: chats,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error in displaying chats",
    });
  }
});

module.exports = router;
