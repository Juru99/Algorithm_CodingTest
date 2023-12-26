function solution(num_list) {
  const [lastElement, last2Element] = [...num_list].reverse();
  return [
    ...num_list,
    lastElement > last2Element ? lastElement - last2Element : lastElement * 2,
  ];
}