function solution(number, n, m) {
  if(!(number % n) && !(number % m)) return 1;
  return 0;
}