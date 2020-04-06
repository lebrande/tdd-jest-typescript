export const formatCurrency = (
  cents: number,
  decimalPoint: number,
) => {
  const reversedArray = `${cents}`
    .split('')
    .reverse();
    
  const rawDecimalValue = reversedArray
    .slice(0, decimalPoint)
  const decimalValue = Array.apply(null, { length: decimalPoint })
    .map((_, i) => rawDecimalValue[i] || '0')
    .reverse()
    .join('');

  const intValue = reversedArray
    .slice(decimalPoint)
    .reverse()
    .join('') || '0';

  const result = `${intValue}.${decimalValue}`;
  return result;
};