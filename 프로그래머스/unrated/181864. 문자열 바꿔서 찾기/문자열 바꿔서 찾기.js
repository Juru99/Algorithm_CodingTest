function solution(myString, pat) {
  const newPat = [...pat].map((ele) => (ele === 'A' ? 'B' : 'A')).join('');
  return myString.includes(newPat) ? 1 : 0;
}