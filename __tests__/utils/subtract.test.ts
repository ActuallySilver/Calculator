const {subtract} = require("@/utils/subtract")

describe("subtract", () => {
    test("subtract 2 positive integers", () => {
      const num1 = 1;
      const num2 = 2;
      const result = subtract(num1, num2);
      expect(result).toBe(-1);
    });
    test("subtract 2 negative integers", () => {
      const num1 = -1;
      const num2 = -2;
      const result = subtract(num1, num2);
      expect(result).toBe(1);
    });
    test("subtract 2 positive decimals", () => {
      const num1 = 1.2;
      const num2 = 2.6;
      const result = subtract(num1, num2);
      expect(result).toBe(-1.4);
    });
    test("subtract 2 negative decimals", () => {
      const num1 = -1.2;
      const num2 = -2.6;
      const result = subtract(num1, num2);
      expect(result).toBe(1.4);
    });
    test("subtract a positive and a negative decimal", () => {
      const num1 = 1.2;
      const num2 = -2.6;
      const result = subtract(num1, num2);
      expect(result).toBe(3.8);
    });
    test("subtract a positive and a negative number", () => {
      const num1 = -1;
      const num2 = 2;
      const result = subtract(num1, num2);
      expect(result).toBe(-3);
    });
    test("subtract a zero number and a negative number", () => {
      const num1 = -1;
      const num2 = 0;
      const result = subtract(num1, num2);
      expect(result).toBe(-1);
    });
    test("subtract a zero number and a positive number", () => {
      const num1 = 0;
      const num2 = 2;
      const result = subtract(num1, num2);
      expect(result).toBe(-2);
    });
  });
  