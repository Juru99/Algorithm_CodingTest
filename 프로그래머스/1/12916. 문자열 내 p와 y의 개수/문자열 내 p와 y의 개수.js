function solution(s) {
  let [pCount, yCount] = [0, 0];
  arrS = s.replace(/[^py]/gi, '').toLowerCase().split('');
  arrS.forEach((ele) => {
    ele === 'p' ? pCount++ : yCount++;
  });
  if (pCount === 0 && yCount === 0) return true;
  return pCount === yCount ? true : false;
}