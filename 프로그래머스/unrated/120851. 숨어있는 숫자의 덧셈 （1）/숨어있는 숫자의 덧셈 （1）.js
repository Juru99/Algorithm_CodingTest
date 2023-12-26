function solution(my_string) {
  if (my_string.length < 1 || my_string.length > 1000) return 0;
  let result = my_string.replace(/[^0-9]/g, "").split("");
  return result.reduce((sum, ele) => {
    return sum + Number(ele);
  }, 0);
}