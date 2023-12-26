function solution(my_strings, parts) {
  return my_strings.reduce((result, str, i) => {
    const [start, end] = parts[i];
    return result + str.substring(start, end + 1);
  }, '');
}