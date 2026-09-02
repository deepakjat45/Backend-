//express

// express code:-
const express = require('express');
const app = express();
// console.log(app);

let port = 3000; //or 8080 etc. 

app.listen(port, () => { // start a sever and listen request
    console.log(`app is listening on port ${port}`)  // http://localhost:3000/
});



// //app.use
// app.use((req, res)=>{
//     // console.log(req);
//     console.log("Response  received");
//     // res.send("this is a basic text responce"); // res.send response send karta he 
//     // res.send({
//     //     name : "apple",
//     //     colore: "red"
//     // }); 
//     res.send("<h1>Hello Heare is some Fruits<h1><ul>Fruits<ul><li>apple<li>mango<li>banana<li>orange");
// });



// //app.get  //to response Specific routes 
app.get("/", (req, res)=>{
    res.send("Hello i am root");
});
// app.get("/apple", (req, res)=>{
//     res.send("You contacted apple path");
// });
// app.get("/mango", (req, res)=>{
//     res.send("You contacted mango path");
// });




//app.post  //to send post request and response
//pahle hoppscotch me post request select kare tab display hoga
app.post("/",(req, res)=>{
    res.send("you send post request");
});



// //nodemon 
//server start/stop probleme ko solve karta he
//hamesha globaly install karte he 
// bad me file run karte samye ye command likhe -->  nodemon <fileName>



//path parameters // to change routs based on search parameters
app.get("/:username/:id", (req, res)=>{
    // console.log(req.params);
    // res.send("Hello i am root");
    let {username, id}  = req.params;
    // res.send(`wellcome to the username @${username}, and id #${id}`);
    let htmlStr = `<h1>wellcome to the username @${username}, and id #${id}<h1>`; //in html code
    res.send(htmlStr);
});



app.get("/search", (req, res)=>{
    // console.log(req.query);
    // res.send("no result");
    let {q} = req.query;

    // agar koi query search nahi ki gayi to 
    if (!q) {
        res.send("<h1>nothing searched<h1>");
    }
    
    res.send(`these are the result from search ${q}.`);
});


// ex. -->   http://localhost:3000/search?q=apple&color=red    <--ese hoppscotch pe send karo



// not exist path par jane par error batane ke liye
app.use((req, res)=>{
    res.status(404).send("This path does not exist"); //chatgpt se likah 
});