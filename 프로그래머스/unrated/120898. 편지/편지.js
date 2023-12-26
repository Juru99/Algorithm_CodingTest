function solution(message) {
  if (message.length < 1 || message.length > 50) return 0;
  // message = message.replace(/[^a-z!~\s]/gi, "");
  return message.length * 2;
}