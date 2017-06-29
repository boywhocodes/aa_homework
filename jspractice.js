//
//
//
// function madLib(verb, adj, noun) {
//
//   console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`)
// }
//
// // madLib('film','greatest','game')
//
// function isSubstring(searchString, subString) {
//   if (searchString.includes(subString)) {
//     console.log(true)
//   } else {
//   console.log(false)}
// }
//
// // isSubstring("hellothere","hello")
// let fizz_arr = []
// function fizzBuzz(array) {
//    for (let i = 0; i < array.length; i++) {
//      if ([array[i]] % 3 === 0 && array[i] % 5 !== 0) {
//        fizz_arr.push(array[i]);
//      }
//       else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
//        fizz_arr.push(array[i]);
//      }
//    }
//    return (fizz_arr)
// }
// // console.log(fizzBuzz([5,3,6,7,5,9]))
//
// function isPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false
//     }
//   }
//   return true
// }
// // isPrime(2)
// // isPrime(10)
// // isPrime(15485863)
// // isPrime(3548563)
//
// function sumOfNPrimes(n) {
//   let prime_arr = []
//   let counter = 2
//   let sum = 0
//
//     while (prime_arr.length < n) {
//       if (isPrime(counter) === true) {
//         prime_arr.push(counter);
//       }
//       counter += 1
//   }
//   for (let i = 0; i < prime_arr.length; i++) {
//     sum  += prime_arr[i]
//   }
//   return sum
// }
//
// console.log(sumOfNPrimes(1))
// console.log(sumOfNPrimes(0))
// console.log(sumOfNPrimes(4))
//
// function titleize(names, callback) {
//   let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
// callback(titleized);
// };
//
// titleize(['Mary', 'Brian', 'Leo'], (names) => {
//   names.forEach(name => console.log(name));
// });
//
// function Elephant(name, height, tricks) {
//   this.name = name;
//   this.height = height;
//   this.tricks = tricks;
// }
//
// Elephant.prototype.trumpet = function () {
//   console.log(`${this.name} the elephant goes phrRRRRRRRRRRRRR!!!!!!!!!`);
// };
//
// Elephant.prototype.grow = function () {
//   this.height = this.height + 12;
// };
//
// Elephant.prototype.addTrick = function () {
//   this.tricks.push(trick)
// };
//
// Elephant.prototype.play = function () {
//   trickIndex = Math.floor(Math.random() * this.tricks.length);
//   console.log(`${this.name} is ${this.tricks[trickIndex]}!`)
// };
//
// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);
//
// let herd = [ellie, charlie, kate, micah];
//
// Elephant.paradeHelper = function(name) {
//   console.log(`${name} is trotting by!`);
// }
//
// window.setInterval(function () {
//   alert('Hammer Time');
// }, 1);
//
// function hammerTime (time) {
//
//   window.setTimeout function () {
//     alert(`${time} is HAMMER TIME!`);
//   });
// }
//
// const readline = require('readline')
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// function teaAndBiscuits () {
//   reader.question('Would you like some tea?', function (res) {
//     console.log(`You replied ${res}.`);
//     reader.question('Would you like some biscuits?', function (res2) {
//       console.log(`You replied ${res2}`);
//
//       const first = (res === 'yes') ? 'do' : 'don\'t';
//       const second = (res2 === 'yes') ? 'do' : 'don\'t';
//
//       console.log(`So you ${first} want tea and you ${second} want biscuits.`);
//       reader.close();
//     });
//   });
// }
//
//
// function Cat () {
//   this.name = 'Markov';
//   this.age = 3;
// }
//
// function Dog () {
//   this.name = 'Noodles';
//   this.age = 4;
// }
//
// Dog.prototype.chase = function (cat) {
//   console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
// };
//
// const Markov = new Cat ();
// const Noodles = new Dog ();
//
// Noodles.chase(Markov);
//
// Noodles.chase.call(Markov, Noodles);
// Noodles.chase.apply(Markov, [Noodles]);



class Game {
  constructor() {
    this.towers = [[3,2,1],[],[]];
  }

isValidMove(startTowerIdx, endTowerIdx) {
  const startTower  = this.towers[startToweridx];
  const endTower = this.towers[endTowerIdx];

  if (startTower.length === 0) {
    return false;
  } else if (endTower.length == 0) {
    return true;
  } else {
    const topStartDisc = startTower[startTower.length - 1];
    const topEndDisc = endTower[endTower.length - 1];
    return topStartDisc < topEndDisc
  }
}

isWon() {
  return )this.towers[2].length == 3 || (this.towers[1].length == 3);
}

move(startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
    return true;
  } else {
    return false;
  }
}
print() {
  console.log(JSON.stringify(this.towers));
}

promptMove(reader, callback) {
  this.print();
  reader.question("Enter a starting tower: ", start => {
    const startTowerIdx = parseInt(start);
    reader.question("Enter an ending tower: ", end => {
      const endTowerIdx = parseInt(end);
      callback(startTowerIdx, endTowerIdx)
    });
  });
}

run(reader, gameCompletionCallback) {
  this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
    if (!this.move(startTowerIdx, endTowerIdx)) {
      console.log("Invalid move!");
    }
    if (!this.isWon()) {
      this.run(reader, gameCompletionCallback);
    } else {
      this.print();
      console.log("You win!");
      gameCompletionCallback();
    }
  })
}
}
