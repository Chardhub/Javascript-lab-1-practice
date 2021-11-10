const prompt = require("prompt-sync")();

const L =  parseInt (prompt("please enter the lenght of the rectangle: "));

const W = parseInt (prompt("please enter the width of the rectangle:"));

const uom = prompt ("please enter the unit of mesurement :");

const area =  L * W 

const perimeter = L + W * 2

console.log (`The Area of the rectangle is ${area}${uom} and the perimeter of the rectangle is ${perimeter}${uom}`)