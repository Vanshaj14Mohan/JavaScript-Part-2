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
//to reverse the array position
rev = secondary.reverse();
console.log("Reversed case for secondary:", rev);
console.log(secondary); //array will be changed
//to tackle this
rev_again = secondary.reverse()
console.log("Original array:", rev_again);

//Slice and Splice method
half = secondary.slice();
console.log(half);
test_case = secondary.slice(2,3); //last index is not included
console.log(test_case);
last_one = secondary.slice(-2);
console.log("Last two values",last_one); //last two values 

//Splice -> removes/replaces/add elements in place, One in all tool can say
//splice(start, deleteCount, item0...item N)
let colors = ["red", "green", "blue", "orange", "yellow", "pink", "white"]
check = colors.splice(4);
console.log(check);
console.log(colors);
remove = colors.splice(0,1);
console.log(remove);
console.log(colors);
add = colors.splice(1,2, "black", "gray")
console.log(add);
console.log(colors);
replace = colors.splice(0,1, "Thar") //replace the value at 0 index
console.log(replace);
console.log(colors);

//sort 
console.log("For sort:", colors.sort());
let numbers = [1,4,3,5,7,2,9]
console.log("Numbers sort:", numbers.sort());

//Nested Arrays
let nested = [[1,2], [3,4], [5,6]]; 
console.log(nested);
console.log(nested[0], nested[1], nested[2]);
//For individual values.
console.log(nested[0][0], nested[0][1])
console.log(nested[1][0], nested[1][1])
console.log(nested[2][0], nested[2][1])
