var data = "";
//localStorage 是H5中新增的一个本地存储数据的功能
//存储的数据大小为5m以内
//只能存string
//永久存储,直到你手动删除
//localStorage是存储的方法名,直接加个key值,然后保存

var student = {};
student.id = 1;
student.name = "Tom";
student.race = "Cat";
student.age = 10;
student.hobby = "eat fish";

var goofy = {};
goofy.id = 2;
goofy.name = "Goofy";
goofy.race = "Dog";
goofy.age = 21;
goofy.hobby = "eat meat";

var person = {};
person.id = 3;
person.name = "小新";
person.race = "person";
person.age = 5;
person.hobby = "脱裤子";

var arr = [];
arr.push(student);
arr.push(goofy);
arr.push(person);
localStorage.myData = JSON.stringify(arr);

var html = template('table',{list:arr});
console.log(html);
document.querySelector('#content').innerHTML = html;
