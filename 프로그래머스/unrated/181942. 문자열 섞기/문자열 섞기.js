function solution(str1, str2) {
  const [arrStr1, arrStr2] = [str1.split(''), str2.split('')];
  let result = [];
  arrStr1.forEach((str1, i) => {
    result.push(str1);
    result.push(arrStr2[i]);
  });
  return result.join('');
}