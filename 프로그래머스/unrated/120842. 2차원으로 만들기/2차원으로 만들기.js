function solution(num_list, n) {
  if (num_list.length % n !== 0) return;
  if (num_list.length < 0 || num_list.length > 150) return;
  if (n < 2 || n >= num_list.length) return;

  let result = [];
  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list.slice(i, i + n));
  }
  return result;
}