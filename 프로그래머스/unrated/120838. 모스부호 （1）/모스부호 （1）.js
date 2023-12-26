morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

function solution(letter) {
  if (letter.length < 1 || letter.length > 1000) return;

  return letter
    .split(/[\s]/)
    .map((ele) => {
      for (let i = 0; i < Object.keys(morse).length; i++) {
        if (ele === Object.keys(morse)[i]) return Object.values(morse)[i];
      }
    })
    .join("");
}