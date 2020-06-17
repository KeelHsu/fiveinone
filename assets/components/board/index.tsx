import React from "react";
import ReactDOM from "react-dom";
import { boardDate } from "./date";

import './index.less'

const Board = (props: React.ComponentProps<'object'>) => {
  return <div className='square'>
    <div id='board' className='square-content'>
      <div className='grid-layer' />
      <div className='date-layer'>
        {boardDate.map((rows: Array<number>, row: number) => {
          return rows.map((value: number, column: number) => {
            return <div className='unit' date-row={row} date-column={column} key={column} onClick={(e: React.MouseEvent) => { unitClick(e, row, column) }} />
          })
        })}
      </div>
    </div>
  </div >
}

const unitClick = (e: React.MouseEvent, row: number, column: number) => {
  console.log(e)
}

export default Board;
