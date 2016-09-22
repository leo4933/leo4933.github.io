var provinces = document.querySelectorAll('.province');
var citys = document.querySelectorAll('.city');
var blocks = document.querySelectorAll('.block');
var pro_value = document.querySelector('.provinces');
var city_value = document.querySelector('.citys');
var block_value = document.querySelector('.blocks');

function cityHide(){
  for (var i = 0; i < citys.length; i++) {
    var city = citys[i];
    city.style.display = 'none';
  }
  city_value.value = '请选择';
}
function blockHide(){
  for (var j = 0; j < blocks.length; j++) {
    var block = blocks[j];
    block.style.display = 'none';
  }
  block_value.value = '请选择';
}

cityHide();
blockHide();

function provinceChange(){
  var array1 = [];
  if (pro_value.value != '请选择') {
    for (var i = 0; i < citys.length; i++) {
      var city = citys[i];
      if (city.id === pro_value.value) {
        city.style.display = 'block';
        array1.push(city.value);
      }else {
        city.style.display = 'none';
      }
    }
    city_value.value = array1[0];
    cityChange();
  }else {
    cityHide();
    blockHide();
  }
}

function cityChange(){
  var array2 = [];
  if (city_value.value != '请选择') {
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if (block.id === city_value.value) {
        block.style.display = 'block';
        array2.push(block.value);
      }else {
        block.style.display = 'none';
      }
    }
    block_value.value = array2[0];
  }
  else {
    blockHide();
  }
}
