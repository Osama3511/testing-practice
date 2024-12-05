const { reverseString } = require("./reverseString");

test("Reverses a string", function () {
  expect(reverseString("hello")).toBe("olleh");
});

test("Reverses a string", function () {
  expect(reverseString("3bdo")).toBe("odb3");
});

test("Reverses a string", function () {
  expect(reverseString("bear")).toBe("raeb");
});

test("Works with empty strings", function () {
  expect(reverseString("")).toBe("");
});

test('Works with integers', function() {
    expect(reverseString(234)).toBe("432");
})
