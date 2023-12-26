const solution = (my_string, letter) => {
  if (my_string.length < 1 || my_string.length > 100) return;
  if (letter.length !== 1) return;
  my_string.replace(/[^a-z]/gi, "");
  letter.replace(/[^a-z]/gi, "");

  return my_string.replaceAll(letter, "");
};