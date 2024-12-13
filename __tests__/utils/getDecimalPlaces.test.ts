const { getDecimalPlaces, getHighestDecimalPlace } = require("@/utils/getDecimalPlaces");

describe("getDecimalPlaces", () => {
  test("works with an integer", () => {
    const num1 = 1;
    const result = getDecimalPlaces(num1);
    expect(result).toBe(0);
  });
  test("has 1 decimal place", () => {
    const num1 = 1.2;
    const result = getDecimalPlaces(num1);
    expect(result).toBe(1);
  });
  test("has multiple decimal places", () => {
    const num1 = 1.235;
    const result = getDecimalPlaces(num1);
    expect(result).toBe(3);
  });
  test("has a decimal place ending in 0", () => {
    const num1 = 1.2;
    const result = getDecimalPlaces(num1);
    expect(result).toBe(1);
  });
});

describe("getHighestDecimalPlaces", () => {
  test("works with any values where last decimal places is longest", () => {
    const num1 = 1;
    const num2 = 1.092;
    const num3 = 1.29345;
    const result = getHighestDecimalPlace([num1, num2, num3]);
    expect(result).toBe(5);
  });
  test("works with any values where first decimal places is longest", () => {
    const num3 = 1.29345;
    const num1 = 1;
    const num2 = 1.092;
    const result = getHighestDecimalPlace([num1, num2, num3]);
    expect(result).toBe(5);
  });
  test("works with whole numbers", () => {
    const num1 = 2373;
    const num2 = 32;
    const result = getHighestDecimalPlace([num1, num2]);
    expect(result).toBe(0);
  });
});
