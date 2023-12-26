function solution(my_string) {
  const result = my_string
    .trim()
    .split(' ')
    .filter((ele) => ele !== '');
  return result;
}