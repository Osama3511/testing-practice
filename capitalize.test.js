const { capitalize } = require("./capitalize");
test("Capitalize string", function () {
  expect(capitalize("dodo")).toBe("Dodo");
});

test("Capitalize string", function () {
  expect(capitalize("koko")).toBe("Koko");
});

test("Capitalize string", function () {
  expect(capitalize("lulu")).toBe("Lulu");
});

test("Doesn't accept numbers", function () {
    expect(capitalize("3bdo")).toBe(null);
});
