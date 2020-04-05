export const formatCurrency = (
  cents: number,
  decimalPoint: number,
) => {
  const reversedArray = `${cents}`
    .split('')
    .reverse();
  const decimalValue = reversedArray
    .slice(0, decimalPoint)
    .reverse()
    .join('');
  const intValue = reversedArray
    .slice(decimalPoint)
    .reverse()
    .join('');
  const result = `${intValue}.${decimalValue}`;
  return result;
};