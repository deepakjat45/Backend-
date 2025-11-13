// mongodb with express

//require packages:
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

// seting path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extends: true })); //to parsh the req.body data

//mongoose code:
main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fackwhatsapp");
}

{
  // //create a chat
  // let chat1 = new Chat({
  //   from: "neha",
  //   to: "sunita",
  //   msg: "send me your assignment answers",
  //   created_at: new Date()
  // });
  // //insert the chat
  // chat1.save().then((res)=>{
  //   console.log(res);
  // });
}

// Index rout:-
app.get("/chats", async (req, res) => {
  let chats = await Chat.find(); //to get all chats from database
  console.log(chats);
  res.render("index.ejs", { chats });
});

// go to new chat route:-
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// chat create route:-
app.post("/chats", (req, res) => {
  let { from, msg, to } = req.body; //get form data 
  //create chat
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  //save chat 
  newChat
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

// New route
app.get("/chats/:id", async (req, res)=>{
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", {chat});
});


//edit route, update route and delete route
// get req, put req and Delete req.
//i skiped this part only understand


//home route
app.get("/", (req, res) => {
  res.send("root is working");
});

//server runing
app.listen(8080, () => {
  console.log("server is runing on port 8080");
});
