function solution(n, lost, reserve) {
  const all = {};
  let result = 0;

  for (let i = 1; i <= n; i++) {
    all[i] = 0;
  }
  for (let i = 0; i < lost.length; i++) {
    all[lost[i]]--;
  }
  for (let i = 0; i < reserve.length; i++) {
    all[reserve[i]]++;
  }
  for (let i = 1; i <= n; i++) {
    if (all[i] + all[i + 1] === 0) {
      all[i] = 0;
      all[i + 1] = 0;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (all[i] >= 0) result++;
  }
  return result;
}