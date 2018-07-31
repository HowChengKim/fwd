import React, {Component} from 'react';
import './Service.styl';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="service-container">
        <p>业务申请有疑惑，涉及贷款金额较大？建议拨打电话联系我们</p>
        <div className="service-phone-box">
          <div className="phone-time">
            <i className="iconfont icon-dianhua"></i>
            <span>官方客服电话</span>
            <span>09:00-18:00</span>
          </div>
          <h1 className="phone-msg">400-123-130321</h1>
        </div>
      </div>
    );
  }
}

export default Service;