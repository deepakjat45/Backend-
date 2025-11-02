const figlet = require('figlet');

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


//or 


// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("Deepak Jat");
//   console.log(text);
// }

// doStuff();


//or 


figlet.text(
  "Deepak Jat",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);