const { divide } = require("@/utils/divide");
describe("divide", () => {
  test("divide 2 positive integers", () => {
    const num1 = 4;
    const num2 = 2;
    const result = divide(num1, num2);
    expect(result).toBe(2);
  });
  test("divide 2 negative integers", () => {
    const num1 = -4;
    const num2 = -2;
    const result = divide(num1, num2);
    expect(result).toBe(2);
  });
  test("divide a positive and a negative integer", () => {
    const num1 = -4;
    const num2 = 2;
    const result = divide(num1, num2);
    expect(result).toBe(-2);
  });
  test("divide 2 positive decimals resulting in whole number", () => {
    const num1 = 2.8;
    const num2 = 1.4;
    const result = divide(num1, num2);
    expect(result).toBe(2);
  });
  test("divide 2 positive decimals resulting in decimal number", () => {
    const num1 = 1.8;
    const num2 = 1.2;
    const result = divide(num1, num2);
    expect(result).toBe(1.5);
  });
  test("divide 0 with an integer", () => {
    const num1 = 0;
    const num2 = 2;
    const result = divide(num1, num2);
    expect(result).toBe(0);
  });
  test("divide by 0", () => {
    const num1 = 2;
    const num2 = 0;
    const result = divide(num1, num2);
    expect(result).toBe(NaN);
  });
});
