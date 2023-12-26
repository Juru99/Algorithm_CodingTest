function solution(rsp) {
  if (rsp.length <= 0 || rsp.length > 100) return;
  rsp = rsp.replace(/[^025]/, "");
  return rsp
    .split("")
    .map((element) => {
      return element === "0"
        ? "5"
        : element === "2"
        ? "0"
        : element === "5"
        ? "2"
        : "";
    })
    .join("");
}