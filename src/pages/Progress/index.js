import React, {Component} from 'react';
import './Progress.styl';
import Step from '../../components/Step';

let stepData = [
  {title: '上诉', msg: '上诉的内容(即更新进度时填的备注)',date:'2018-05-18'},
  {title: '宣判', msg: '上诉的内容(即更新进度时填的备注))',date:'2018-05-18'},
  {title: '开庭审理', msg: '上诉的内容(即更新进度时填的备注)',date:'2018-05-18'},
  {title: '受理', msg: '上诉的内容(即更新进度时填的备注)',date:'2018-05-18'}];
class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="progress-box">
        <div className="user-info">
          <p>订单编号：132416848948</p>
          <p>委托律师：张三</p>
          <p>联系电话：13423174915</p>
        </div>
        <div className="result">
          <h1 className="title">查询进度</h1>
          <Step stepData={stepData}/>
        </div>
      </div>
    );
  }
}

export default Progress;