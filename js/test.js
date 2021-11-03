let sammy = {
    firstName: "Sammy",
    lastName: "Shark",
    color: "blue",
    location: "Ocean"
};
// console.log(sammy.color);

const name = "Martijn"; 
const lastName = "Shark"; 
const totalName = `My name is ${name} ${lastName}`;
// console.log(totalName); 

const now = new Date();
// console.log(now);
// console.log(now.getFullYear()); 

const epochTime = new Date(1);
// console.log(epochTime);

var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}; 
var s = JSON.stringify(obj); 
var o = JSON.parse(s); 

console.log(o); 
console.log(s);