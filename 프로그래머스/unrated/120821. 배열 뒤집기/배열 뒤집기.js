const solution = (num_list) => {
  num_list = num_list.filter(
    (num) =>
      1 <= num_list.length && num_list.length <= 1000 && 0 <= num && num <= 1000
  );
  return [...num_list].reverse();
};