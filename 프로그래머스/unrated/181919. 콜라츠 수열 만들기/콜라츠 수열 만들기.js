function solution(n) {
  const result = [n];
  while (n != 1) {
    n % 2 ? (n = 3 * n + 1) : (n /= 2);
    result.push(n);
  }
  return result;
}