function solution(num_list) {
  const dup = num_list.reduce((acc, cur) => acc * cur, 1);
  const sumPow = num_list.reduce((acc, cur) => acc + cur, 0) ** 2;
  return dup < sumPow ? 1 : 0;
}