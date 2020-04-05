export const formatCurrency = (
  cents: number,
  decimalPoint: number,
) => {
  const reversedArray = `${cents}`
    .split('')
    .reverse();
  const [decimalValue, intValue] = [
    reversedArray.slice(0, decimalPoint),
    reversedArray.slice(decimalPoint),
  ].map((array) => array.reverse().join(''));
  const result = `${intValue}.${decimalValue}`;
  return result;
};