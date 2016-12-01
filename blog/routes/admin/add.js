var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/add',function(req,res){
  res.render('blogs/admin');
});
router.post('/submit',function(req,res){
  /// 把注册的用户信息写在 data/users.json文件中
  console.log(req.body);
  var arr = getUserData();
  
  arr.push(req.body);
  fs.writeFileSync('./data/blogs.json',JSON.stringify(arr));
  res.redirect('/admin/list');
});

router.get('/list',function(req,res){
  var strData = fs.readFileSync('./data/blogs.json').toString();
  var data =[];
  if (strData) {
    data = JSON.parse(strData);
  }

  res.render('blogs/list',{list:data});
});
router.get('/change',function(req,res){
  console.log('点击修改');
  res.render('blogs/admin');
});
/**
 * 读取已经存在的用户数据信息
 * @return {[type]} [description]
 */
function getUserData(){
  var strData = '';
  strData = fs.readFileSync('./data/blogs.json').toString();
  // console.log(strData);
  var arr = [];
  if(strData){
    arr = JSON.parse(strData);
  }
  return arr;
}
module.exports = router;
