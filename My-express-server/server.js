
const express = require("express");

const app = express();

app.listen(3000);

app.get("/about", function(req, res){
  res.send("Hey I'm a software engineer!")
})
