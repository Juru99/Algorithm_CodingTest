function solution(num, k) {
  if (num <= 0 || num >= 1e6) return;
  if (k < 0 || k >= 10) return;
  return num.toString().includes(k) ? num.toString().indexOf(k) + 1 : -1;
}