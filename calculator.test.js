const { Calculator } = require("./calculator");

test("adds two numbers", function () {
  expect(Calculator.add(4, 2)).toBe(6);
});

test("subtracts two numbers", function () {
  expect(Calculator.sub(4, 2)).toBe(2);
});

test("subtracts two numbers", function () {
  expect(Calculator.sub(2, 4)).toBe(-2);
});

test("multiply two numbers", function () {
  expect(Calculator.mul(2, 4)).toBe(8);
});

test("divides two numbers", function () {
  expect(Calculator.div(4, 2)).toBe(2);
});

test("accepts strings", function () {
  expect(Calculator.add("4", "2")).toBe(6);
});

test("accepts strings", function () {
  expect(Calculator.sub("4", "2")).toBe(2);
});

test("doesn't allow divsion by zero", function() {
    expect(Calculator.div(1, 0)).toBe(NaN);
})