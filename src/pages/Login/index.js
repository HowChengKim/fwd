import React, {Component} from 'react';
import {Field, List,Group,Button,Tabs,Icon} from 'amazeui-touch';
import './Login.styl';

const radioData = [{label:'个人',value:'person'},{label:'公司',value:'company'}];

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'person',
      isFinish:false
    };
    this.getRadioValue = this.getRadioValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toProgress = this.toProgress.bind(this);
  }

  getRadioValue(e) {
    this.setState({radioValue:e});
  }
  handleSubmit(){/*提交表单*/
    this.setState({isFinish:true});
    setTimeout(this.toProgress,1500);
  }
  toProgress(){
    this.props.history.push('/progress');
  }
  radioComponent(radioValue){
    return (
      <Group header="身份" noPadded>
        <List inset={false}>
          <List.Item nested="radio">
            {radioData.map((o,index)=>{
                return (
                  <Field key={index} label={o.label} type="radio" name={o.value} checked={radioValue===o.value} onChange={()=>{this.getRadioValue(o.value)}} />
                )
              })}
          </List.Item>
        </List>
      </Group>
    )
  }
  render() {
    let {radioValue,isFinish} = this.state;
    return (
     <div>
       {
         !isFinish &&
         <Tabs>
           <Tabs.Item title="登录">
             <div className="login-box">
               <Field placeholder="请输入手机号" labelBefore={<Icon name="info" />} type="text" />
               <Field placeholder="密码" labelBefore={<Icon name="person" />} type="password" />
               <label className="remember-box"><input type="checkbox" name="agree"/>下次自动登录</label>
               <Button amStyle="primary" block={true} onClick={this.toProgress}>登录</Button>
             </div>
           </Tabs.Item>
           <Tabs.Item title="注册">
             <div className="login-box">
               {this.radioComponent(radioValue)}
               <Group header="手机号:" noPadded>
                 <List>
                   <List.Item>
                     <Field placeholder="请输入手机号" type="number" />
                   </List.Item>
                 </List>
               </Group>
               <Group header="姓名:" noPadded>
                 <List>
                   <List.Item>
                     <Field placeholder="请输入姓名" type="text" />
                   </List.Item>
                 </List>
               </Group>
               <Group header="身份证号码:" noPadded>
                 <List>
                   <List.Item>
                     <Field placeholder="请输入身份证号码" type="text" />
                   </List.Item>
                 </List>
               </Group>
               <Group header="贷款金额(元):" noPadded>
                 <List>
                   <List.Item>
                     <Field placeholder="请输入贷款金额" type="number" />
                   </List.Item>
                 </List>
               </Group>
               <Group header="所在律所:" noPadded>
                 <List>
                   <List.Item>
                     <Field placeholder="请输入所在律所" type="text" />
                   </List.Item>
                 </List>
               </Group>
               <Group header="公司名称:" noPadded>
                 <List>
                   <List.Item>
                     <Field placeholder="请输入公司名称" type="text" />
                   </List.Item>
                 </List>
               </Group>
               <Button className="login-button" onClick={this.handleSubmit}>提交</Button>
               <div className="reader-box">
                 <label><input type="checkbox" name="agree"/>阅读并同意</label>
                 <span>《法务贷服务协议》</span>
               </div>
             </div>
           </Tabs.Item>
         </Tabs>
       }
       {
         isFinish &&
         <div className="finish-box">
           <div className="check-group">
             <Icon name="check"/>
             <h1>申请成功</h1>
           </div>
           <p>您可登录 <a href="http://www.fawubao.com">www.fawubao.com</a> 个人中心查看贷款进度</p>
         </div>
       }
     </div>
    );
  }
}

export default Login;