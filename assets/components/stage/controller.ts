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
      if (this.win(row, column)) {
        console.log('winner', this.player == 1 ? '黑' : '白')
        alert('win')
        return
      }

      this.player = this.player == 1 ? 2 : 1
    }
  }

  win(row: number, column: number): boolean {
    let horizontal = 1
    let vertical = 1
    let leftDiagonal = 1
    let rightDiagonal = 1

    const target = this.data[row][column];

    // 横向
    for (let i = column + 1; i <= this.totalRow; i++) {
      if (this.data[row][i] == target) {
        horizontal++;
      } else {
        break;
      }
    }
    for (let i = column - 1; i >= 0; i--) {
      if (this.data[row][i] == target) {
        horizontal++;
      } else {
        break;
      }
    }
    console.log('横向', horizontal)
    if (horizontal >= 5) {
      return true;
    }
    // 竖向
    for (let i = row + 1; i <= this.totalRow; i++) {
      if (this.data[i][column] == target) {
        vertical++;
      } else {
        break;
      }
    }
    for (let i = row - 1; i >= 0; i--) {
      if (this.data[i][column] == target) {
        vertical++;
      } else {
        break;
      }
    }
    console.log('竖向', vertical)
    if (vertical >= 5) {
      return true;
    }

    // 西北-东南对角线
    for (let i = 1; i < 5; i++) {
      if (this.data[row + i][column + i] == target) {
        leftDiagonal++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (this.data[row - i][column - i] == target) {
        leftDiagonal++;
      } else {
        break;
      }
    }
    console.log('左上', leftDiagonal)
    if (leftDiagonal >= 5) {
      return true;
    }

    // 东北-西南对角线
    for (let i = 1; i < 5; i++) {
      if (this.data[row + i][column - i] == target) {
        rightDiagonal++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (this.data[row - i][column + i] == target) {
        rightDiagonal++;
      } else {
        break;
      }
    }
    console.log('右上', leftDiagonal)
    if (rightDiagonal >= 5) {
      return true;
    }

    return false;
  }
}


function eightDirection(row: number, column: number) {

}
export default Controller