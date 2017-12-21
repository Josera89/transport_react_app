"use strict";

var express = require("express");
var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static('public'))
// app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/", (req, res) => {
  console.log("Welcome to the server");
  res.end("Welcome!");
  // res.json("chuy")
  // res.json("chuy.json")
});
