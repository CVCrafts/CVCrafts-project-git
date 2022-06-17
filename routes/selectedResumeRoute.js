const { json } = require("body-parser");
const express = require("express");

const seletedResumeRouter = express.Router();

seletedResumeRouter.post("/", async (req, res) => {
  const reqs = req?.body;

  console.log(reqs);
});

module.exports = seletedResumeRouter;
