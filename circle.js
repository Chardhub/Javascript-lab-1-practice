const prompt = require("prompt-sync")();

const pi = 22/7;

const Radius =  parseFloat(prompt("please enter the radius: "));

const uom = prompt ("please enter the unit of mesurement :");

const Rsquared = Radius ** 2;

const area = pi * Rsquared;

const circumference = 2 * pi * Radius;

console.log(`The area of the circle is ${area.toFixed(2)}${uom} and the circumference is ${circumference.toFixed(2)}${uom} `)