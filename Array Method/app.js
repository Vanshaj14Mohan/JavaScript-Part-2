let cars = ["audi", "bmw", "bugati", "ford", "ferrari"]
console.log(cars);
console.log(cars.push("xuv"));
// cars.pop();
// console.log(cars.pop());
cars.pop();
console.log(cars.pop());
//shift & unshift operators
console.log("shift & unshift operators");
cars.unshift("xuv");
cars.unshift("thar");
console.log(cars.unshift());
console.log(cars);
console.log(cars.shift());
console.log(cars);

let followers = ["a", "b", "c", "d"];
console.log("current followers",followers);
let blocked = followers.shift("a");
console.log("blocked one",blocked);

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

//Concatenate & Reverse case
let secondary = ["purple", "peach", "white", "aqua"]
mix = primary.concat(secondary);
console.log("Concatenated result:", mix);
