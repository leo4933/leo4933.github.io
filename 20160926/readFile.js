//fs是nodejs内部的系统模块 用于操作本地文件系统
//fs即file system
var fs = require('fs');

//读取文件内容
//readFile 是一个异步调用,当读取数据成功后会执行回调函数
//./表示当前目录
// fs.readFile('./readme.md',function(err,data){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log(data.toString());
//   }
// });

var person = {name:'tom',age:18};
var strData = JSON.stringify(person);

// 写文件
// 参数一文件名
// 参数二数据
// 参数三回调函数
fs.writeFile('./data.json',strData,function(err){
  console.log(err);
});
