const Calculator = (function () {
  const add = (num1, num2) => +num1 + +num2;
  const sub = (num1, num2) => num1 - num2;
  const mul = (num1, num2) => num1 * num2;
  const div = (num1, num2) => num2 === 0 ? NaN: num1 / num2;

  return { add, sub, mul, div };
})();

module.exports = { Calculator };
