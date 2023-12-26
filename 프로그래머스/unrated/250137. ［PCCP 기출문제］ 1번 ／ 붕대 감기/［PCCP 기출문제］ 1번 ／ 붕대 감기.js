function calcMaxTime(attacks) {
  let maxTime = 0;

  attacks.forEach((attack) => {
    let attackTime = attack[0];
    if (attackTime > maxTime) maxTime = attackTime;
  });

  return maxTime;
}

/**
 * @function - 붕대감기 기술의 정보, 캐릭터가 가진 최대 체력과 몬스터의 공격 패턴이 주어질 때 캐릭터가 끝까지 생존할 수 있는지 판단하는 함수
 * @param {Array} bandage - 붕대 감기 기술의 [시전 시간, 1초당 회복량, 추가 회복량]을 담은 1차원 정수 배열
 * @param {Number} health - 최대 체력
 * @param {Array} attacks - [[몬스터의 공격 시간, 피해량]]을 담은 2차원 정수 배열
 * @returns - 모든 공격이 끝난 직후 남은 체력
 */
function solution(bandage, health, attacks) {
  const MAX_TIME = calcMaxTime(attacks);
  const [CASTING_TIME, RECOVERY, ADDITIONAL_RECOVERY] = bandage;

  let successCount = 0;
  let currentHealth = health;
  let currentAttacks = [...attacks];
  let [attackTime, demage] = currentAttacks.shift();

  for (let currentTime = 0; currentTime <= MAX_TIME; currentTime++) {
    if (attackTime === currentTime) {
      currentHealth -= demage;
      successCount = 0;

      if (currentAttacks.length !== 0) {
        [attackTime, demage] = currentAttacks.shift();
      }
    } else {
      currentHealth += RECOVERY;
      successCount += 1;

      if (successCount === CASTING_TIME) {
        currentHealth += ADDITIONAL_RECOVERY;
        successCount = 0;
      }

      if (currentHealth > health) currentHealth = health;
    }

    if (currentHealth <= 0) return -1;
  }

  return currentHealth;
}