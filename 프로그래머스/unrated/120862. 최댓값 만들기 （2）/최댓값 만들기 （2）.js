function solution(numbers) {
  numbers = numbers.filter(
    (ele) =>
      ele >= -1e4 && ele <= 1e4 && numbers.length >= 2 && numbers.length <= 100
  );

  numbers = numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1] >
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
    ? numbers[0] * numbers[1]
    : numbers[numbers.length - 1] * numbers[numbers.length - 2];
}