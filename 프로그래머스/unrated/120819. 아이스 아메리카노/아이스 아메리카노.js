const solution = (money) => {
  let result = [0];
  if (0 < money && money <= 1e6) {
    while (money >= 5500) {
      result[0] += 1;
      money -= 5500;
    }
    result[1] = money;
    return result;
  }
};