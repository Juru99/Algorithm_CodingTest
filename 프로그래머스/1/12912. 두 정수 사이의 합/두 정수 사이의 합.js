function solution(a, b) {
  if (a === b) return a;
  let answer = 0;
  if (a > b) {
    for (let i = b; a >= i; i++) {
      answer += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }
  return answer;
}