function solution(emergency) {
  let array = [...emergency].sort((a, b) => b - a);
  let result = [];
  emergency.forEach((emer) => {
    array.forEach((arr) => {
      if (emer === arr) result[emergency.indexOf(arr)] = array.indexOf(arr) + 1;
    });
  });
  return result;
}