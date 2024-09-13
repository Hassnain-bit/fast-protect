const express = require("express");
const router = express.Router();

router.get("/ping", (req, res) => {
  res.json({ success: "ping success" })
})

module.exports = router;