import React from "react";
import ReactDOM from "react-dom";
import { chessboardDate } from "./date";

import './index.less'

const Chessboard = (prop: { name: string }) => {
  return <div>
    {chessboardDate.map((rows: Array<number>, row: number) => {
      rows.map((value: number, column: number) => {
        return <div className={'unit'} row={row} column={column} />
      })
    })}
  </div >
}
export default Chessboard;
