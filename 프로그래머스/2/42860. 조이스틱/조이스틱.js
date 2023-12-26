function solution(name) {
  let upDownCnt = 0;
  let len = name.length;
  let LRCnt = len - 1;

  for (let i = 0; i < len; i++) {
    let code = name[i].charCodeAt();
    code < 78 ? (code = code - 65) : (code = 91 - code);
    upDownCnt += code;
  }

  for (let i = 0; i < len; i++) {
    let nextIdx = i + 1;
    while (name[nextIdx] == 'A') nextIdx++;

    if (i * 2 + (len - nextIdx) < LRCnt) {
      LRCnt = i * 2 + (len - nextIdx);
    }

    if (i + (len - nextIdx) * 2 < LRCnt) {
      LRCnt = i + (len - nextIdx) * 2;
    }
  }

  return upDownCnt + LRCnt;
}