import { add } from "./add";
import { divide } from "./divide";
import { multiply } from "./multiply";
import { subtract } from "./subtract";

const scientificNotationRegex = /(^-)?\d+(\.\d+)?(e[+-]?\d+)?/;

export const calculate = (equation: string): string => {
  equation = formatEquation(equation);

  const equationSection = getNextEquationSection(equation);
  
  //Equation has nothing left to resolve
  if (!equationSection) {
    return equation;
  }

  const { symbol, num1, num2 } = getEquationParts(equationSection);

  let result = 0;
  switch (symbol) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "×":
    case "*":
      result = multiply(num1, num2);
      break;
    case "÷":
    case "/":
      result = divide(num1, num2);
      break;
  }

  //Replace section of equation that was calculated with the result
  const newEquation = equation.replace(equationSection, `${result}`);
  return calculate(newEquation);
};

const formatEquation = (equation: string): string => {
  //remove invalid characters. If all characters invalid then set equation as "0"
  const invalidCharacterRegex = /[\d×÷*/\+\-\(\)\.e]+/;
  [equation] = equation.match(new RegExp(invalidCharacterRegex)) || "0";

  equation = equation.replace(/--/g, "+");
  return equation;
};

//Returns all parts of the equation
const getEquationParts = (equation: string) => {
  const [symbol] = equation.replace(new RegExp(scientificNotationRegex.source, "g"), "").match(/[\+\-×*/÷]/)!;

  const numbersIterator = equation.matchAll(new RegExp(scientificNotationRegex.source, "g"));
  const numbers: number[] = [];
  for (let number of numbersIterator) {
    numbers.push(Number.parseFloat(number[0]));
  }

  return { symbol, num1: numbers[0], num2: numbers[1] };
};

//Gets the next part of the equation to resolve
const getNextEquationSection = (equation: string) => {
  const innerMostBracketsRegex = /\([\d+-×÷\.]+\)/;

  let equationSection = null;

  //Checking for inner most brackets and resolving as "new equation"
  equationSection = equation.match(new RegExp(innerMostBracketsRegex));

  //Checking for multiply and divide
  equationSection =
    equationSection || equation.match(new RegExp(`${scientificNotationRegex.source}[×÷*/]${scientificNotationRegex.source}`));

  //checking for add or subtract
  equationSection =
    equationSection || equation.match(new RegExp(`(${scientificNotationRegex.source})[\+\-](${scientificNotationRegex.source})`));

  if (!equationSection) return null;
  return equationSection[0];
};
