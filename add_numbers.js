const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft === 0) {
    reader.close();
    completionCallback(sum);
  }

  if (numsLeft > 0) {
    reader.question("Provide a number: ", function (userString) {
       let userNum = parseInt(userString);
      //  sum += userNum;
       console.log(`${sum}`);
       addNumbers(sum + userNum, numsLeft - 1, completionCallback);
    });
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
