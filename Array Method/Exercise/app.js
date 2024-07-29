//1 -> For the given start state of an array, change it to final form using methods.
// start: ["january", "july", "march", "august"]
//final: ["july", "june", "march", "august"]
let month = ["january", "july", "march", "august"]
//alternate way
// month.shift();
// month.shift();
// console.log(month);
// month.unshift("june");
// month.unshift("july");
console.log(month);
console.log("Before test", month);
console.log(month[0] = "july", month[1] = "june");
console.log("After test case",month)

//indexOf & includes method
//for indexOf -> will print the indexOf the values
let primary = ["red", "green", "blue", "yellow"]
console.log(primary.indexOf("green"));
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("pink"));
//For includes method
//-> Will show the included values
console.log(primary.includes("green"))//true
console.log(primary.includes("pink"))//false

