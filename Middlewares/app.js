// Middleware in Express:-

const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");



// // middleware
// app.use((req, res)=>{
//     console.log("hello i am the middleware");
//     res.send("bye");
// });

// // middleware with next
// app.use((req, res, next) => {
//   console.log("hello i am the middleware");
//   next();
// });


// //Utilety middleware:-
// //logger
// app.use((req, res, next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });


// what app.use can do:- (path and callback) 
app.use("/random", (req, res, next)=>{
    console.log("hello, this is random");
    next();
});


// Activity
const checkTocken = (req, res, next)=>{
  let {tocken} = req.query;
  if(tocken === "giveaccess"){ 
    next();
  }else{
    throw new ExpressError("ACCESS DENIED!");
  }
};

app.get("/api", checkTocken, (req, res)=>{
  res.send("Data");
});


app.get("/random", (req, res) => {
  res.send("hello this is a random page");
});

app.get("/", (req, res) => {
  res.send("hello");
});


//error handling middleware
app.use("/err", (req, res)=>{ //error page
  abc = abc;
});
app.use((err, req, res, next)=>{ //error handling
  console.log("----ERROR----");
  next(err); // to next error handling middleware
});

app.use((err, req, res, next)=>{ //error handling
  console.log("----ERROR2----");
  next(err); // to next error handling middleware //in this case express's error handling midd. 
});

 
app.use((req, res)=>{
  res.status(404).send("Page not found"); 
});

app.listen(8080, ()=>{
  console.log("app is listining on port 8080");
});