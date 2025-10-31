const mongoose = require("mongoose");
const Chat = require("./models/chat.js"); //require model and Schema

//mongoose code:
main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "raj",
    to: "neha",
    msg: "send me your question, answers",
    created_at: new Date(),
  },
  {
    from: "ram",
    to: "rahul",
    msg: "send me your all notes",
    created_at: new Date(),
  },
  {
    from: "jj",
    to: "raj",
    msg: "sunita is great student",
    created_at: new Date(),
  },
  {
    from: "pavan",
    to: "modi",
    msg: "i was happy, and send , answers",
    created_at: new Date(),
  },
  {
    from: "gg",
    to: "koholi",
    msg: " how many rs",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
