function solution(numer1, denom1, numer2, denom2) {
  if (
    numer1 <= 0 ||
    numer1 >= 1000 ||
    denom1 <= 0 ||
    denom1 >= 1000 ||
    numer2 <= 0 ||
    numer2 >= 1000 ||
    denom2 <= 0 ||
    denom2 >= 1000
  )
    return;
  
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); // 최대공약수 공식
  let numer = numer1 * denom2 + numer2 * denom1; // 분자
  let denom = denom1 * denom2; // 분모
  return [numer / gcd(numer, denom), denom / gcd(numer, denom)]; // 최대공약수로 나눔으로써 기약분수 만듦.
}