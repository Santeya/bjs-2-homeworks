'use strict';

function solveEquation(a, b, c) {
  let arr = [];

  let d = (b ** 2) - (4 * a * c);

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (!isNaN(percent)) {
    Number.percent;
  } else if (isNaN(percent)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`)
  }

  if (!isNaN(contribution)) {
    Number.contribution;
  } else if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`)
  }

  if (!isNaN(amount)) {
    Number.amount;
  } else if (isNaN(amount)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`)
  }

  let percentCalculated = Number(percent / 100).toFixed(2);

  let amountBody = amount - contribution;

  let amountTerm;

  let dateFrom = new Date();
  let dateTo = new Date(date);

  amountTerm = (dateTo.getMonth() - dateFrom.getMonth()) + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));

  let p = 1 / 12 * percentCalculated;

  let monthlyPayment = amountBody * (p + (p / (((1 + p) ** amountTerm) - 1)));

  let totalPayment = monthlyPayment * amountTerm;

  totalAmount = +(contribution + totalPayment).toFixed(2);

  console.log(totalAmount);

  return totalAmount;
}
