var dotenv = require("dotenv");
dotenv.config();
var express = require("express");
const app = express();
var cors = require("cors");

const apiRoute = require("./api_routes/allApiRoutes");
const { testConnection } = require("./db/connection");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

testConnection();

app.get("/", async (req, res) => {
  res.send("Welcome!!");
});

app.use("/api", apiRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
