//不传递任何参数的情况下,获取当前时间
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();//月份从零开始
var date = now.getDate();
var day = now.getDay();//星期从零开始, 零为星期天
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
console.log(now);
console.log(year);
console.log(month);
console.log(date);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);

//获取当前时间戳的毫秒数
var microSeconds = now.getTime();
//计算对应明天的时间
var tomorrow = new Date(microSeconds+24*60*60*1000);
console.log(tomorrow);

//0上月最后一天, 1当前月第一天,-1上月倒数第二天
var setDate = new Date(now.setDate(-20));
console.log(setDate);

//0本年一月,1本年二月,-1 上年十二月
now.setMonth(1);
console.log(now);

//设置年份
now.setFullYear(2015);
console.log(now);

setInterval(function(){
  var temNow = new Date();
  var str = temNow.getFullYear()+"-"+
  (temNow.getMonth()+1)+"-"+
  temNow.getDate()+" " +
  temNow.getHours()+":"+
  temNow.getMinutes()+":"+
  temNow.getSeconds();
  document.body.innerHTML = str;
},1000);
