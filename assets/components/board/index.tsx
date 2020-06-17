import React from "react";
import ReactDOM from "react-dom";
import { boardDate } from "./date";

import './index.less'

const Board = () => {
  return <div className='square'>
    <div id='board' className='square-content'>
      <div className='row-layer'>
        {boardDate.map((rows: Array<number>, row: number) => {
          return <div className='row-line' key={row} />
        })}
      </div>
      <div className='col-layer'>
        {boardDate[0].map((value: number, column: number) => {
          return <div className='col-line' key={column} />
        })}
      </div>
      <div className='date-layer'>
        {boardDate.map((rows: Array<number>, row: number) => {
          return rows.map((value: number, column: number) => {
            return <div className='unit' date-row={row} date-column={column} key={column} />
          })
        })}
      </div>
    </div>
  </div >
}
export default Board;
