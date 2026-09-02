// MySQL with node:-

//require packages
const { faker, HelpersModule } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//create connection object
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "deepak45@#",
});

//to get fake user
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// //insert data
// let q = "insert into user (id, username, email, password) values ?";  //query
// // insert manually
// // let users = [
// //   // ["123", "123_newuser", "abc@gmail.com", "abc"],
// //   ["123b", "123_newuserb", "abcb@gmail.com", "abcb"],
// //   ["123c", "123_newuserc", "abcc@gmail.com", "abcc"],
// // ]

// // insert in bulk
// let data = [];
// for(let i=1; i<=100; i++) {
//   data.push(getRandomUser()); //100 fake users
// }

//Home route:-
app.get("/", (req, res) => {
  let q = `select count(*) from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("error in DB");
  }
});


//Show route:-
app.get("/user", (req, res) => {
  let q = `select * from user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("error in DB");
  }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("error in DB");
  }
});

//Update route:-
app.patch("/user/:id", (req, res) => {
  //get id 
  let { id } = req.params;
  //get new username and password from form
  let { password: formPass, username: newUsername } = req.body;
  //query 
  let q = `select * from user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      //chack form pass. is right or worng 
      if (formPass != user.password) {
        res.send("worng password");
      } else {
        //then run secend query 
        let q2 = `update user set username='${newUsername}' where id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("error in DB");
  }
});

//create user button 
app.get("/user/new", (req, res) => {
  res.render("createUser.ejs");
})


//create user route:-
app.post("/user/new", (req, res) => {
  let { id, username, email, password } = req.body;
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  } catch (err) {
    console.log(err);
    res.send("info exist, try anything else");
  }
});

app.listen("8080", (req, res) => {
  console.log("server is listening on port 8080");
});

// //connection query
// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     // console.log(result.length);
//     // console.log(result[0]);
//     // console.log(result[1]);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end(); //to end connection
