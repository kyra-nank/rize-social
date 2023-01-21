const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "hey ella whats up" });
});

app.post("/", (req, res) => {
  res.send({ msg: "set rsvp to true" });
});

app.get("/add-guest", (req, res) => {
  res.send({ msg: "serve add guest form" });
});

app.post("/add-guest", (req, res) => {
  res.send({ msg: "add guest to database" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);