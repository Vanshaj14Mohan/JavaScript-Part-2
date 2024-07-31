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

//2-> For the given start state of an array, change it to final form using splice.
// start: ["january", "july", "march", "august"]
//final: ["july", "june", "march", "august"]

test = ["january", "july", "march", "august"]
pos = console.log(test.splice(0,1))
console.log(test);
add = console.log(test.splice(1,0, "June"));
console.log(add)
console.log(test);

//3-> Return the index of "JavaScript" from the given array if it was reversed.
lang = ["c", "c++", "html", "JavaScript", "Python", "Java", "c#", "sql"]
rev = console.log(lang.reverse().indexOf("JavaScript"));
console.log("Index of JavaScript:",rev);