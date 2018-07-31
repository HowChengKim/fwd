import React, {Component} from 'react';
import './Search.styl';
import {Field} from 'amazeui-touch'

const Selects = (
  <Field type="select" >
    <option value="normal">一般搜索</option>
    <option value="high">高级搜索</option>
  </Field>
);
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.searchBtn = this.searchBtn.bind(this);
  }
  handleSearch(){
    console.log('搜索')
  }
  searchBtn(){
    return (
      <span className="search-btn" onClick={this.handleSearch}>
        搜索
      </span>
    );
  }
  render() {
    return (
      <div className="search-box">
        <div className="select-group">
          <h1 className="title">智能推荐</h1>
          <p className="subtitle">更懂你的律师推荐助手</p>
          <p className="title-tip">为了筛选出最合适您的律师，请填写“高级检索”相应信息进行检索</p>
          <Field  placeholder=" 请输入搜索内容，多个关键词之间以空格隔开" labelBefore={Selects} labelAfter={this.searchBtn()} type="text" />
          <div className="search-history">
            <span>婚姻继承</span><span>侵权纠纷</span><span>交通事故</span><span>工伤赔偿</span><span>医疗纠纷</span><span>债权债务</span><span>劳动仲裁</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;