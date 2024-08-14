const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  forgetPassword,
  verifyEmail,
  logout,
} = require("../controllers/auth");

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/forget-password", forgetPassword);

router.post("/verifyEmail", verifyEmail); 

router.post("/logout", logout);

module.exports = router;
