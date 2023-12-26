function solution(numbers) {
  numbers = numbers.filter(
    (item) =>
      -10000 <= item &&
      item <= 10000 &&
      1 <= numbers.length &&
      numbers.length <= 1000
  );
  return numbers.map((item) => item * 2);
}