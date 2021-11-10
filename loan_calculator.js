const prompt = require("prompt-sync")();

const Name = prompt("Please provide us with you First name: ")
const loan_amt = parseFloat (prompt(`Hi ${Name} how much would you like to borrow: `))
const annual_interest = parseFloat (prompt(`${Name} Please indicate Annual Interest Rate: `))
const loan_term = parseFloat (prompt(`Please indicate in year how long would you like to repay: `))
const loan_term_months = loan_term * 12
const monthly_interest =  ((annual_interest/100)/12) + 1 
Math.pow(monthly_interest , -loan_term_months) 
const monthly_payment = monthly_interest * loan_amt




console.log ("*****************Loan Calculator*******************")
console.log ("\n\n")
console.log (`Loan Amount = ${loan_amt}`)
console.log (`Annual Interest Rate = ${annual_interest}`)
console.log (`Number of payments = ${loan_term_months} `)
console.log (`Monthly payments = ${monthly_payment}`)