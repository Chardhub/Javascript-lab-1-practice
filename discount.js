const prompt = require("prompt-sync")();

const itemName = prompt ("please enter the name of the item Name: ");

const itemNum = parseFloat (prompt("please enter the item number: "));

const price = parseFloat (prompt("please enter the price of the item: "))

const discountPercent = parseFloat (prompt("please enter the discount percent: "))

const discountAmt = (discountPercent/100) * price;

const finalPrice = price - discountAmt;

console.log ("\n\n")

console.log ("************ Customer Receipt ************");
console.log ("\n")
console.log (`Original price of Product:${itemName} Item Number:${itemNum} = ${price .toFixed(2)}`);
console.log (`Authorized discount of ${discountPercent}% = ${discountAmt .toFixed(2)}`);
console.log (`Total = ${finalPrice .toFixed(2)}`);





