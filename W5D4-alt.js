const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userNum;
reader.question("Provide a number: ", function (userString) {
   userNum = parseInt(userString);
});
