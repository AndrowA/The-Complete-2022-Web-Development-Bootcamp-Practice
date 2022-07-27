const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){

  const place = req.body.cityName;
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ place +"&appid=myID=" + unit;

  https.get(url, function(response){
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const iconCode = weatherData.weather[0].icon;
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].main;
      var icon = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
      res.write("<h1>The temperature in "+ place + " is of " + temp + " degrees Celcius.</h1>");
      res.write("<p>The weather condition in Quebec is " + description + "</p>");
      res.write("<img src=" + icon + ">");
      res.send();
    })
  })

})

app.listen(3000);
