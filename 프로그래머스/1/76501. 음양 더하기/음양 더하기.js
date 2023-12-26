function solution(absolutes, signs) {
  return absolutes
    .map((ele, i) => (signs[i] === true ? ele : ele * -1))
    .reduce((acc, cur) => acc + cur);
}