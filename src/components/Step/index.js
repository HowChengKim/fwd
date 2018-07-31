import React, {Component} from 'react';
import './Step.styl';

const Steps = (stepData) => {
  let component = [];
  stepData.forEach((o,index)=>{
    component.push(
      (
        <div className="step-group" key={index}>
          <span className="step-point">{index+1}</span>
          <h3>{o.title}</h3>
          <div>{o.msg}</div>
        </div>
      )
    );
  });
  return component;
};

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '这是测试'
    };
  }

  render() {
    return (
      <div className="step-container">
        {Steps(this.props.stepData)}
      </div>
    );
  }
}

export default Step;