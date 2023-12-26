function solution(num1, num2) {
  if (num1 > 0 && num1 <= 100 && num2 > 0 && num2 <= 100) {
    return parseInt((num1 / num2) * 1000);
  }
  return;
}