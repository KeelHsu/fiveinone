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

      if (this.win(row, column)) {
        console.log('winner', this.player == 1 ? '黑' : '白')
        return
      }
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
    if (vertical >= 5) {
      return true;
    }

    // 西北-东南对角线
    all: for (let i = row + 1; i <= this.totalRow; i++) {
      for (let j = column + 1; j <= this.totalColumn; j++) {
        if (this.data[i][j] == target) {
          leftDiagonal++;
        } else {
          break all;
        }
      }
    }
    all: for (let i = row - 1; i >= 0; i--) {
      for (let j = row - 1; j >= 0; j--) {
        if (this.data[i][j] == target) {
          leftDiagonal++;
        } else {
          break all;
        }
      }
    }
    if (leftDiagonal >= 5) {
      return true;
    }

    // 东北-西南对角线
    // 带标签以跳出外循环
    all: for (let i = row - 1; i >= 0; i--) {
      for (let j = column + 1; j <= this.totalColumn; j++) {
        if (this.data[i][j] == target) {
          rightDiagonal++;
        } else {
          break all;
        }
      }
    }
    all: for (let i = row + 1; i <= this.totalRow; i++) {
      for (let j = row - 1; j >= 0; j--) {
        if (this.data[i][j] == target) {
          rightDiagonal++;
        } else {
          break all;
        }
      }
    }
    if (rightDiagonal >= 5) {
      return true;
    }

    return false;
  }
}

export default Controller