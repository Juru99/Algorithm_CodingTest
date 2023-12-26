function solution(array, n) {
  if (array.length < 1 || array.length > 100) return;
  if (n < 1 || n > 100) return;
  array = array.filter((ele) => ele >= 1 && ele <= 100);
  let result = array.sort((a, b) => a - b).map((ele) => Math.abs(n - ele));
  return array[result.indexOf(Math.min(...result))];
}