function solution(number) {
  const nineEtc =
    number.split('').reduce((acc, cur) => Number(acc) + Number(cur)) % 9;
  return nineEtc;
}