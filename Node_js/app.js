// let n = 5;
// for(let i=1; i<=n; i++){
//     console.log("hello, "+i);
// }
// console.log("name DJ"); 


// let args = process.argv;
// for(let i=2; i<args.length; i++){
//     console.log("hello to", args[i]);
// }
// console.log(process.argv);


// // math.js 
// const math = require("./math");
// // console.log(math);
// console.log(math.sum(2, 2));
// console.log(math.sum(2, 2));
// console.log(math.PI);
// console.log(math.a);


// // Fruits 
// const info = require("./Fruits");
// console.log(info[0]);
// console.log(info[0].name);



// // local vs globle //figlet npm package

// //*** mene globle figlet ko vapas se uninstall kar diya tha dusara example dekhane ke liye to tum vapas se install karna 

// const figlet = require('figlet');

// figlet.text(
//   "Deepak Jat",
//   {
//     font: "Ghost",
//     horizontalLayout: "default",
//     verticalLayout: "default",
//     width: 80,
//     whitespaceBreak: true,
//   },
//   function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   }
// );



//require vs import 
// import {sum, PI} from "./math.js";

// console.log(sum(1,5));
// console.log(PI);


// example of import 
// random-words
import { generate, count } from "random-words";
console.log(generate(5));