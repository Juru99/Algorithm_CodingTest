function solution(before, after) {
  before = before.replace(/[^a-z]/g, "");
  after = after.replace(/[^a-z]/g, "");
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}