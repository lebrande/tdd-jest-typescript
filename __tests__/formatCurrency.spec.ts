import { formatCurrency } from '../lib/formatCurrency';

const cases = [
  {
    input: {
      cents: 3405,
      decimalPoint: 2,
    },
    expected: '34.05',
  },
  {
    input: {
      cents: 49583,
      decimalPoint: 3,
    },
    expected: '49.583',
  },
];

describe('formatCurrency', () => {
  cases.forEach(({ input, expected }) => {
    it('returns decimal value', () => {
      const _input = formatCurrency(input.cents, input.decimalPoint);
      expect(_input).toBe(expected);
    })
  });
});
