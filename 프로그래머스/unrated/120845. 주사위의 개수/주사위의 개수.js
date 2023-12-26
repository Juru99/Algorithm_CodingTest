function solution(box, n) {
  if (box.length !== 3 || n < 1 || n > 50) return;
  box = box.filter((ele) => ele >= 1 && ele <= 100);
  return box.reduce((acc, cur) => {
    if (acc === 0) acc = 1;
    return acc * ~~(cur / n);
  }, 0);
}