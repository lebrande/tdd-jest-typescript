import { formatCurrency } from '../lib/formatCurrency';

describe('formatCurrency', () => {
  it('returns decimal value', () => {
    const input = formatCurrency(3405);
    const expected = '34.05';
    expect(input).toBe(expected);
  })
});
