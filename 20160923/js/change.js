var arr = JSON.parse(localStorage.myData);
var index = JSON.parse(localStorage.tempData);

var theName = document.querySelector('#theName');
var race = document.querySelector('#race');
var age = document.querySelector('#age');
var hobby = document.querySelector('#hobby');

var obj = arr[index-1];

theName.value = obj.name;
race.value = obj.race;
age.value = obj.age;
hobby.value = obj.hobby;

var btn = document.querySelector('button');
btn.addEventListener('click',function(e){
  if (theName.value.trim() !== '') {
    obj.name = theName.value;
    obj.race = race.value;
    obj.age = age.value;
    obj.hobby = hobby.value;
    arr.splice(index-1,1,obj)
    localStorage.myData = JSON.stringify(arr);
    window.location.href='list.html';
  }else {
    alert('请输入姓名');
  }
});
