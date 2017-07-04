const HanoiView = require('./hanoi-view.js');
const Game = require('./hanoi_solution/game.js');

$( () => {
  const $rootEl = $('.hanoi');
  const game = new Game();
  new HanoiView(game, $rootEl);
});
