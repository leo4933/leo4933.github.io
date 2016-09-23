var obj = {};
obj.id = 0;
obj.name = "";
obj.race = "";
obj.age = 0;
obj.hobby = "";

var theName = document.querySelector('#theName');
var race = document.querySelector('#race');
var age = document.querySelector('#age');
var hobby = document.querySelector('#hobby');

var arr = JSON.parse(localStorage.myData);

var btn = document.querySelector('button');
btn.addEventListener('click',function(e){
  if (theName.value.trim() !== '') {
    obj.id = arr.length+1;
    obj.name = theName.value;
    obj.race = race.value;
    obj.age = age.value;
    obj.hobby = hobby.value;
    arr.push(obj);
    console.dir(arr);
    localStorage.myData = JSON.stringify(arr);
    window.location.href='list.html';
  }else {
    alert('请输入姓名');
  }
});
