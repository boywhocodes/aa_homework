class View {
  constructor(game, $container) {
     this.game = game;
     this.$container = $container;
     this.setupBoard();
     this.bindEvents();
  }

  bindEvents() {
      $(".grell").click((event) => {
        const $cell = $(event.currentTarget);
        let pos = $cell.data("pos");
        // console.log(pos);
        this.game.playMove(pos);
        this.makeMove($cell);
      });
  }

  makeMove($square) {
    $square.html(`${this.game.currentPlayer == 'x' ? 'o' : 'x'}`);
    let color = this.game.currentPlayer === 'x' ? '#191970' : '#0000CD';
    $square.css('color', color);
    if (this.game.isOver()) {
      if (this.game.winner()) {
        $("h1").text(`${this.game.winner()} has won!`);
      } else {
        $("h1").text('NO ONE WINS!');
      }
      $(".grell").off();
    }
  }

  setupBoard() {
    let $board = $("<ul>");
    $board.addClass("groard");
    this.$container.append($board);
    for (let i = 0; i < 9; i++) {
      let $cell = $("<li>");
      $cell.data("pos", [Math.floor(i / 3), i % 3]);
      $cell.addClass("grell");
      $cell.appendTo($board);
    }
  }
}

module.exports = View;
