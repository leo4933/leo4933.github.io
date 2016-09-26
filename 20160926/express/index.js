//引入express模块
var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.send('这是我的第一个Express项目应用...');
});

app.get('/user',function(req,res){
  res.send('这个是用户界面..');
});

app.get('/aboutme',function(req,res){
  res.send('这个是关于我界面');
});

app.listen(1024,function(){
  console.log('服务器运行与本地1024端口...');
});
