var arr = [];
var arr1 = new Array();

arr.push('tom');
arr.push('jerry');
arr.push({
    name: 'jerry',
    age: 18
});
arr.push(21);
arr.push([1, 2, 3, 4, 5]);

console.log(arr);
console.log(arr.length);
arr.pop();
console.log(arr);

//在数组开头加入数据
arr.unshift('123');
console.log(arr);

//在开头删除一项数据
arr.shift();
console.log(arr);

/**
 * 开始位置到结束位置不包含结束位置
 * 如果结束位置为负数,那么从结尾开始数
 * 如歌结束位置为空,截取到数组结束
 */
console.log(arr.slice(1, -1));
console.log(arr);

//splice替换数组中的内容
//参数一开始位置
//参数二替换数量
//参数二后的参数 新加入的项目,多个用逗号分割
//返回结果为被替换的对象
//splice常用于删除指定位置的元素
//
console.log(arr.splice(1, 2, 1, 2, 3));
console.log(arr);

//concat连接两个数组
arr1 = [4, 5, 6, 1, 2, 3, 13, 24, 33];
var arr2 = arr.concat(arr1);
console.log(arr2);

console.log(arr1.sort(function(a, b) {
    return b - a;
}));

//join 连接数组中的每一个元素为一个字符串
console.log(arr.join('+'));

//forEach循环数组中的每一项
//接受一个回调函数
//参数一 元素值
//参数二 索引
//参数三 原数组
//
arr1.forEach(function(item,index,temArr){
  console.log(item);
  // console.log(index);
  // console.log(temArr);
});
// console.clear();
//元素查找
console.log(arr1.find(function(item){
  if (item == 4) {
    return item;
  }
}));

//查找元素,返回索引值
//如果没找到返回-1;
console.log(arr1.findIndex(function(item){
  if (item == 4) {
    return item;
  }
}));

console.log(arr1.indexOf(4));

//筛选,所有大于8的
var arrFilterResult = arr1.filter(function(item){
  if (item>8) {
    return item;
  }
});

console.log(arrFilterResult);
