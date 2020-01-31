function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

function p(n, k) {
  const sub = n - k;

  const result = factorial(n) / factorial(sub);

  return result;
}

module.exports = factorial;
