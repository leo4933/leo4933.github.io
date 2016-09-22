var txt = document.querySelector('#txt');
var list = document.querySelector('#list');

var data = [{
  name:"tom",
  avatars:"",
  englishName:"tom"
},{
  name:"jerry",
  avatars:"",
  englishName:"jerry"
},{
  name:"小明",
  avatars:"",
  englishName:"xiaoming"
},{
  name:"小红",
  avatars:"",
  englishName:"xiaohong"
}];


//为文本框添加键盘事件
txt.onkeyup = function(e){
  var str = txt.value;
  var result = data.filter(function(item){
    console.log(item.name.toLowerCase().indexOf(str.toLowerCase()));
    if (str.length == 0) {
      return;
    }
    if (item.name.toLowerCase().indexOf(str.toLowerCase()) > -1||item.englishName.toLowerCase().indexOf(str.toLowerCase())>-1) {
      return item;
    }
  });

  var strHtml = '';
  result.forEach(function(item){
    strHtml += '<li>'+item.name+'</li>';
  });
  list.innerHTML = strHtml;

}
