const { caesarCipher } = require("./caesarCipher");

test("shifts string", function () {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("shifts string", function () {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("shifts string", function () {
  expect(caesarCipher("def", 3)).toBe("ghi");
});

test("case preservation", function () {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("doesn't change non-alphabetical characters", function () {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
