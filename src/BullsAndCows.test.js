const { generateSecret } = require('./BullsAndCows');

describe('BullsAndCows', () => {
  describe('generateSecret', () => {
    const secrets = [];

    beforeAll(() => {
      for (let i = 0; i < 100; i++) {
        secrets.push(generateSecret());
      }
    });

    it(`should return a 4-digit string`, () => {
      for (const secret of secrets) {
        expect(secret).toHaveLength(4);
        expect(secret).toMatch(/^\d{4}$/);
      }
    });

    it(`should return unique digits`, () => {
      for (const secret of secrets) {
        const digits = new Set(secret);

        expect(digits.size).toBe(secret.length);
      }
    });

    it('should return random values', () => {
      const results = new Set(secrets);

      expect(results.size)
        .toBeGreaterThanOrEqual(secrets.length / 2);
    });
  });
});
