function solution(my_string) {
  if (my_string <= 0 || my_string >= 100) return;
  return my_string.toLowerCase().split("").sort().join("");
}