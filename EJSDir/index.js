//EJS:-

const express = require('express'); 
const app = express();

const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

//rolldice
app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    // res.render("rolldice.ejs", {diceValue : diceValue});
    //or 
    res.render("rolldice.ejs", { diceValue });
});


// //activity //instagram ejs use
// app.get("/ig/:username", (req, res) => {
//     let = { username } = req.params;
//     // loops in EJS 
//     const followers = ["hello", "raj", "maya", "adam", "deepak"];
//     res.render("instagram.ejs", { username ,followers});
// })



app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram", {data});
    }else{
        res.render("error.ejs");
    }
});


app.use((req, res)=>{
    res.status(404).send("This path does not exist");
});


app.listen(port, () => {
    console.log(`listening on port : ${port}`);
});


