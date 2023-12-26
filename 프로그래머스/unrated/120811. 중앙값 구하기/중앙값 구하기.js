const solution = (array) => {
  array = array.filter(
    (item) =>
      -1000 < item &&
      item < 1000 &&
      0 < array.length &&
      array.length < 100 &&
      array.length % 2 === 1
  );
  array.sort((a, b) => a - b);
  return array[~~(array.length / 2)];
};