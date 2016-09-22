function clickHandle(){
  // 通过设置event.preventDefault()来禁用a标签的默认页面跳转行为
  // 常见使用场景
  // 1.禁用a标签的默认跳转
  // 2.禁用表单的默认提交行为 如表单的客户端验证失败的时候禁止跳转
  event.preventDefault();
  console.log(event);
  alert('click');
}

function doSubmit(){
  var userName = document.querySelector('input[name = "name"]').value.trim();
  console.log(userName);
  if (userName === "") {
    alert('用户名为空');
    event.preventDefault();
    return;
  }

  var psw = document.querySelector('input[name = "psw"]').value.trim();
  var confirmPsw = document.querySelector('input[name = "confirmPsw"]').value.trim();
  if (psw === "") {
    alert('密码不能为空');
    event.preventDefault();
    return;
  }
  if (psw!=confirmPsw) {
    alert('两次密码不一致');
    event.preventDefault();
    return;
  }

  /**
   * js源生语法标签选择方法
   * doucment.getElementById('id'); //根据id查找标签 获取单个标签
   * document.getElementByTagName('input'); //根据标签名字获取所有标签
   * document.getElementByClassName('btn'); //根据class属性值获取标签
   * document.getElementByName('name'); //根据name属性获取所有标签
   * //类似选择器
   * document.querySelector('.btn');//获取单个标签
   * document.querySelectorAll('.btn');//获取所有标签
   */

}

var zhuanye = document.querySelector('.zhuanye');
var ban = document.querySelector('#banji');
function zyChange(){
  var banjis = [];
  banjis = document.querySelectorAll('.banji');
  banjis = Array.prototype.slice.call(banjis);
  banjis.forEach(function(banji){
    if (banji.value.indexOf(zhuanye.value) >-1) {
      ban.value = banji.value;
    }else {
      banji.style.display = 'none';
    }
  });
  // for (var i = 0; i < banjis.length; i++) {
  //   var banji = banjis[i];
  //   if (banji.value.indexOf(zhuanye.value) >-1) {
  //     ban.value = banji.value;
  //   }else {
  //     banjis[i].style.display = 'none';
  //   }
  //
  // }


}
