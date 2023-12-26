function solution(n) {
  if (n < 0 || n > 1e6) return 0;
  return String(n)
    .split("")
    .reduce((acc, ele) => acc + Number(ele), 0);
}