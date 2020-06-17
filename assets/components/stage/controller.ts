class Controller {
  player: number
  totalRow: number
  totalColumn: number
  data: Array<Array<number>>

  constructor(totalRow: number, totalColumn: number) {
    this.player = 1
    this.totalRow = totalRow
    this.totalColumn = totalColumn
    this.data = Array(this.totalRow).fill(Array(this.totalColumn).fill(0))
  }

  play(row: number, column: number) {
    console.log('row', row)
    console.log('column', column)
    if (this.data[row][column] == 0) {
      this.data[row][column] = this.player;
    }
  }

  win() {

  }
}

export default Controller