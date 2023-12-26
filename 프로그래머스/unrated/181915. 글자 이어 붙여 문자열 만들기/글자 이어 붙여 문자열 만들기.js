function solution(my_string, index_list) {
  return index_list.reduce((result, i) => result + my_string[i], '');
}