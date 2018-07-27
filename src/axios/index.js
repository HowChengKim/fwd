import axios from 'axios';
import Antd from 'antd';
import 'babel-polyfill';
import qs from 'qs';

let instance = axios.create({
  method: 'post',
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [
    function(data) {
      data = qs.stringify(data);
      return data;
    }],
  transformResponse: [
    function(data) {
      /*预先判断返回data*/
      let resData = JSON.parse(data);
      if (resData.status === 'true') {//正常
        return resData;
      } else if ((resData.status === 'false')) {//报错，提示错误
        Antd.message.warning(resData.msg, 2);
        return false;
      } else {//没有登录
        return false;
      }
    }],
  validateStatus: function(status) {
    return status >= 200 && status < 300; // 默认的
  },
  withCredentials: true

});

instance.all = axios.all;
instance.spread = axios.spread;
instance.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response;
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
instance.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, {params: params}).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  });
}

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  });
}

export default instance;
