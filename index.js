//jshint esversion:6
const express = require("express");
const app = express();
const cors = require('cors');
const fs = require('fs');

const allowedWords = fs.readFileSync('./wordle-answers-alphabetical.txt').toString('utf-8').split('\n');
const allowedGuesses = fs.readFileSync('./wordle-allowed-guesses.txt').toString('utf-8').split('\n');

app.use(cors());

app.get("/api/getRandomWord", function (req, res) {
  // console.log(req.query.length);
  let randomNumber = Math.floor(Math.random() * allowedWords.length);
  console.log(allowedWords[randomNumber]);
  res.send(allowedWords[randomNumber]);
});

app.get("/api/checkValidWord", function (req, res) {
  console.log(req.query.word);
  let valid = allowedWords.includes(req.query.word.toLowerCase());
  if(!valid) {
    valid = allowedGuesses.includes(req.query.word.toLowerCase());
  }
  res.send(valid);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
