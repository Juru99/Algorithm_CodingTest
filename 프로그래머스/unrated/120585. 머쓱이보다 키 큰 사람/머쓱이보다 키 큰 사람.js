const solution = (array, height) => {
  if (height < 0 || height > 200) return 0;
  let result = 0;
  array = array.filter(
    (item) =>
      array.length >= 1 && array.length <= 100 && item >= 1 && item <= 200
  );
  array.forEach((item) => {
    if (item > height) result++;
  });
  return result;
};