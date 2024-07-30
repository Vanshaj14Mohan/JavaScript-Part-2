let info = ["name", 30, 40.8, "age"]
console.log(info);
console.log("first value:",info[0]);
console.log("second value:",info[1]);
console.log("third value:",info[2]);
console.log("third value:",info[3]);
console.log("array length:",info.length);
//we can change values in array too.
info[0] = "class"
console.log("new info value:",info[0])
console.log(info);

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
