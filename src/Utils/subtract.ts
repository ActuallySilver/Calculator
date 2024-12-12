import { getHighestDecimalPlace } from "./getDecimalPlaces";

export const subtract = (num1: number, num2: number) => {
  let decimalPlaces = getHighestDecimalPlace([num1, num2]);

  return Number((num1 - num2).toFixed(decimalPlaces));
};
