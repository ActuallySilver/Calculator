import { getHighestDecimalPlace } from "./getDecimalPlaces";

export const add = (num1: number, num2: number) => {
  //Implemented this line as was receiving some errors due to floating point calculations
  let decimalPlaces = getHighestDecimalPlace([num1, num2]);
  
  return Number((num1 + num2).toFixed(decimalPlaces));
};
