const prompt = require("prompt-sync")();

const TAX_RATE = 0.25

const name = prompt ("Please enter employee name: ");

const hourlyWage = parseFloat(prompt(`Please enter the ${name} hourly wage: `));

const totalHours = parseFloat(prompt(`Please enter the total amount of hours that ${name} worked this week:`));

const grossSalary = hourlyWage * totalHours;

const deduction = TAX_RATE * grossSalary ;

const netSalary = grossSalary - deduction;

console.log ("\n\n")

console.log ("*****************Employee Pay Slip *******************")
console.log ("\n\n")
console.log (`Employee Name: ${name}`)
console.log (`Gross Salary ${grossSalary .toFixed(2)}`);
console.log (`Total Deductions = ${deduction .toFixed(2)}`);
console.log (`Net Salary ${netSalary .toFixed(2)}`);
