/**
 * Create a random 4-digit string.
 * Digits should not be repeated
 * 
 * @returns {string}
 */
function generateSecret() {
  const digits = '0123456789'.split('');

  digits.sort(() => Math.random() - 0.5);

  return digits.slice(-4).join('');
}

module.exports = { generateSecret };
