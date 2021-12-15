const { generateSecret } = require('./BullsAndCows');

describe('BullsAndCows', () => {
  describe('generateSecret', () => {
    beforeEach(() => {
      jest.spyOn(Math, 'random');
    });

    afterEach(() => {
      Math.random.mockRestore();
    });

    it('should return 4-digit secret from 4-digit value', () => {
      Math.random.mockReturnValueOnce(0.1234);

      const secret = generateSecret();

      expect(secret).toBe('1234');
    });

    it('should add leading 0 for 3-digit value', () => {
      Math.random.mockReturnValueOnce(0.0567);

      const secret = generateSecret();

      expect(secret).toBe('0567');
    });

    it('should not use 2-digit value for a secret', () => {
      Math.random
        .mockReturnValueOnce(0.0025)
        .mockReturnValueOnce(0.9063)

      const secret = generateSecret();

      expect(secret).toBe('9063');
    });

    it('should not use a value with repeated digits', () => {
      Math.random
        .mockReturnValueOnce(0.4456)
        .mockReturnValueOnce(0.7828)
        .mockReturnValueOnce(0.2759)

      const secret = generateSecret();

      expect(secret).toBe('2759');
    });

    it.skip(`should return a 4-digit string`, () => {
      const secret = generateSecret();

      expect(secret).toHaveLength(4);
      expect(secret).toMatch(/^\d{4}$/);
    });

    it.skip(`should return unique digits`, () => {
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
