//jshint esversion:6

const express = require("express");

const app = express();

app.get("/api/getRandomWord", function (req, res) {
  console.log(req.query.length);
  res.send("flour");
});

app.listen(3001, function () {
  console.log("Listening on port 3000");
});
