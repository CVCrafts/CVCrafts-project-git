const express = require("express");
const homeRouter = express.Router();
const { getTokenResponseAndInformation } = require("../OAuth2/OAuth2.util");

homeRouter.get("/", async (req, res) => {
  getTokenResponseAndInformation(req, res);
});

module.exports = homeRouter;
