function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.reduce((_, cur, i) => (i % 2 ? (odd += cur) : (even += cur)), 0);
  return Math.max(even, odd);
}