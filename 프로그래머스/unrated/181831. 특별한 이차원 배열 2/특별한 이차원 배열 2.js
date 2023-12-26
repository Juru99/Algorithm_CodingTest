function* range(start, end) {
  let value = end === undefined ? 0 : start;
  const endValue = end === undefined ? start : end;
  while (value < endValue) {
    yield value++;
  }
}

function solution(arr) {
  const n = arr.length;
  for (const i of range(n)) {
    for (const j of range(i)) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  return 1;
}