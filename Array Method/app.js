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
