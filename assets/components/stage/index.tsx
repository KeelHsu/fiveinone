import React from 'react';
import { Cell } from '../cell/index';
import Controller from './controller';
import './index.less'

const controller = new Controller(15, 15)

const Stage = () => {
  controller.data[0][0] = 1;
  controller.data[0][1] = 1;
  controller.data[5][2] = 2;
  controller.data[5][3] = 2;
  controller.data[5][4] = 1;
  controller.data[6][4] = 2;

  return <div className='square'>
    <div id='stage' className='square-content'>
      <div className='grid-layer star-layer'>
        <div className="corner"></div>
        <div className="rest rest-mid"></div>
        <div className="corner"></div>
        <div className="rest rest-side"></div>
        <div className="middle"></div>
        <div className="rest rest-side"></div>
        <div className="corner"></div>
        <div className="rest rest-mid"></div>
        <div className="corner"></div>
      </div>
      <div className='date-layer'>
        {controller.data.map((rows: Array<number>, row: number) => {
          return rows.map((value: number, column: number) => {
            return <div className='unit' key={column} onClick={(e: React.MouseEvent) => { unitClick(e, row, column) }} >
              {value ? <Cell row={row} column={column} player={value} /> : null}
            </div>
          })
        })}
      </div>
    </div>
  </div >
}

const unitClick = (e: React.MouseEvent, row: number, column: number) => {
  controller.play(row, column)
}

export default Stage