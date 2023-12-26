function solution(numbers, direction) {
  if (numbers.length < 3 || numbers.length > 20) return;
  if (direction !== "right" && direction !== "left") return;

  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}