// basic express server 

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello this is root");
})

app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params;
    res.send(`hello ${username}, your id is ${id}`);
})


app.get("/search", (req, res)=>{
    let {q} = req.query
    console.log(q);
    res.send(`your query is ${q}`);  
})

app.listen(3000, () => {
    console.log("app is listing on port 3000");

})