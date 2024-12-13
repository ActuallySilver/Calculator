import { add } from "./add";
import { divide } from "./divide";
import { multiply } from "./multiply";
import { subtract } from "./subtract";

export const calculate = (equation: string): string => {
  //remove invalid characters. If all characters invalid then set equation as "0"
  [equation] = equation.match(/[0-9×÷*/\+\-\(\)\.]+/) || "0";

  //Regex is used to find a symbol between a number finding multiply and divide first as they need to be calculated first
  let equationSection = null;

  //Checking for inner most brackets and resolving as "new equation"
  equationSection = equation.match(/\([0-9+-×÷\.]+\)/);
  if (equationSection) {
    const result = calculate(equationSection[0].replaceAll(/[\(\)]/g, ""));

    const newEquation = equation.replace(equationSection[0], result.toString());
    return calculate(newEquation);
  }

  //Checking for multiply and divide
  equationSection = equationSection || equation.match(/[0-9\.]+[×÷*/][0-9\.]+/);
  //checking for add or subtract
  equationSection = equationSection || equation.match(/[0-9\.]+[\+\-][0-9\.]+/);

  //Equation has nothing left to resolve
  if (!equationSection) {
    return equation;
  }

  const [symbol] = equationSection[0].match(/[\+\-×*/÷]/)!;

  const numbers = equationSection[0].split(symbol).map((num) => Number.parseFloat(num));

  let result = 0;
  switch (symbol) {
    case "+":
      result = add(numbers[0], numbers[1]);
      break;
    case "-":
      result = subtract(numbers[0], numbers[1]);
      break;
    case "×":
    case "*":
      result = multiply(numbers[0], numbers[1]);
      break;
    case "÷":
    case "/":
      result = divide(numbers[0], numbers[1]);
      break;
  }

  //Replace section of equation that was calculated with the result
  const newEquation = equation.replace(equationSection[0], result.toString());

  return calculate(newEquation);
};
