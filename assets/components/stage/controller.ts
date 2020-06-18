class Controller {
  player: number
  totalRow: number
  totalColumn: number
  data: Array<Array<number>> = []

  constructor(totalRow: number, totalColumn: number) {
    this.player = 1
    this.totalRow = totalRow
    this.totalColumn = totalColumn

    for (let i = 0; i < totalRow; i++) {
      let columnData = Array(this.totalColumn).fill(0)
      this.data[i] = columnData
    }
  }

  play(row: number, column: number) {
    if (this.data[row][column] == 0) {
      this.data[row][column] = this.player;
      this.player = this.player == 1 ? 2 : 1
    }
  }

  win() {

  }
}

export default Controller