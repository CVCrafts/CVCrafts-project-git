const express = require("express");
const resumeRouter = express.Router();

resumeRouter.get("/", async (req, res) => {
  res.send("Hello world to resume route");
});


module.exports = resumeRouter

