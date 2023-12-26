function solution(sides) {
  let max = Math.max(...sides);
  let min = Math.min(...sides);
  let count = 0;

  for (let i = 0; i <= max + min; i++) {
    if (i > max - min && i <= max) count++;
    else if (i < min + max && i > max) count++;
  }
  return count;
}