const headerToken ='Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyTmFtZSI6InJvb3QiLCJleHAiOjE1NjkxNzM4OTR9.AajK9v0wzR3w4uu85rtHkAgvhmgEVfZVFiu2pGN7odkgLb4uQtxYbuaWiJXZmJ4pO3bxACUjFOA0i92RBFqcQw'


const hostPort ='http://192.168.1.173:9001/'

export {headerToken,hostPort}
//  shuju.flag == true

// 获取当前日期
export function _getDate(){
    var date = new Date();
    var year = date.getFullYear(); //获取年份
    var month  = date.getMonth() + 1  ; //获取月份 但是返回的月份会小一月
    var dates = date.getDate(); //获取日期
    var arr  = ['周日','周一','周二','周三', '周四', '周五' , '周六'] 
    var week = date.getDay() ; //获取星期几，但是返回的是阿拉伯数字，且周日为0
    var hours = date.getHours(); //获取小时
    var minutes = date.getMinutes(); //获取分钟

    return `${year}-${month}-${dates} ${arr[week]} ${hours}:${minutes}`
} 

// 返回当前时分秒 格式 08:08:08
export function _getTime(){
    var time = new Date();
    var h = time.getHours(); //获取小时
    h = h < 10 ? "0" + h : h; //小于10填充0
    var m = time.getMinutes(); //获取分钟
    m = m < 10 ? "0" + m : m; //小于10填充0
    var s = time.getSeconds(); //获取分钟
    s = s < 10 ? "0" + s : s; //小于10填充0
    return `${h}:${m}:${s}`
}

// 倒计时组件
// 不能用时分秒相减，否则会出现负数
export function _countDown(time){
    var nowTime = +new Date(); //返回的是当前时间的总毫秒数
    var inputTime = +new Date(time) ; // 返回的是用户输入时间的总毫秒数
    var times = (inputTime - nowTime ) / 1000 ; //times 是剩余时间的总秒数
    var d = parseInt(times/60/60/24) ; //计算天数
    var h = parseInt(times/60/60%24) ; //计算小时
    var m = parseInt(times/60%60) ; //计算分钟
    var s = parseInt(times%60) ; //计算当前秒数
    h = h < 10 ? "0" + h : h; //小于10填充0
    m = m < 10 ? "0" + m : m; //小于10填充0
    s = s < 10 ? "0" + s : s; //小于10填充0
    return `${h}:${m}:${s}`
}