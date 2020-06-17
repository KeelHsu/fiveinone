import React, { Fragment } from 'react';
import './index.less'

export interface CellProps { row: number; column: number; player: number }

export const Cell = (props: CellProps) => {
  return <Fragment><div className='cell' /></Fragment>
}
