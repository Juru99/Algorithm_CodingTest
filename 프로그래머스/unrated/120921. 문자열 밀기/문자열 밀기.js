function solution(A, B) {
  let arrA = [...A];
  let result = 0;
  if (A === B) return result;

  for (let i = 0; i < A.length; i++) {
    arrA.unshift(arrA.pop());
    result++;
    if (arrA.join().replace(/,/g, '') === B) break;
    if (result === A.length) result = -1;
  }
  return result;
}