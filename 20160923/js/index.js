var allItems = document.querySelectorAll('.item');

/**
 * 获取一个数组,元素为一个object包含以下内容
 * hasA 是否包含a标签
 * hasSpan 是否包含span标签
 * sText a标签的文字
 * spanText span的文字
 * aHref a的herf 属性信息
 * aText a的文字
 *
 * js中的元素选择器可以对选择结果做二次筛选
 *
 * 在html标签中 可以通过data-xx 定义属性值
 * 可以在js中使用 标签.dataset.xx 获取
 * 此方法在实际开发的时候是常用的为标签定义附加属性的方法
 *
 * 源生js中为标签添加新的样式使用classList.add(样式名) 实现
 *
 * 标签.style.xxx 设置样式
 */

var arrResult = [];
for (var i = 0; i < allItems.length; i++) {
  var div = allItems[i];

  var temColor = Math.random()*360;
  div.style.backgroundColor = 'hsl(' + temColor +',50%,50%)';

  var a = div.querySelector('a');
  var span = div.querySelector('span');
  var obj = {};

  if (i%3===0) {
    a.classList.add('link');
  }

  if(i === 3){
    console.dir(a.dataset);
    console.dir(a.dataset.cc);
  }

  obj.hasA = false;
  obj.hasSpan = false;
  obj.aHref = "";
  obj.aText = "";
  obj.spanText = "";

  if (a) {
    obj.hasA = true;
    obj.aHref = a.href;
    obj.aText = a.innerText;
  }
  if (span) {
    obj.hasSpan = true;
    obj.spanText = span.innerText;
  }
  console.group(i);
  console.dir(obj);
  console.dir(a);
  console.groupEnd();

  arrResult.push(obj);
}

creatElements(arrResult);

function creatElements(data){
  data.forEach(function(item){
    if (item.hasA) {
      var a = document.createElement('a');
      a.innerText = item.aText;
      a.href = item.aText;
      a.classList.add('link');
      //appendChild()把标签加入指定位置
      var img = document.createElement('img');
      img.style.width = "100px";
      img.scr = "http://h.hiphotos.baidu.com/image/h%3D200/sign=7237860f952397ddc9799f046983b216/dc54564e9258d109a4d1165ad558ccbf6c814d23.jpg";
      document.body.appendChild(a);
      a.appendChild(img);
    }
  });
}
