const solution = (sides) => {
  sides = sides.filter(
    (line) => sides.length === 3 && 1 <= line && line <= 1000
  );
  sides.forEach((line, index) => {
    sides[index] = ~~line;
  });
  sides.sort((a, b) => a - b);

  if (sides[0] + sides[1] > sides[2]) return 1;
  else return 2;
};