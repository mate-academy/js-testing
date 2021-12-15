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

function generateSecret2() {
  while (true) {
    const x = Math.floor(Math.random() * 1e4);
    const result = String(x).padStart(4, '0');
    const digits = new Set(result);

    if (digits.size === result.length) {
      return result;
    }
  }
}

module.exports = { generateSecret };
