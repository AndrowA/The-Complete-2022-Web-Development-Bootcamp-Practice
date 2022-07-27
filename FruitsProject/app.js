const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/FruitsDB');
}

const fruitSchema = new mongoose.Schema({
  name: {
  type: String,
  required: [true, "Please enter a name!"]
  },
  rating: {
    type:Number,
    min:1,
    max:10
  },
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

const Person = new mongoose.model("Person", personSchema);

const fruit = new Fruit({
  name: "bambou",
  rating: 7,
  review: "Great!"
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 7,
  review: "Great Fruit!"
});

const mango = new Fruit({
  name: "mango",
  rating: 7,
  review: "Great Fruit!"
});

pineapple.save();
mango.save();

Person.updateMany({name: "John"}, {favoriteFruit: mango}, function(err, fruits) {
  if (err){
  	console.log(err);
  }else{
  	console.log("Succesfully saved all the fruits to fruitsDB");
  }
  })

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 7,
//   review: "Great!"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 7,
//   review: "Great!"
// });
//
const person = new Person({
  name: "Emy",
  age: 12,
  favoriteFruit: pineapple
});



// Fruit.insertMany([banana, kiwi],function(err){
// if (err){
// 	console.log(err);
// }else{
// 	console.log("Succesfully saved all the fruits to fruitsDB");
// }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function(fruit) {
      console.log(fruit.name)
    })
  }
});
//
// Fruit.updateOne({_id: "62a8dfcef9ed1dcd38618cf8"}, {name: "Peach"}, function(err){
// if (err) {
// 	console.log(err);
// }else{
// 			console.log("Successfully updated the doocument!");
// }
// // })
//
// Fruit.deleteMany({name:'bambou'}, function(err){
// if (err) {
// 	console.log(err);
// }else{
// 			console.log("Successfully deleted the doocument!");
// }
// })ß

//bambou.save();


person.save();

// fruit.save();
