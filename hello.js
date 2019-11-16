console.log("Hello world!");

console.log("process.env.USER:", process.env.USER);
console.log("process.env.IMAGE_URL:", process.env.IMAGE_URL);

var circle = require('./lib/circle');
console.log("circle.circumferenceeeeeeeeeeee(5):", circle.circumferenceeeeeeeeeeee(5));
console.log("circle.area(5):", circle.area(5));

var figlet = require('figlet');
figlet('Hello CS 290!', function (err, data) {
  if (!err) {
    console.log(data);
  }
});



// function makeCounter(start) {
//   var curr = start;
//   return function() {
//     curr += 1;
//     return curr;
//   };
// }
//
//
// var counter1 = makeCounter(10);
// var counter2 = makeCounter(150);
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
