function getResult(phoneNumber){
  var http = new XMLHttpRequest();//创建一个http的ajax请求
  http.onreadystatechange = function(e){


    //当返回状态为4的时候,数据已经完全获取成功,我们可以在此处理返回结果
    //输出时间每次被触发时http请求的状态
    //每次事件被触发时http请求状态:0未打开,1已连接,2请求接收数据,3
    if (http.readyState === 4) {
      var data = JSON.parse(http.responseText);
      var div = document.createElement('div');

      for (var key in data.retData){
      
        var p = document.createElement('p');
        p.innerHTML = key + data.retData[key];
        div.appendChild(p);
      }
      document.body.appendChild(div);
    }

  };
  //open方法
  //参数一:请求方法get,post,delete,put,patch等,
  //参数二请求地址:'http://apis.baidu.com/apistore/mobilenumber/mobilenumber'
  //参数三是否异步,默认为异步
  http.open('get','http://apis.baidu.com/apistore/mobilenumber/mobilenumber?phone='+phoneNumber);
  http.setRequestHeader('apikey','d37aeab7a94e922c87c04321edfe811a');
  http.send();
  // console.dir(JSON.parse(http.responseText));

}

function doSearch(){
  getResult(document.querySelector('#phone').value);
}
