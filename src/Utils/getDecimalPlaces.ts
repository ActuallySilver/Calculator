export const getDecimalPlaces = (number: number) => {
  if (!number.toString().includes(".")) {
    return 0;
  }
  const decimals = number.toString().split(".")[1];
  return decimals.length;
};

export const getHighestDecimalPlace = (numbers: number[]) => {
  const longestDecimalLength = numbers.reduce((longestDecimalLength, number) => {
    const nextDecimalPlaces = getDecimalPlaces(number);
    return nextDecimalPlaces > longestDecimalLength ? nextDecimalPlaces : longestDecimalLength;
  }, 0);

  return longestDecimalLength;
};
