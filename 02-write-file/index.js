const { stdin, stdout } = process;
const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dirname, "input.txt"), "", (err) => {
  if (err) console.log(err);
});

stdout.write("Please enter your text");

//Append text to input.txt on every console input
stdin.on("data", (chank) => {
  const str = chank.toString().trim();
  if (str === "exit") {
    finishProcess();
  }
  fs.appendFile(path.join(__dirname, "input.txt"), str, (err) => {
    if (err) console.log(err);
  });
});

//React to CTRL + C
process.on("SIGINT", (signal) => {
  finishProcess();
});

//Function to be called to finish process
const finishProcess = function () {
  console.log("Bye-bye");
  fs.unlink(path.join(__dirname, "input.txt"), (err) => {
    if (err) console.log();
  });
  process.exit();
};
