require("dotenv").config();

var { expressjwt: jwt } = require("express-jwt");

var jwks = require("jwks-rsa");

const { default: axios } = require("axios");

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    credentialsRequired: true,
    jwksUri: process.env.NODE_JWTSURI,
  }),
  audience: process.env.NODE_AUDIENC,
  issuer: process.env.NODE_ISSUER,
  algorithms: [process.env.NODE_ALGORITHMS],
}).unless({
  path: ["/", "/resume", "/resume/content", "*"],
});

const getTokenResponseAndInformation = async (req, res) => {
  try {
    const accessToken = req?.headers?.authorization?.split(" ")[1];
    const response = await axios
      .get("https://cvcrafts.us.auth0.com/userinfo", {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          withCredentials: true,
        },
      })
      .catch((error) => console.log(error.message));
    const userInfo = response?.data;
    res.send(userInfo);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  jwtCheck,
  getTokenResponseAndInformation,
};
