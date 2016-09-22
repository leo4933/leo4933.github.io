var data = [];
for (var i = 0; i < 10; i++) {
  var obj = {};
  obj.id = i;
  obj.name = '对象'+i;
  obj.description = '第'+i+'个对象的描述信息';
  data.push(obj);
}


var arrMap = data.map(function(item,index,arr){
  // console.group(index);
  // console.log(item);
  // console.log(index);
  // console.log(arr);
  // console.groupEnd();
  return item.id;
});

var arrMap2 = arrMap.map(function(item){
  return item*item;
});

//翻转数组中的顺序
arrMap2.reverse();
console.log(arrMap2);
