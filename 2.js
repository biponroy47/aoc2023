const fs = require("fs");

const fileName = "input2.txt";
//const fileName = "input2test.txt";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file: $(err)");
    return;
  }
  let input = data;
  lines = input.split("\n");
  console.log(lines);

  sum = 0;

  for (let line = 0; line < lines.length; line++) {
    let red = [],
      green = [],
      blue = [];
    rounds = lines[line].split(";");
    for (let round = 0; round < rounds.length; round++) {
      words = rounds[round].split(" ");

      for (let word = 0; word < words.length; word++) {
        if (words[word] == "red" || words[word] == "red,") {
          red.push(parseInt(words[word - 1]));
        }
        if (words[word] == "green" || words[word] == "green,") {
          green.push(parseInt(words[word - 1]));
        }
        if (words[word] == "blue" || words[word] == "blue,") {
          blue.push(parseInt(words[word - 1]));
        }
      }
    }
    (boolr = true), (boolg = true), (boolb = true);
    for (let a = 0; a < red.length; a++) {
      if (red[a] > 12) boolr = false;
    }
    for (let b = 0; b < green.length; b++) {
      if (green[b] > 13) boolg = false;
    }
    for (let c = 0; c < blue.length; c++) {
      if (blue[c] > 14) boolb = false;
    }

    if (boolr == true && boolg == true && boolb == true) {
      let curLine = lines[line].split(" ");
      let gameid = curLine[1].substring(0, curLine[1].length - 1);
      sum += parseInt(gameid);
    }
  }
  console.log(sum);
});
