function solution(n) {
  let result = [];
  let division = 2;
  while (n >= 2) {
    if (n % division === 0) {
      result.push(division);
      n = n / division;
    } else division++;
  }

  return [...new Set(result)];
}