const mongoose = require("mongoose"); //requir mongoose

//code to make connection of monogDB with node
main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

//difine schema with validations 
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
    maxLength: 30,  
  },
  auther: {
    type: String,
  },
  price: {
    type: Number,
    min: [10, "price is to low for amazon selling"],  //set miniman value and display err if rule voilated 
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});


const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     // tital: "math",   // if we dont write the tital, it will give error because we difine tital to be require 
//     auther: "rd shrma",
//     price: 450,
// });

// book1.save().then((res)=>{
//     console.log(res);
// });


// let book2 = new Book({
//     // tital: "math",   // if we dont write the tital, it will give error because we difine tital to be require 
//     auther: "rd shrma",
//     price: 200,
//     // price: '450', //will not give err because of its parseing value
//     // price: 'abc', //will give err because of its not parseing value
// });

// book2.save()
//     .then((res)=>{
//     console.log(res)
// });