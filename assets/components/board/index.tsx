import React from "react";
import ReactDOM from "react-dom";
import { boardDate } from "./date";

import './index.less'

const Board = () => {
  return <div className='square'>
    <div id='board' className='square-content'>
      {boardDate.map((rows: Array<number>, row: number) => {
        return rows.map((value: number, column: number) => {
          return <div date-row={row} date-column={column} key={column}
            className={`unit${row == 0 ? ' top' : ''}${row == boardDate.length - 1 ? ' bottom' : ''}${column == 0 ? ' left' : ''}${column == rows.length - 1 ? ' right' : ''}`}
          />
        })
      })}
    </div>
  </div >
}
export default Board;
