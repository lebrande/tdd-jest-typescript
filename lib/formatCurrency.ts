export const formatCurrency = (cents: number) => {
  const [cent1, cent2, ...rest] = `${cents}`
    .split('')
    .reverse();
  const result = `${rest.reverse().join('')}.${cent2}${cent1}`;
  return result;
};