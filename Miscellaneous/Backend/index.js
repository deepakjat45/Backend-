//GET vs POST request 

const express = require("express");
const app = express();
const port = 8080;

//post request code 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standered Get response wellcome ${user}!, your password is ${password}`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Standered Post response wellcome ${user}!`);
    console.log(req.body);
});

app.listen(port, (req, res) => {
    console.log(`listining on port ${port}`);
}); 