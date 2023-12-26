function solution(my_string) {
  if (my_string.length < 1 || my_string.length > 100) return;
  if (my_string.replace(/[^0-9]/g, "").length === 0) return;
  return my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .sort()
    .map((ele) => Number(ele));
}