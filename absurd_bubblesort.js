const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? `, function(userResponse) {

    const record = userResponse === 'yes' ? true : false;
    callback(record);
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // console.log(`Hey I innerBSL happened`);
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
  if (i === arr.length - 1 ) {
    if (madeAnySwaps === true) {
      i = 0;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
      console.log("Hit the last el in the arr");
    } else {
      console.log("Hit the last el in the arr and madeAnySwaps false");
      outerBubbleSortLoop(false);
    }
  } else {
  askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
    if (isGreaterThan === true) {
      console.log(`Stepping into comparisons`);
      let num = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = num;
      madeAnySwaps = true;
      i++;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    } else {
      console.log(`you just entered no!`);
      madeAnySwaps = false;
      i++;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    }
    });
  }
}


function absurdBubbleSort(arr, sortCompletionCallback) {
  let i = 0;
  console.log(`first`);
  outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    // console.log(`Back into the outerBubbleSortLoop`);
    madeAnySwaps ? innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) : sortCompletionCallback(arr);
  }

}

absurdBubbleSort([7, 2, 86, 45, 2], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// SCRATCH
// innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
// } else {
// sortCompletionCallback;
// }




// const test = function (record) {
//   console.log(`Print ${record}`);
// };

// askIfGreaterThan(4,5, test);
