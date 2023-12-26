function solution(strlist) {
  strlist = strlist.filter(() => 1 <= strlist.length && strlist.length <= 100);
  const regexp = /[^\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"a-z]/gi;
  const result = [];
  strlist.forEach(function (ele, index) {
    strlist[index] = ele.replace(regexp, "");
    result.push(strlist[index].length);
  });
  return result;
}