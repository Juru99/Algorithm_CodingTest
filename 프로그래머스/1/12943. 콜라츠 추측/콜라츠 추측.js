function solution(n) {
  let count = 500;
  let num = n;
  while (count > 0) {
    if (num === 1) return 500 - count;
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    count--;
  }
  return -1;
}