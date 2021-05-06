import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from './assets/common.css'
import axios from "axios";

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  axios,
  common,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.filter('setTime', function (value) {//setTime为过滤器名
	// console.log(new Date(value));
  let oldDate = new Date(value);
  let newDate = new Date();
  var dayNum = "";
  var getTime = (newDate.getTime()-oldDate.getTime())/1000;
 // console.log(getTime);
  if(getTime < 60*5){
    dayNum = "刚刚";
  }else if(getTime >= 60*5 && getTime < 60*60){
    dayNum = parseInt(getTime / 60) + "分钟前";
  }else if(getTime >= 3600 && getTime < 3600*24){
    dayNum = parseInt(getTime / 3600) + "小时前";
  }else if(getTime >= 3600 * 24 && getTime < 3600 * 24 * 30){
    dayNum = parseInt(getTime / 3600 / 24 ) + "天前";
  }else if(getTime >= 3600 * 24 * 30 && getTime < 3600 * 24 * 30 * 12){
    dayNum = parseInt(getTime / 3600 / 24 / 30 ) + "个月前";
  }else if(getTime >= 3600 * 24 * 30 * 12){
    dayNum = parseInt(getTime / 3600 / 24 / 30 / 12 ) + "年前";
  }
  // let year   = oldDate.getFullYear();
  // let month  = oldDate.getMonth()+1;
  // let day    = oldDate.getDate();
  // let hour   = oldDate.getHours();
  // let minute = oldDate.getMinutes();
  // let second = oldDate.getSeconds();
  // return dayNum+" "+year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
  return dayNum;
});

Vue.filter('tabFormatter',function (post) {
  if(post.good == true){
    return '精华'
  }else if(post.top == true){
    return  '置顶'
  }else if(post.tab == 'ask'){
    return  '问答'
  }else if(post.tab == 'share'){
    return  '分享'
  }else if(post.tab == 'job'){
    return  '招聘'
  }
})
