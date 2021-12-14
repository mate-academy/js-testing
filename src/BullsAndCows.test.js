const { generateSecret } = require('./BullsAndCows');

describe('BullsAndCows', () => {
  describe('generateSecret', () => {
    beforeEach(() => {
      jest.spyOn(Math, 'random');
    });

    afterEach(() => {
      Math.random.mockRestore();
    });

    it()

    it(`should return a 4-digit string for ${value}`, () => {
      Math.random.mockReturnValueOnce(value);

      const secret = generateSecret();

      expect(secret).toHaveLength(4);
      expect(secret).toMatch(/^\d{4}$/);
    });

    it(`should return unique digits for ${value}`, () => {
      Math.random.mockReturnValueOnce(value);

      const secret = generateSecret();
      const digits = new Set(secret);

      expect(digits.size).toBe(secret.length);
    });

    it('should return random values', () => {
      const results = new Set([
        generateSecret(),
        generateSecret(),
        generateSecret(),
        generateSecret(),
      ]);

      expect(results.size)
        .toBeGreaterThanOrEqual(3);
    });
  });
});
