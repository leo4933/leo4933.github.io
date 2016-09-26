function doSearch(){
  getResult(document.querySelector('#phone').value);
}

function getResult(phoneNumber){
  $.ajax({
    url:'http://apis.baidu.com/apistore/mobilenumber/mobilenumber',
    data:{phone:phoneNumber},
    method:'get',
    headers:{
      apikey:'d37aeab7a94e922c87c04321edfe811a'
    },
    dataType:'json',
    success:function(res){
      console.log(res);
      var div = document.createElement('div');
      var keys = Object.keys(res.retData);
      keys.forEach(function(item){
        var p = document.createElement('p');
        p.innerHTML = item+":  "+res.retData[item];
        div.appendChild(p);
      });
      document.body.appendChild(div);
    },
    error:function(err){
      console.log(err);
    }
  });
}
