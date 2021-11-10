const prompt = require("prompt-sync")();


const name = prompt ("Please enter employee name: ");

const weeklyWage = parseInt(prompt("please enter the employee fixed weekly wage: "));

const weeklySales = parseInt(prompt("please enter employees weekly sales: "));

const commission = weeklySales * 0.20 ;

const grossSalary = weeklyWage;

const netSalary = grossSalary + commission;

console.log ("\n\n")

console.log ("*****************Employee Pay Slip *******************")
console.log ("\n\n")
console.log (`Employee Name: ${name}`)
console.log (`Gross Salary = ${grossSalary .toFixed(2)}`);
console.log (`Total Commission = ${commission .toFixed(2)}`);
console.log (`Net Salary = ${netSalary .toFixed(2)}`);