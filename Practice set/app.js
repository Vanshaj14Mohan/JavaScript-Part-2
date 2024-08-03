//1.
let msg = "help" //trim it and convert into uppercase
ans = msg.trim().toUpperCase();
console.log(ans);

//2.
string = "yourschools"
console.log(string.slice(4,9));
console.log(string.indexOf("sc"));
console.log(string.replace("your", "our"));
console.log(string.slice(4,10).replace("l", "a"));

//3-> Wap to get the first n elements of an array.[n can be any positive number]
//eg-> array[7,9,0,-2] and n = 3, print[9,0,-2]
let arr = [7,9,0,-2]
test = arr.splice(0,3);
console.log("New Case:", test);

//4-> Wap to get the last n elements of an array.[n can be any positive number]
//eg-> array[7,9,0,-2] and n = 3, print[7,9,0]
let arr2 = [7,9,0,-2]
let n = 3
test2 = arr2.splice(arr2.length-n);
console.log("New Case:", test2);

//5 -> Wap to check wheter a string is blank or not.
// let str = prompt("Enter a string");
// if(str.length == 0){
//     console.log("Empty string");
// }
// else{
//     console.log("Not an empty string")
// }

//6 -> Wap to test whether character at the given place is lowercase or not.
let name = "Amazing theme"
let idx = 4;
if(name[idx] == name[idx].toLowerCase()){
    console.log("In lower case");
}
else{
    console.log("Not in lower case");
}

//7 -> Wap to strip leading and trailing spaces from a string.
let x = prompt("Enter a string");
console.log("Original String", `${x}`);
console.log("New string", `${str.trim()}`);
