function solution(today, terms, privacies) {
  let tod = new Date(today);
  if (tod.getFullYear() < 2000 || tod.getFullYear() > 2022) return;
  if (terms.length < 1 || terms.length > 20) return;
  if (privacies.length < 1 || privacies.length > 100) return;

  //풀이
  let p_date = []; // privacies의 날짜
  let p_alpha = []; // privacies의 약관 종류
  let t_alpha = []; // terms의 약관 종류
  let t_num = []; // terms의 유효기간
  let result = []; // 결과
  let num; // terms와 privacies의 약관 종류를 비교한 도출값
  let priv; // privacies의 유효기간 + terms의 유효기간으로, today와 비교될 날짜
  privacies.forEach((ele) => {
    p_date.push(ele.replace(/[A-Z\s]/g, ""));
    p_alpha.push(ele.replace(/[^A-Z]/g, ""));
  });
  terms.forEach((ele) => {
    t_alpha.push(ele.replace(/[^A-Z]/g, ""));
    t_num.push(ele.replace(/[\D]/g, ""));
  });

  for (let i = 0; i < privacies.length; i++) {
    for (let j = 0; j < terms.length; j++) {
      if (p_alpha[i] === t_alpha[j]) num = Number(t_num[j]);
    }
    priv = new Date(p_date[i]);
    priv.setMonth(priv.getMonth() + num);

    if (tod >= priv) result.push(i + 1);
  }
  return result;
}