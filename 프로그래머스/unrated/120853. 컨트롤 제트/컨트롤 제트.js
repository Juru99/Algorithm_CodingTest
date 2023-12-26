function solution(s) {
  arrS = s.split(' ');
  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i] === 'Z') {
      arrS[i - 1] = 0;
      arrS[i] = 0;
    }
  }
  for (let i = 0; i < arrS.length; i++) {
    arrS[i] = Number(arrS[i]);
  }
  return arrS.reduce((acc, cur) => acc + cur);
}