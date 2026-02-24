const express = require("express");
const app = express();


app.get("/", (req, res) => {
   res.send("hello this is root");
});

app.listen(3000, ()=> {
    console.log("app is lestening on prot 3000");
;})