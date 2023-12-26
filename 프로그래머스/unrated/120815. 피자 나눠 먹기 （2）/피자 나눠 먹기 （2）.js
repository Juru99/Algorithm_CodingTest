function solution(n) {
  if (n < 1 || n > 100) return;
  let i = 1;
  while ((n * i) % 6 !== 0) {
    i++;
  }
  return (n * i) / 6;
}