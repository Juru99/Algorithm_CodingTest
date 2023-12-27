function subExtra(array1, array2) {
  return array1.filter((item) => !array2.includes(item)).sort((a, b) => a - b);
}

/**
 * @function - 체육복
 * @param {Number} n - 전체 학생의 수
 * @param {Array} lost - 체육복을 도난당한 학생 번호 1차원 배열
 * @param {Array} reserve - 여벌의 체육복을 가져온 학생 번호 1차원 배열
 * @returns - 체육수업을 들을 수 있는 최대 학생의 수
 */
function solution(n, lost, reserve) {
  const subReserve = subExtra(reserve, lost);
  let subLost = subExtra(lost, reserve);

  for (let i = 0; i < subLost.length; i++) {
    for (let j = 0; j < subReserve.length; j++) {
      if (
        subLost[i] - 1 === subReserve[j] ||
        subLost[i] + 1 === subReserve[j]
      ) {
        subLost.shift();
      }
    }
  }

  let totalStudent = n - subLost.length;

  return totalStudent;
}