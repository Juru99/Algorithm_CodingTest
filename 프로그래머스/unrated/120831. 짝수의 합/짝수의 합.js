function solution(n) {
  if (n <= 0 || n > 1000) return 0;
  n = ~~n;
  let result = 0;
  for (let i = 0; i <= n; i = i + 2) {
    result += i;
  }
  return result;
}