const express = require("express");
const app = express();
const DotEnv = require("dotenv");
DotEnv.config();

app.get("/", (req, res) => {
  res.json(process.env);
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Start on 8080");
});

