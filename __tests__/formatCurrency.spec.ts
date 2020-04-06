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
  {
    input: {
      cents: 3,
      decimalPoint: 3,
    },
    expected: '0.003',
  },
  {
    input: {
      cents: 54,
      decimalPoint: 0,
    },
    expected: '54',
  },
  {
    input: {
      cents: 843,
      decimalPoint: -5,
    },
    expected: '843',
  },
];

describe('formatCurrency', () => {
  cases.forEach(({
    input: { cents, decimalPoint },
    expected,
  }) => {
    it(`returns ${expected} -> cents: ${cents}, decimalPoint: ${decimalPoint} decimalPoint`, () => {
      const _input = formatCurrency(cents, decimalPoint);
      expect(_input).toBe(expected);
    })
  });
});
