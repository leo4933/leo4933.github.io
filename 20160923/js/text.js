var data = [];
for (var i = 65; i < 91; i++) {
  data.push(String.fromCharCode(i));
}

console.dir(data);
var div = document.querySelector('.container');
var currentZiMu = "";
function generateChar(){
  var randomIndex = Math.floor((Math.random()*26));
  currentZiMu = data[randomIndex];
  div.innerText = currentZiMu;
  div.style.color = 'hsl('+Math.random()*360+',50%,50%)';
}

generateChar();

document.body.onkeyup = function(e){
  var tempKey = String.fromCharCode(e.keyCode).toUpperCase();
  if (tempKey === currentZiMu) {
    generateChar();
  }
  else {
    alert('输入错误');
  }
};

var btn = document.querySelector('#btn');

//addEventListener添加的时间一起执行
btn.addEventListener('click',function(e){
  alert('button is clicked');
});
btn.addEventListener('click',function(e){
  alert('button is clicked');
});

//btn.onclick方式添加的事件只执行最后一次
// btn.onclick = function(e){
//   alert('点击1');
// };
// btn.onclick = function(e){
//   alert('点击2');
// };


//阶段一:捕获(挖洞)
//阶段二:冒泡
////stopPropagation() 停止:在底层标签前一个阶段写,会多执行底层标签的后一个阶段
//stopImmediatePropagation() 立即停止:不会多执行后一个阶段

var sec = document.querySelector('section');
var cont = document.querySelector('.container2');
var item = document.querySelector('.item');
var span = document.querySelector('span');
var p = document.querySelector('p');


span.addEventListener('click',function(e){
  alert('span is clicked');
});
item.addEventListener('click',function(e){
  alert('item is clicked');
  e.stopPropagation();
});
cont.addEventListener('click',function(e){
  alert('container is clicked');
});
sec.addEventListener('click',function(e){
  alert('section is clicked');
});


p.addEventListener('click',function(e){
  alert('p is clicked');
});

p.addEventListener('click',function(e){
  alert('p true is clicked');
e.stopImmediatePropagation();
},true);


span.addEventListener('click',function(e){
  alert('span true is clicked');

},true);

item.addEventListener('click',function(e){
  alert('item true is clicked');

},true);

cont.addEventListener('click',function(e){
  alert('container true is clicked');
},true);
sec.addEventListener('click',function(e){
  alert('section true is clicked');
},true);
