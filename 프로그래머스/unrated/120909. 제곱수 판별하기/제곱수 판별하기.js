function solution(n) {
  if (n < 1 || n > 1e6) return;
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}