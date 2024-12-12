export const getDecimalPlaces = (number: number) => {
  if (!number.toString().includes(".")) {
    return 0;
  }
  const decimals = number.toString().split(".")[1];
  return decimals.length;
};

export const getHighestDecimalPlace = (numbers: number[]) => {
  const longestDecimalLength = numbers.reduce((highestDecimalPlace, number) => {
    const nextDecimalPlaces = getDecimalPlaces(number);
    return nextDecimalPlaces > highestDecimalPlace ? nextDecimalPlaces : highestDecimalPlace;
  });
  return longestDecimalLength;
};
