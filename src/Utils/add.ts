export const add = (num1: number, num2: number) => {
  let num1DeciamlPlaces = getDecimalPlaces(num1);
  let num2DeciamlPlaces = getDecimalPlaces(num2);

  //Implemented this line as was receiving some errors due to floating point calculations
  let decimalPlaces = num1DeciamlPlaces >= num2DeciamlPlaces ? num1DeciamlPlaces : num2DeciamlPlaces;

  return Number((num1 + num2).toFixed(decimalPlaces));
};

const getDecimalPlaces = (number: number) => {
  if (!number.toString().includes(".")) {
    return 0;
  }
  const decimals = number.toString().split(".")[1];
  return decimals.length;
};
