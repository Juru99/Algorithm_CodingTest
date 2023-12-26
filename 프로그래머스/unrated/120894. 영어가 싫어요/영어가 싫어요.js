function solution(numbers) {
  let nums = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let result = numbers;
  for (let i = 0; i < 10; i++) {
    result = result.replace(new RegExp(`${nums[i]}`, 'g'), i);
  }
  return parseInt(result);
}