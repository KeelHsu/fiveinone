import React from "react";
import ReactDOM from "react-dom";
import Chessboard from '../chessboard/index';

import './index.less'

class Main extends React.Component {
  render(){
    return <div><Chessboard/></div>
  }
}

export default Main;
