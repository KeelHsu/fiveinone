import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Board from '../board/index';
import { boardDate } from "../board/date";
import Controller from "./controller";

const Scene = () => {
  const controller = new Controller(boardDate)



  return <Fragment><Board /></Fragment>
}

export default Scene;
