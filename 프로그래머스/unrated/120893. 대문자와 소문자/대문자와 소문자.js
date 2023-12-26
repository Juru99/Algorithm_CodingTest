function solution(my_string) {
  if (my_string < 1 || my_string > 1000) return;
  my_string = my_string.replace(/[^a-z]/gi, "");

  let result = my_string.split("");
  result.forEach((element, index) => {
    result[index] === element.toLowerCase()
      ? (result[index] = element.toUpperCase())
      : (result[index] = element.toLowerCase());
  });
  return result.join("");
}