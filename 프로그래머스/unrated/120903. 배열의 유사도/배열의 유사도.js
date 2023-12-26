const solution = (s1, s2) => {
  s1.filter((item, index) => {
    s1.length >= 1 &&
      s1.length <= 100 &&
      item.length >= 1 &&
      item.length <= 100;
    s1[index] = item.toLowerCase();
    s1 = s1.reduce((acc, v) => {
      return acc.includes(v) ? acc : [...acc, v];
    }, []);
  });
  s2.filter((item, index) => {
    s2.length >= 1 &&
      s2.length <= 100 &&
      item.length >= 1 &&
      item.length <= 100;
    s2[index] = item.toLowerCase();
    s2 = s2.reduce((acc, v) => {
      return acc.includes(v) ? acc : [...acc, v];
    }, []);
  });
  return s1.filter((item) => s2.includes(item)).length;
};