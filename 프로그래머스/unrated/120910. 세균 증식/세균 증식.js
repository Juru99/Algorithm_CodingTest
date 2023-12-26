function solution(n, t) {
  if (n < 1 || n > 10 || t < 1 || t > 15) return;
  while (t > 0) {
    n *= 2;
    t--;
  }
  return n;
}