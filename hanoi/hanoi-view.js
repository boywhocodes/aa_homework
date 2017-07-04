class HanoiView {
  constructor(game, $rootEl) {
    this.game = game;
    this.$rootEl = $rootEl;
    this.setupTowers();
    this.clickTower();

    this.startTowerIdx = null;
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let $ul = $('<ul>');
      $ul.data('pos', `${i}`);

      for (let j = 0; j < 10; j++) {
        let $li = $('<li>');
        $ul.append($li);
        if (i == 0) {
          $li.addClass(`disk-${j + 1}`);
        }
      }
      this.$rootEl.append($ul);
    }
  }

  render() {
    $('li').removeClass();
    this.game.towers.forEach((tower, i) => {
      tower.forEach((disk, j) => {
        $('ul').eq(i).find('li').eq(j % 10).addClass(`disk-${disk}`);
      });
    });
  }

  clickTower() {
    let $ul = $('ul');
    $ul.each((i, ul) => {
      $(ul).click((event) => {
        let $tar = $(event.currentTarget);
        $tar.addClass('selected');
        if(this.startTowerIdx != null) {
          this.game.move(this.startTowerIdx, i);
          this.startTowerIdx = null;
        } else {
          this.startTowerIdx = i;
        }

      this.render();
      });
    });
  }
}

module.exports = HanoiView;
