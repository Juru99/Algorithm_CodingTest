function solution(myString) {
  const result = [];
  myString.split('x').forEach((ele) => {
    result.push(ele.length);
  });
  return result;
}