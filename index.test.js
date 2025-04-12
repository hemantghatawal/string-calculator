const { Add } = require("./index.js");

test("if empty string return 0", () => {
  expect(Add("")).toBe(0);
});

test("return number for single input", () => {
  expect(Add("1")).toBe(1);
});

test("handles an unknown amount of numbers", () => {
  expect(Add("1,2,3,4,5")).toBe(15);
  expect(Add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
});