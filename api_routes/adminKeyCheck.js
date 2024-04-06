require("dotenv").config();
var express = require("express");
const app = express();
var cookieParser = require("cookie-parser");

app.use(cookieParser());

const adminKeyCheck = (req, res, next) => {
  try {
    const providedAdminKey = req.headers["api-key"];
    if (providedAdminKey && providedAdminKey === process.env.APIKEY) {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized access" });
    }
  } catch (err) {
    console.log(err);
    res.status(401).send("Try Logging in again!!");
  }
};

module.exports = adminKeyCheck;
