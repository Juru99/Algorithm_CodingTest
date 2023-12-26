function solution(n) {
  if (n <= 0 || n > 3628800) return;
  let [num, result] = [1, 0];
  while (n >= num) {
    result++;
    num *= result + 1;
  }
  return result;
}