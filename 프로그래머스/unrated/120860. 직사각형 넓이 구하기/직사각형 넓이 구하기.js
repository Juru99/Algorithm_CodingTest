function solution(dots) {
  let sums = dots.map((dot) => {
    return dot.reduce((acc, cur) => acc + cur);
  });
  let [sumMin, sumMax] = [Math.min(...sums), Math.max(...sums)];
  let [min, max] = [dots[sums.indexOf(sumMin)], dots[sums.indexOf(sumMax)]];
  return (max[0] - min[0]) * (max[1] - min[1]);
}