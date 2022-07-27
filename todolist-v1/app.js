const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js")

var newItems = ["Buy Food", "MakeFood", "Eat Food"];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  let day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: newItems
  })
});

app.get("/work", function(req,res){
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  })
});

app.post("/", function(req,res){

  console.log(req.body);

  var item = req.body.newItem;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    newItems.push(item);
    res.redirect("/");
  }


})

app.listen(3000, function() {
  console.log("Server started on port 3000");
})
