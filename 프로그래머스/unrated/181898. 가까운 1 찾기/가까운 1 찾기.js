function solution(arr, idx) {
  const lenArr = arr.length;
  for (let i = idx; i < lenArr; i++) {
    if (arr[i] === 1) return i;
  }
  return -1;
}