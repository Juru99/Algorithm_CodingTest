function solution(slice, n) {
  let result = 1;
  if (2 <= slice && slice <= 10 && 1 <= n && n <= 100) {
    while (slice * result < n) {
      result++;
    }
    return result;
  }
}