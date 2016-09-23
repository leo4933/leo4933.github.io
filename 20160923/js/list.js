var arr = JSON.parse(localStorage.myData);
var html = template('table',{list:arr});
document.querySelector('#content').innerHTML = html;

var add = document.querySelector('.add');
add.addEventListener('click',function(e){
  window.location.href='add.html';
});

var deleteSelection = document.querySelector('.deleteSelection');
var changeSelection = document.querySelector('.changeSelection');
var str1 = '<option value="请选择">请选择</option>';
for (var i = 0; i < arr.length; i++){
  var num = i+1;
  tempStr = '<option value="'+num+'">'+num+'</option>';
  str1 += tempStr;
}
deleteSelection.innerHTML = str1;
changeSelection.innerHTML = str1;

var deletebtn = document.querySelector('.delete');
deletebtn.addEventListener('click',function(e){
  var number = Number(deleteSelection.value);
  if (number>=1) {
    arr.splice(number-1,1);
    var tempArr = [];
    for (var i = 0; i < arr.length; i++) {
      var obj = arr[i];
      obj.id = i+1;
      tempArr.push(obj);
    }
    localStorage.myData = JSON.stringify(tempArr);
    window.location.href= 'list.html';
  }
});

var change = document.querySelector('.change');
change.addEventListener('click',function(e){

    if (changeSelection.value !== '请选择') {
      localStorage.tempData = JSON.stringify(changeSelection.value);
      window.location.href= 'change.html';
    }

});
