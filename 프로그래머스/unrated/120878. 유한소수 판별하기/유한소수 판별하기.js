function solution(a, b) {
  let result = 2;
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  let num2 = b / gcd(a, b);

  if (num2 === 1 || num2 === 2 || num2 === 5) result = 1;
  while (num2 % 2 === 0) {
    num2 /= 2;
  }
  while (num2 % 5 === 0) {
    num2 /= 5;
  }
  if (num2 === 1) result = 1;
  return result;
}