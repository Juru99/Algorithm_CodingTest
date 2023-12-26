function solution(arr1, arr2) {
  const lenArr1 = arr1.length;
  const lenArr2 = arr2.length;

  if (lenArr1 > lenArr2) return 1;
  else if (lenArr1 < lenArr2) return -1;
  else {
    let sumArr1 = arr1.reduce((acc, cur) => acc + cur, 0);
    let sumArr2 = arr2.reduce((acc, cur) => acc + cur, 0);
    if (sumArr1 > sumArr2) return 1;
    else if (sumArr1 < sumArr2) return -1;
    else return 0;
  }
}