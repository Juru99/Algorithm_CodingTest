function solution(n, numlist) {
  if (n < 1 || n > 1e4) return;
  if (numlist.length < 1 || numlist.length > 100) return;
  return numlist.filter((ele) => ele >= 1 && ele <= 1e5 && ele % n === 0);
}