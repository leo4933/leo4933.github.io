var num = 0;
var numF = -2;
var numZ = 3;
var str = "";
var str1 = "小明";
var a = document.querySelector('a');
if (num) {
  console.log('num为0');
}

if (numF) {
  console.log('numF为-2');
}

if (numZ) {
  console.log('numZ为3');
}

if (str) {
  console.log('str为空');
}

if (str1) {
  console.log('str1为小明');
}

if (a) {
  console.log('a为undefined');
}

function keyupHandle(e){
  console.log(e);
  console.log(e.key);
  console.log(e.keyCode);
}
