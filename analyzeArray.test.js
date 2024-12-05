const { analyzeArray } = require("./analyzeArray");

test("returns properties", function () {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("handles an array with negative numbers", () => {
  expect(analyzeArray([-3, -7, -1, -5])).toEqual({
    average: -4,
    min: -7,
    max: -1,
    length: 4,
  });
});

test("handles an array with a single number", () => {
  expect(analyzeArray([42])).toEqual({
    average: 42,
    min: 42,
    max: 42,
    length: 1,
  });
});

test("handles an array with all identical numbers", () => {
  expect(analyzeArray([5, 5, 5, 5, 5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 5,
  });
});

test("returns NaN for average in an empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: NaN,
    min: Infinity,
    max: -Infinity,
    length: 0,
  });
});

test("handles an array with floating-point numbers", () => {
  expect(analyzeArray([1.5, 2.3, 3.7, 4.1])).toEqual({
    average: 2.9,
    min: 1.5,
    max: 4.1,
    length: 4,
  });
});
