import React, {Component} from 'react';
import {Slider,Button} from 'amazeui-touch';
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
const pointGroup = (
  ()=>{
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
  });
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{backgroundColor:'white'}}>
          {sliderCaption}
          <h1 className="index-title">法务贷四大特点</h1>
          {pointGroup()}
          <Button className="index-button">立即申请</Button>
        </div>
        <div style={{marginTop:'10px',backgroundColor:'white'}}>
          <h1 className="index-title">申请流程</h1>
        </div>
        <div style={{backgroundColor:'white'}}>
          {sliderCaption}
          <h1 className="index-title">法务贷四大特点</h1>
          {pointGroup()}
          <Button className="index-button">立即申请</Button>
        </div>
        <div style={{marginTop:'10px',backgroundColor:'white'}}>
          <h1 className="index-title">申请流程</h1>
        </div>
      </div>
    );
  }
}

export default Index;