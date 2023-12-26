function solution(n, k) {
  return Array(~~(n / k))
    .fill(k)
    .map((num, i) => num * (i + 1));
}