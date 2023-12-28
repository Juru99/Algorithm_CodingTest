/* 문제
▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)

name은 알파벳 대문자로만 이루어져 있다.
name의 길이는 1 이상 20 이하이다.
*/

/**
 * @param {String} name - 알파벳 대문자 이름 문자열
 * @returns - 알파벳 변경 커서 이동 전체 횟수
 */
function calcAlphabetCount(name) {
  const [A, N, Z_NEXT] = [65, 78, 91];
  let alphabetCount = 0;
  let ASCIICode;

  for (let i = 0, len = name.length; i < len; i++) {
    ASCIICode = name[i].charCodeAt();
    ASCIICode = ASCIICode < N ? ASCIICode - A : Z_NEXT - ASCIICode;
    alphabetCount += ASCIICode;
  }

  return alphabetCount;
}

/**
 * @param {String} name - 알파벳 대문자 이름 문자열
 * @returns - 알파벳 위치 이동 최소 횟수
 */
function calcNextCount(name) {
  const NAME_LEN = name.length;
  let minNextCount = NAME_LEN - 1;
  let nextIdx;

  for (let i = 0; i < NAME_LEN; i++) {
    nextIdx = i + 1;

    // 현재 알파벳이 A면 다음 알파벳으로 이동
    while (name[nextIdx] === 'A') nextIdx += 1;

    // 이전 알파벳 갔다가 다음 알파벳 방향으로 가는 게 더 적게 이동하는 경우 커서 횟수 계산
    // i: 첫 지점으로부터 다음 알파벳 방향으로 거리
    // (NAME_LEN - nextIdx) * 2: 이전 알파벳 방향으로의 현재 위치(갔다가 돌아와야 하므로 * 2)
    if (i + (NAME_LEN - nextIdx) * 2 < minNextCount) {
      minNextCount = i + (NAME_LEN - nextIdx) * 2;
    }

    // 다음 알파벳 갔다가 이전 알파벳으로 가는 게 더 적게 이동하는 경우 커서 횟수 계산
    // i: 첫 지점으로부터 다음 알파벳 방향으로 거리(갔다가 돌아와야 하므로 * 2)
    // (NAME_LEN - nextIdx): 첫 지점으로부터 이전 알파벳 방향으로 거리
    if (i * 2 + (NAME_LEN - nextIdx) < minNextCount) {
      minNextCount = i * 2 + (NAME_LEN - nextIdx);
    }
  }

  return minNextCount;
}

/**
 * @param {String} name - 알파벳 대문자 이름 문자열
 * @returns - 조이스틱 조작 횟수의 최솟값
 */
function solution(name) {
  const alphabetCount = calcAlphabetCount(name);
  const minNextCount = calcNextCount(name);
  const totalCursorCount = alphabetCount + minNextCount;

  return totalCursorCount;
}

// 이전 알파벳 갔다가 다음 알파벳 방향으로 가는 게 더 적게 이동하는 경우 커서 횟수 계산
console.log(solution('DBCDAAAAAAAABB'));

// 다음 알파벳 갔다가 이전 알파벳으로 가는 게 더 적게 이동하는 경우 커서 횟수 계산
console.log(solution('DBAAAABC'));