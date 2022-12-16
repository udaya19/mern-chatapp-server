const User = require("../model/user");
const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    if (!token) {
      return res.json(403, {
        error: "Please login to perform an action",
        success: false,
      });
    }
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    if (!userId) {
      return res.json(403, {
        error: "Invalid token",
        success: false,
      });
    }
    const user = await User.findById(userId);
    console.log(user);
    req.body.userId = userId;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
