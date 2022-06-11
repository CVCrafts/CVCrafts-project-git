const express = require("express");

const seletedResumeRouter = express.Router();

seletedResumeRouter.post("/", async (req, res) => {
  console.log(req.body.data.templateID)
});

module.exports = seletedResumeRouter;
