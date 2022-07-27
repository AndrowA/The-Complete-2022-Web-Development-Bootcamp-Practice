const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var total = num1 + num2;

  res.send("Your sum is: " + total);

})

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight/(height*height);

  res.send("Your BMI is: " + bmi);
})

app.listen(3000);
