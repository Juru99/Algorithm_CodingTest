function solution(quiz) {
  let quizs = quiz.map((ele) => ele.split(' = '));
  let result = [];
  let xy;
  for (let i = 0; i < quizs.length; i++) {
    quizs[i][0].split(' - ').length == 2
      ? (xy =
          parseInt(quizs[i][0].split(' - ')[0]) -
          parseInt(quizs[i][0].split(' - ')[1]))
      : (xy =
          parseInt(quizs[i][0].split(' + ')[0]) +
          parseInt(quizs[i][0].split(' + ')[1]));
    xy == Number(quizs[i][1]) ? result.push('O') : result.push('X');
  }
  return result;
}