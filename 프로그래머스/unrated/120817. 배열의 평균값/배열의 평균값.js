function solution(numbers) {
  numbers = numbers.filter(
    (item) =>
      item >= 0 && item <= 1000 && numbers.length >= 1 && numbers.length <= 100
  );
  let sum = numbers.reduce((acc, cur) => acc + cur);
  return (sum / numbers.length).toFixed(1);
}