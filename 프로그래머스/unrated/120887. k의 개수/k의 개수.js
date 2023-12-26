function solution(i, j, k) {
  if (i < 1 || i >= j || j > 1e5) return;
  if (k < 0 || k > 9) return;

  let str = "";
  while (j >= i) {
    str += String(i);
    i++;
  }
  let regex = new RegExp(`[^${k}]`, "g");
  return str.replace(regex, "").length;
}