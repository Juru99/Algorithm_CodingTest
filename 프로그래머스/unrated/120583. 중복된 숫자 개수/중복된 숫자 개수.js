const solution = (array, n) => {
  array = array.filter(
    (item) =>
      1 <= array.length &&
      array.length <= 100 &&
      0 <= item &&
      item <= 1000 &&
      0 <= n &&
      n <= 1000
  );
  return array.filter((ele) => n === ele).length;
};