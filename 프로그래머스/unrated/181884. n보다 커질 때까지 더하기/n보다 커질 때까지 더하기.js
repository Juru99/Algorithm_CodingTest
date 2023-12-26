function solution(numbers, n) {
  let sum = 0;
  numbers.forEach((num) => {
    if (sum <= n) sum += num;
    else return;
  });
  return sum;
}