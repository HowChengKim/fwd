import React, {Component} from 'react';
import './Report.styl';

const dataList = [
  {title:'文章标题',content:'Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。',date:'2016-10-10 12:00:00'},
  {title:'文章标题',content:'Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。',date:'2016-10-10 12:00:00'},
  {title:'文章标题',content:'Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。',date:'2016-10-10 12:00:00'},
  {title:'文章标题',content:'Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。',date:'2016-10-10 12:00:00'}
];

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  initReport(){
    return dataList.map((o,i)=>{
      return (
        <div key={i} className="report-group">
          <h1>{o.title}</h1>
          <p>{o.content}</p>
          <span>{o.date}</span>
        </div>
      )
    });
  }
  render() {
    return (
      <div style={{backgroundColor:'white'}}>
        {this.initReport()}
      </div>
    );
  }
}

export default Report;