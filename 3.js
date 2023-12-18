const fs = require("fs");

const fileName = "inputs/input2.txt";
//const fileName = "input2test.txt";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file: $(err)");
    return;
  }
});
