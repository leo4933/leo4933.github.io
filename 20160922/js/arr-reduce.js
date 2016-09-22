var data = [];
for(var i = 0; i<10; i++){
  data.push(i);
}
var sum = 0;
data.forEach(function(item){

  sum += item;
});

console.dir(data);
console.log(sum);

//reduce 对数组中每一项进行操作 生成一个合并后的值
//回调函数接收四个参数
//上一次的值
//当前值
//索引
//原数组
data.reduce(function(pre,curr,index,arr){
  console.group(index);
  console.log(pre);
  console.log(curr);
  console.log(index);
  console.log(arr);
  console.groupEnd();
  return curr;
},0);

console.clear();

//数组元素随机排序
data.sort(function(){
  return 0.5 - Math.random();
});

console.log(data);

var arr = [1,1,2,2,3,3];
var arr2 = [];

arr.forEach(function(item){
  if (arr2.indexOf(item)<0) {
    arr2.push(item);
  }
});

console.log(arr2);
