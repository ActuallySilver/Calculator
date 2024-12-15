const { calculate } = require("@/utils/calculate");

describe("calculate", () => {
  test("add", () => {
    const equation = "1+5";
    const result = calculate(equation);
    expect(result).toBe("6");
  });
  test("add multiple times", () => {
    const equation = "1+5+4";
    const result = calculate(equation);
    expect(result).toBe("10");
  });
  test("subtract", () => {
    const equation = "1-5";
    const result = calculate(equation);
    expect(result).toBe("-4");
  });
  test("multiply", () => {
    const equation = "3×5";
    const result = calculate(equation);
    expect(result).toBe("15");
  });
  test("multiply negative numbers", () => {
    const equation = "3×-5";
    const result = calculate(equation);
    expect(result).toBe("-15");
  });
  test("divide", () => {
    const equation = "6÷2";
    const result = calculate(equation);
    expect(result).toBe("3");
  });
  test("add and subtract", () => {
    const equation = "1+5-2";
    const result = calculate(equation);
    expect(result).toBe("4");
  });
  test("add and multiply", () => {
    const equation = "1+5×3";
    const result = calculate(equation);
    expect(result).toBe("16");
  });
  test("add and divide", () => {
    const equation = "1+6÷2";
    const result = calculate(equation);
    expect(result).toBe("4");
  });
  test("multiply and divide symbols", () => {
    const equation = "4×5÷2";
    const result = calculate(equation);
    expect(result).toBe("10");
  });
  test("works with * and /", () => {
    const equation = "1*3/2";
    const result = calculate(equation);
    expect(result).toBe("1.5");
  });
  test("usage of brackets", () => {
    const equation = "(1+5)×3";
    const result = calculate(equation);
    expect(result).toBe("18");

    const equation2 = "(21×113)+(4×24)÷3";
    const result2 = calculate(equation2);
    expect(result2).toBe("2405");
  });
  test("usage of nested brackets", () => {
    const equation = "((2+5)×6)×(1+3)";
    const result = calculate(equation);
    expect(result).toBe("168");
  });
  test("invalid characters get ignored", () => {
    const equation = "1+3ac";
    const result = calculate(equation);
    expect(result).toBe("4");
  });
  test("answers containing xe+y work", () => {
    const equation = "1000000000000*1000000000000";
    const result = calculate(equation);
    expect(result).toBe("1e+24");
  });
  test("questions containing xe+y work", () => {
    const equation = "1e+25*10";
    const result = calculate(equation);
    expect(result).toBe("1e+26");
  });
  test("questions containing multiple xe+y work", () => {
    const equation = "1e+12*1e+12";
    const result = calculate(equation);
    expect(result).toBe("1e+24");
  });
  test("can multiply decimals", () => {
    const equation = "5.3*2.2";
    const result = calculate(equation);
    expect(result).toBe("11.66");
  });
  test("double negative becomes positive", () => {
    const equation = "5--2--2";
    const result = calculate(equation);
    expect(result).toBe("9");
  });
  test("triple negative becomes negative and quadruple negative becomes positive", () => {
    const equation = "5---2----2";
    const result = calculate(equation);
    expect(result).toBe("5");
  });
  test("calculations work when brackets are just around a number", () => {
    const equation = "5-(4)";
    const result = calculate(equation);
    expect(result).toBe("1");
  });
  test("calculations work when brackets are just around a number", () => {
    const equation = "5-(4)";
    const result = calculate(equation);
    expect(result).toBe("1");
  });
});
