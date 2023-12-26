function solution(age) {
  if (typeof age !== "number" || age > 1000) return;
  let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  return age
    .toString()
    .split("")
    .map((ele) => {
      for (let count = 0; count < 10; count++) {
        if (ele === number[count]) return alpha[count];
      }
    })
    .join("");
}