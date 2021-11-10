const prompt = require("prompt-sync")();



const CONVERSION_RATE = 2.2
const name = prompt ("Please provide us with your full name: ")
const weight = parseFloat (prompt("Please provide us with your current weight in Kilograms: "))
const conversion = weight * CONVERSION_RATE

console.log ("\n\n")
console.log ("*****************Weight Converter*******************")
console.log ("\n\n")
console.log (`Hi ${name} your current weight in LBS(Pounds) is ${conversion .toFixed(2)}`)