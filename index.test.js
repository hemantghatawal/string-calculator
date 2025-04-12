const { Add } = require("./index.js");

test("if empty string return 0", () => {
  expect(Add("")).toBe(0);
});

test("return number for single input", () => {
  expect(Add("1")).toBe(1);
});
