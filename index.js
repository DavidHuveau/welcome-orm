const express = require("express");
const app = express();
const models = require("./models");

app.post("/users", (req, res) => {
  const newUser = new models.users({
    name: "toto",
    age: 21
  });
  newUser.save();
  // res.json(process.env);
  res.send("insert ok");
});

app.get("/users", (req, res) => {
  // models.users.findById(1).then(data => {
  //   res.json(data);
  // });
  // models.users.find({ where: { id: 1 } }).then(data => {
  //   res.json(data);
  // });
  models.users
    .find({
      where: { id: 1 },
      include: [
        {
          model: models.orders
        }
      ]
    })
    .then(data => {
      res.json(data);
    });
});

app.get("/usersall", (req, res) => {
  models.users
    .findAll({
      include: [
        {
          model: models.orders
        }
      ]
    })
    .then(data => {
      res.json(data);
    });
});

app.post("/orders", (req, res) => {
  const newOrder = new models.orders({
    ref: "1234",
    userId: 1
  });
  newOrder.save();
  res.send("insert ok");
});

models.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 8080);
});
