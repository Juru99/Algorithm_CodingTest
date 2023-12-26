// 원하는 문자열 찾기
function solution(myString, pat) {
  let lowString = myString.toLowerCase();
  let lowPat = pat.toLowerCase();
  return lowString.includes(lowPat) ? 1 : 0;
}
