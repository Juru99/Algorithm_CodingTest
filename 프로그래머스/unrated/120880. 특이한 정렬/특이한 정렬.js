function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [num1, num2] = [Math.abs(a - n), Math.abs(b - n)];
    if (num1 === num2) return b - a;
    return num1 - num2;
  });
}