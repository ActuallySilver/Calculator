const { multiply } = require("@/utils/multiply");
describe("multiply", () => {
  test("multiply 2 positive integers", () => {
    const num1 = 1;
    const num2 = 2;
    const result = multiply(num1, num2);
    expect(result).toBe(2);
  });
  test("multiply 2 negative integers", () => {
    const num1 = -1;
    const num2 = -2;
    const result = multiply(num1, num2);
    expect(result).toBe(2);
  });
  test("multiply a positive and a negative integer", () => {
    const num1 = -1;
    const num2 = 2;
    const result = multiply(num1, num2);
    expect(result).toBe(-2);
  });
  test("multiply 2 positive decimals resulting in whole number", () => {
    const num1 = 1.2;
    const num2 = 2.5;
    const result = multiply(num1, num2);
    expect(result).toBe(3);
  });
  test("multiply 2 positive decimals resulting in decimal number", () => {
    const num1 = 1.4;
    const num2 = 2.5;
    const result = multiply(num1, num2);
    expect(result).toBe(3.5);
  });
  test("multiply 0 with an integer", () => {
    const num1 = 0;
    const num2 = 2;
    const result = multiply(num1, num2);
    expect(result).toBe(0);
  });
});
