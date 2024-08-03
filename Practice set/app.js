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