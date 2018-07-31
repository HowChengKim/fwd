import React, {Component} from 'react';
import {Slider,Button} from 'amazeui-touch';
import Step from '../../components/Step/index';
import Service from '../../components/Service/index';
import './Index.styl';

const stateData = {
  banners:[{
    img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
    desc: '这是图一'
  },{
    img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
    desc: '这是图二'
  }]
};
let stepData = [
  {title: '诉讼难处', msg: '李某某，因交通事故要打官司，一时拿不出律师费'},
  {title: '在线申请', msg: '在线申请，填写资料'},
  {title: '审核阶段', msg: '律师帮助当事人申请，平台。。。。。'},
  {title: '申请结果', msg: '银行放款'}];
const sliderCaption = (
  <Slider>
    {stateData.banners.map((item, i) =>{
      return (
        <Slider.Item key={i}>
          <img src={item.img} alt={item.desc}/>
        </Slider.Item>
      );
    })}
  </Slider>
);
const PointGroup = ()=>{
  let data = ['诉讼费贷款','平台担保','手续简单快捷','24小时全程跟进'];
  let divs = [];
  for(let i=0;i<4;i++){
    divs.push(<div key={i}><img src={stateData.banners[0].img} alt={stateData.banners[0].desc} /><span>{data[i]}</span></div>)
  }
  return (
    <div className="point-group">
      {divs}
    </div>
  )
};
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
  }
  login(){
    this.props.history.push('/login')
  }
  render() {
    return (
      <div>
        <div style={{backgroundColor:'white'}}>
          {sliderCaption}
          <h1 className="index-title">法务贷四大特点</h1>
          <PointGroup />
          <Button className="index-button" onClick={this.login}>立即申请</Button>
        </div>
        <div style={{marginTop:'10px',backgroundColor:'white',borderTop:'1px solid transparent'}}>
          <h1 className="index-title">申请流程</h1>
          <Step stepData={stepData}/>
          <Service />
        </div>
      </div>
    );
  }
}

export default Index;