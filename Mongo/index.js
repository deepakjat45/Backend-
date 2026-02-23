//mongoose:- 

const mongoose = require("mongoose"); //requir mongoose

//code to make connection of monogDB with node
main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//make Schema for documents in mongo
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//model:- to make collection in momgoose
//generlly collection ke name ko hi model ka name dete he
const User = mongoose.model("User", userSchema);

// // insert in DB
// // insert one:-

// const user1 = new User({
//     name: "Adam",
//     age: 20,
//     email: "adam@yahoo.in",
// });

// user1.save();

// const user2 = new User({
//   name: "raj",
//   age: 54,
//   email: "raj@yahoo.in",
// });

// user2.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // insert many:-

// User.insertMany([
//     {name: "rahul", email: "rahul@gmail.com", age: 43},
//     {name: "pavan", email: "pavan@gmail.com", age: 26},
//     {name: "kavya", email: "kavya@gmail.com", age: 34},
//     {name: "deepak", email: "deepak@gmail.com", age: 22},
// ]).then((res)=>{
//     console.log(res);
// });



// // find in DB

// User.find({ age: { $lt: 30 } })
//   .then((res) => {
//     // console.log(res);
//     console.log(res[0].name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //find one
// User.findOne({ _id: '68ffb3ab64974e9d61c90caa' })
//   .then((res) => {
//     // console.log(res);
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // find by id //ye sabse jyada use hota he
// User.findById('68ffb3ab64974e9d61c90caa')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// // Update in DB

// //update one
// User.updateOne({ name: "deepak" }, { age: 20 })   //update age of deepak
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //update many
// User.updateMany({ age: {$gt: 40} }, { age: 25 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //find one and update
// User.findOneAndUpdate({ name: "deepak" }, { age: 22 }) 
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// Delete in DB

//delete one 
User.deleteOne({ name: "pavan" })  
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// //delete many 
// User.deleteMany({ age: 25 })  
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });