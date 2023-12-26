function solution(chicken) {
  let result = 0;
  while (chicken >= 10) {
    chicken /= 10;
    result += chicken;
  }

  return Math.round(result);
}