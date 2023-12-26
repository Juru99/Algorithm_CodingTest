function solution(order) {
  if (order < 1 || order > 1e6) return;
  return order
    .toString()
    .split("")
    .filter((ele) => ele > 0 && ele % 3 === 0).length;
}