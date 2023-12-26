function solution(my_string) {
  if (my_string < 1 || my_string > 110) return;
  my_string = my_string.replace(/[^a-z\s]/gi, "");

  let result = "";
  new Set(my_string).forEach((ele) => (result += ele));
  return result;
}