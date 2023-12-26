function solution(num_list) {
  let even = '';
  let odd = '';
  num_list.forEach((num) => {
    num % 2 ? (odd += String(num)) : (even += String(num));
  });
  return Number(even) + Number(odd);
}