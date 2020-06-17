class Controller {
  player: number = 1;
  data: Array<Array<number>>;

  constructor(data: Array<Array<number>>) {
    this.data = data
  }

  play(row: number, column: number) {
    if (this.data[row][column] == 0) {
      this.data[row][column] = this.player;
    }
  }

  win() {

  }
}

export default Controller