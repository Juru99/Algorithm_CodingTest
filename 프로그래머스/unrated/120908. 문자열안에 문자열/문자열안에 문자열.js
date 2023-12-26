function solution(str1, str2) {
  if (str1 < 1 || str1 > 100) return;
  if (str2 < 1 || str2 > 100) return;
  str1 = str1.replace(/[^a-z0-9]/gi, "");
  str2 = str2.replace(/[^a-z0-9]/gi, "");
  return str1.includes(str2) ? 1 : 2;
}