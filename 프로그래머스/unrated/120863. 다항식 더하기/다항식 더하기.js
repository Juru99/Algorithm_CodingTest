function solution(polynomial) {
  let arr = polynomial.split(' + ');
  let arrX = [];
  let nums = [];
  let x = 0;
  let num;

  arr.forEach((ele) => {
    ele.includes('x') ? arrX.push(ele.split('x')) : nums.push(ele);
  });

  arrX.forEach((ele) => {
    if (ele[0] === '') x += 1;
    else x += Number(ele[0]);
  });

  if (nums.length > 0) {
    num = nums.reduce((acc, cur) => Number(acc) + Number(cur));
  }
  if (x === 1) {
    if (num > 0) return `x + ${num}`;
    else return 'x';
  }
  if (x > 0 && num > 0) return `${x}x + ${num}`;
  else if (x > 0) return `${x}x`;
  else if (num > 0) return `${num}`;
  return '0';
}