var obj = {};
obj.id = 1;
var obj1 = new Object();
obj.doSomething = function(str){
  console.log('参数为:'+str);
}

obj.doSomething('tom');

function doFun(str){
  console.log('参数为:'+str);
}

obj.doSomething = doFun;
obj.doSomething('jerry');



for (var k in obj) {
  console.log(k);
}

/**
 * 通过.属性或者[属性]赋值的属性是可以修改,枚举,删除的
 * 通过Object.defineProperty定义的属性默认是不能修改删除枚举的
 * 在对象上定义一个属性信息
 * 参数一对象名
 * 参数二属性名
 * 参数三属性的描述信息
 *
 * value属性值
 * enumerable是否可以被枚举 默认false
 * writable 属性是否可写
 * configurable 属性是否可配置
 * @type {String}
 */
Object.defineProperty(obj,'name',{value:'xiaoming',enumerable:true, writable:true,configurable:true});
obj.name = 'tom';
delete obj.name;
console.log(obj);
console.log(Object.keys(obj));

// 判断对象是否具有某个属性
console.log(obj.hasOwnProperty('age'));

//获取指定对象的指定属性描述信息
console.log(Object.getOwnPropertyDescriptor(obj,'name'));

//修改对象所有属性的configurable为false 不能增删, 能改;
Object.seal(obj);
console.log(Object.getOwnPropertyDescriptor(obj,'id'));
console.log(Object.getOwnPropertyDescriptor(obj,'doSomething'));

console.group('obj freeze');
//freeze冻结,不能增删改属性
//isFrozen(对象)判断对象是否被冻结
// Object.freeze(obj);
console.log(Object.isFrozen(obj));
console.groupEnd();

console.log(Object.isExtensible(obj));
console.log(Object.isExtensible(obj1));
obj.age = 18;
obj.id = 2;
console.log(obj);
