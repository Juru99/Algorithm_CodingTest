function solution(n) {
  if (n < 1 || n > 10000) return;
  let answer = [];
  let i = 0;
  while (n > i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer;
}