//Trim method
let msg = "   hello   ";
let newMsg = msg.trim();
console.log(newMsg);

//UpperCase & LowerCase
let str = "Random string"
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Indexing
let code = "Ilovecoding"
console.log("Index of I is",code.indexOf("I"));
console.log("Index of g is",code.indexOf("g"));
console.log("Index of love is",code.indexOf("love"));
console.log("Index of d is",code.indexOf("d"));
console.log("Index of x is",code.indexOf("x"));

//Method Chaining
let text = "  hello  ";
// console.log(text);
// let newText = text.trim();
// console.log("After trim:", newText);
// let newText = text.toUpperCase();
// console.log("After Uppercase:", newText);
//easy way to do it:
let newText = text.trim().toUpperCase();
console.log("After Method Chaining:",newText);