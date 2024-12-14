import { add } from "./add";
import { divide } from "./divide";
import { multiply } from "./multiply";
import { subtract } from "./subtract";

export const calculate = (equation: string): string => {
  const scientificNotationRegex = /(^-)?\d+(\.\d+)?(e[+-]?\d+)?/;
  const invalidCharacterRegex = /[\d×÷*/\+\-\(\)\.e]+/;
  const innerMostBracketsRegex = /\([\d+-×÷\.]+\)/;

  //If answer is xe+y (×10^y) return it
  if (new RegExp(`^${scientificNotationRegex.source}$`).test(equation)) {
    return equation;
  }

  //remove invalid characters. If all characters invalid then set equation as "0"
  [equation] = equation.match(new RegExp(invalidCharacterRegex)) || "0";

  equation = equation.replace(/--/g, '+');

  let equationSection = null;

  //Checking for inner most brackets and resolving as "new equation"
  equationSection = equation.match(new RegExp(innerMostBracketsRegex));
  if (equationSection) {
    const result = calculate(equationSection[0].replaceAll(/[\(\)]/g, ""));
    const newEquation = equation.replace(equationSection[0], result.toString());
    return calculate(newEquation);
  }

  //Checking for multiply and divide
  equationSection =
    equationSection || equation.match(new RegExp(`${scientificNotationRegex.source}[×÷*/]${scientificNotationRegex.source}`));
  //checking for add or subtract
  equationSection =
    equationSection || equation.match(new RegExp(`(${scientificNotationRegex.source})[\+\-](${scientificNotationRegex.source})`));

  //Equation has nothing left to resolve
  if (!equationSection) {
    return equation;
  }

  const [symbol] = equationSection[0].replaceAll(new RegExp(scientificNotationRegex.source, "g"), "").match(/[\+\-×*/÷]/)!;

  const numbersIterator = equationSection[0].matchAll(new RegExp(scientificNotationRegex.source, "g"));
  const numbers: number[] = [];
  for (let number of numbersIterator) {
    numbers.push(Number.parseFloat(number[0]));
  }

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
  const newEquation = equation.replace(equationSection[0], `${result}`);
  return calculate(newEquation);
};
