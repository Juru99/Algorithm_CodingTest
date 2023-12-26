function solution(array) {
  const dist = Array.from(new Set(array)).sort((a, b) => a - b);
  if (dist.length === 1) return dist[0];
  const result = array
    .reduce((accu, curr) => {
      accu[curr] = (accu[curr] || 0) + 1;
      return accu;
    }, [])
    .filter((ele) => ele !== null);
  const sorts = [...result].sort((a, b) => a - b);
  const dup = sorts
    .reduce((accu, curr) => {
      accu[curr] = (accu[curr] || 0) + 1;
      return accu;
    }, [])
    .filter((ele) => ele !== null);
  const max = Math.max(...result);

  if (dup[dup.length - 1] > 1) return -1;
  return dist[result.indexOf(max)];
}