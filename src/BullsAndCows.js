/**
 * Create a random 4-digit string.
 * Digits should not be repeated
 * 
 * @returns {string}
 */
function generateSecret() {
  while (true) {
    const x = Math.floor(Math.random() * 10000);
    const result = `${x}`.padStart(4, '0');
    const digits = new Set(result);

    if (digits.size === result.length) {
      return result;
    }
  }
}

module.exports = { generateSecret };
