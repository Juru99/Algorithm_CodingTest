const solution = (numbers) => {
  numbers = numbers.filter(
    (number) =>
      0 <= number &&
      number <= 10000 &&
      2 <= numbers.length &&
      numbers.length <= 100
  );
  numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  return numbers[numbers.length - 1] * numbers[numbers.length - 2];
};