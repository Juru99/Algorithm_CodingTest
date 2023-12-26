const solution = (my_string, n) => {
  my_char = [];
  my_concat = "";
  if (my_string.length >= 2 && my_string.length <= 5 && n >= 2 && n <= 10) {
    my_string = my_string.replace(/[^a-z]/gi, "");
    my_char = [...my_string];
    my_char.forEach((char, index) => {
      for (let i = 1; i < n; i++) {
        my_char[index] += char;
      }
      my_concat += [...my_char[index]];
    });
    my_concat = my_concat.replace(/[,]/g, "");
    return my_concat;
  }
};