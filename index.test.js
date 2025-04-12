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

test("handles new lines between numbers", () => {
  expect(Add("1\n2,3")).toBe(6);
  expect(Add("10\n20\n30")).toBe(60);
});

test("Support different delimiters", () => {
    expect(Add("//;\n1;2")).toBe(3);
    expect(Add("//;\n1;2;3;4;5")).toBe(15);
    expect(Add("//$\n10$20$30")).toBe(60);
    expect(Add("//!\n10!20!30!100")).toBe(160);
});

test("throws error for any negative numbers", () => {
  expect(() => Add("1,-2,3")).toThrow("negatives not allowed: -2");
});

test("throws error for multiple negative numbers", () => {
  expect(() => Add("1,-2,-3")).toThrow("negatives not allowed: -2, -3");
});

test("handles custom delimiter with negative numbers", () => {
  expect(() => Add("//;\n1;2;-3")).toThrow("negatives not allowed: -3");
});

test("Numbers bigger than 1000 should be ignored", () => {
  expect(Add("2,1001")).toBe(2);
  expect(Add("1000,2560")).toBe(1000); 
  expect(Add("1000,100,200")).toBe(1300); 
  expect(Add("1001,100,200")).toBe(300); 
});

test("Delimiters can be of any length", () => {
    expect(Add("//[***]\n1***2***3")).toBe(6);
    expect(Add("//[#####]\n10#####20#####50")).toBe(80);
});