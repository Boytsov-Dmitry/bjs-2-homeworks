"use strict";
function solveEquation(a, b, c) {
  let d = b** - 4 * a * c;
  let arr = [];
  if (d < 0) {
    arr = [];
  }

  if (d === 0) {
    arr = [-b / (2 * a)];
  }

  if (d > 0) {
    arr = [((-b + Math.sqrt(d) ) / (2 * a)), ((-b - Math.sqrt(d) ) / (2 * a))];
  }
  
  return arr;
}

solveEquation(1, 5, 4)


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent * 0.01 / 12; 
  let creditBody = amount - contribution;
  let paymentPerMonth = creditBody * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let fullPayment = Number((paymentPerMonth * countMonths).toFixed(2));
  console.log(fullPayment);
}

calculateTotalMortgage(10, 1000, 50000, 12)