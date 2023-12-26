function solution(my_string, num1, num2) {
  if (my_string.length <= 1 || my_string.length >= 100) return;
  if (
    num1 < 0 ||
    num2 < 0 ||
    num1 >= my_string.length ||
    num2 >= my_string.length
  )
    return;
  if (num1 === num2) return;
  // my_string = my_string.toLowerCase();

  result = my_string.split("");
  let temp = result[num1];
  result[num1] = result[num2];
  result[num2] = temp;
  return result.join("");
}