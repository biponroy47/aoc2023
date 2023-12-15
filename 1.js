const fs = require("fs");

const fileName = "input1.txt";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file: $(err)");
    return;
  }
  let input = data;
  //let input = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";
  strings = input.split("\n");
  console.log(strings);

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
      }
    }
    for (let b = strings[i].length - 1; b >= 0; b--) {
      if (isNumeric(strings[i].charAt(b))) {
        high = strings[i].charAt(b);
        break;
      }
    }
    sum += parseInt(low + high);
    console.log(parseInt(low + high));
  }
  console.log(sum);
});
