const express = require("express");
const app = express();
const models = require("./models");

app.get("/", (req, res) => {
  res.json(process.env);
  res.end;
});

models.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 8080);
});
