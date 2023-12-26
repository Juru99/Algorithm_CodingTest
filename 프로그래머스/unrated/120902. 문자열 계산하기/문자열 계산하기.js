function solution(my_string) {
  let result;
  let nums = my_string.split(/\s[+-]\s/);
  let signs = my_string.replace(/[^+-]/g, '');

  nums.forEach((num, index) => {
    nums[index] = Number(num);
  });
  result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (signs[i - 1] == '+') result += nums[i];
    else if (signs[i - 1] == '-') result -= nums[i];
  }
  return result;
}