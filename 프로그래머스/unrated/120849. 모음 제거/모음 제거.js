function solution(my_string) {
  if (my_string.length < 1 || my_string.length > 1000) return "";
  my_string = my_string.toLowerCase().replace(/[^a-z\s]/g, "");
  return my_string.replace(/['a','e','i','o','u']/g, "");
}