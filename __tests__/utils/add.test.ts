const { add } = require("@/utils/add");

describe("add", () => {
  test("add 2 positive integers", () => {
    const num1 = 1;
    const num2 = 2;
    const result = add(num1, num2);
    expect(result).toBe(3);
  });
  test("add 2 negative integers", () => {
    const num1 = -1;
    const num2 = -2;
    const result = add(num1, num2);
    expect(result).toBe(-3);
  });
  test("add 2 positive decimals", () => {
    const num1 = 1.2;
    const num2 = 2.6;
    const result = add(num1, num2);
    expect(result).toBe(3.8);
  });
  test("add 2 negative decimals", () => {
    const num1 = -1.2;
    const num2 = -2.6;
    const result = add(num1, num2);
    expect(result).toBe(-3.8);
  });
  test("add a positive and a negative decimal", () => {
    const num1 = 1.2;
    const num2 = -2.6;
    const result = add(num1, num2);
    expect(result).toBe(-1.4);
  });
  test("add a positive and a negative number", () => {
    const num1 = -1;
    const num2 = 2;
    const result = add(num1, num2);
    expect(result).toBe(1);
  });
  test("add a zero number and a negative number", () => {
    const num1 = -1;
    const num2 = 0;
    const result = add(num1, num2);
    expect(result).toBe(-1);
  });
  test("add a zero number and a positive number", () => {
    const num1 = 0;
    const num2 = 2;
    const result = add(num1, num2);
    expect(result).toBe(2);
  });
});
