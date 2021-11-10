const prompt = require("prompt-sync")();

const DEDUCTION_AGE = 5 

const name = prompt ("HI, what's your name? : ")

console.log ("\n")

console.log (`Welcome to our show,${name}. `)

console.log ("\n")

const age = parseInt (prompt("How old are you? "))

const fakeage = age - DEDUCTION_AGE

console.log ("\n")

console.log (`Hmmmmm, you don't look a day over ${fakeage} `)

console.log ("\n")

const location = prompt(`Tell me, ${name}, where do you live? `)

console.log ("\n")

console.log (`Oh, I,ve heard ${location} is a lovely place. `)
