function solution(array, commands) {
  const lenCommands = commands.length;
  const result = [];
  for (let index = 0; index < lenCommands; index++) {
    let [i, j, k] = commands[index];
    result.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }
  return result;
}