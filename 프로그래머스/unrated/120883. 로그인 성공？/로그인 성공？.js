function solution(id_pw, db) {
  let result;
  let pwCount = 0;
  db.forEach((datas) => {
    if (datas[0] === id_pw[0]) {
      datas[1] === id_pw[1] ? (result = 'login') : pwCount++;
    }
  });
  if (result !== 'login' && pwCount > 0) result = 'wrong pw';
  if (result !== 'login' && result !== 'wrong pw') result = 'fail';

  return result;
}