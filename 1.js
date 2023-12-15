const fs = require("fs");

const fileName = "input1.txt";
//const fileName = "input1test.txt";
//const fileName = "input2test2.txt";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file: $(err)");
    return;
  }
  let input = data;

  strings = input.split("\n");
  //console.log(strings);

  function isNumeric(value) {
    return /^-?\d*\.?\d+$/.test(value);
  }

  let sum = 0;
  for (let i = 0; i < strings.length; i++) {
    let low = 0;
    let high = 0;
    for (let a = 0; a < strings[i].length; a++) {
      if (isNumeric(strings[i].charAt(a))) {
        low = strings[i].charAt(a);
        break;
      } else if (strings[i].substring(a, a + 4) == "zero") {
        low = "0";
        break;
      } else if (strings[i].substring(a, a + 3) == "one") {
        low = "1";
        break;
      } else if (strings[i].substring(a, a + 3) == "two") {
        low = "2";
        break;
      } else if (strings[i].substring(a, a + 5) == "three") {
        low = "3";
        break;
      } else if (strings[i].substring(a, a + 4) == "four") {
        low = "4";
        break;
      } else if (strings[i].substring(a, a + 4) == "five") {
        low = "5";
        break;
      } else if (strings[i].substring(a, a + 3) == "six") {
        low = "6";
        break;
      } else if (strings[i].substring(a, a + 5) == "seven") {
        low = "7";
        break;
      } else if (strings[i].substring(a, a + 5) == "eight") {
        low = "8";
        break;
      } else if (strings[i].substring(a, a + 4) == "nine") {
        low = "9";
        break;
      }
    }
    for (let b = strings[i].length - 1; b >= 0; b--) {
      if (isNumeric(strings[i].charAt(b))) {
        high = strings[i].charAt(b);
        break;
      } else if (strings[i].substring(b - 3, b + 1) == "zero") {
        high = "0";
        break;
      } else if (strings[i].substring(b - 2, b + 1) == "one") {
        high = "1";
        break;
      } else if (strings[i].substring(b - 2, b + 1) == "two") {
        high = "2";
        break;
      } else if (strings[i].substring(b - 4, b + 1) == "three") {
        high = "3";
        break;
      } else if (strings[i].substring(b - 3, b + 1) == "four") {
        high = "4";
        break;
      } else if (strings[i].substring(b - 3, b + 1) == "five") {
        high = "5";
        break;
      } else if (strings[i].substring(b - 2, b + 1) == "six") {
        high = "6";
        break;
      } else if (strings[i].substring(b - 4, b + 1) == "seven") {
        high = "7";
        break;
      } else if (strings[i].substring(b - 4, b + 1) == "eight") {
        high = "8";
        break;
      } else if (strings[i].substring(b - 3, b + 1) == "nine") {
        high = "9";
        break;
      }
    }
    sum += parseInt(low + high);
  }
  console.log(sum);
});
