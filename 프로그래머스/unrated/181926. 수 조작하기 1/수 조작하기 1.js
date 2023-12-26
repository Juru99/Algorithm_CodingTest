function solution(n, control) {
  const controls = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };
  const controlSum = [
    (control.split('w').length - 1) * controls.w,
    (control.split('s').length - 1) * controls.s,
    (control.split('d').length - 1) * controls.d,
    (control.split('a').length - 1) * controls.a,
  ];
  return controlSum.reduce((acc, cur) => acc + cur, n);
}

console.log(solution(0, 'wsdawsdassw')); // -1
console.log(solution(0, 'sdawsdassw')); // -1
