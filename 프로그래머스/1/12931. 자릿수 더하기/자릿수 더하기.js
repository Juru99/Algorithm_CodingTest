function solution(N) {
  return N.toString()
    .split('')
    .reduce((acc, cur) => +acc + +cur, 0);
}