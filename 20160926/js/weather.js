function doSearch(){
  var cn = document.querySelector('input').value;
  $.ajax({
    url:'http://apis.baidu.com/apistore/weatherservice/cityinfo',
    data:{cityname:cn},
    method:'get',
    headers:{
      apikey:'d37aeab7a94e922c87c04321edfe811a'
    },
    dataType:'json',
    success:function(res){
      if (res.errNum === -1) {
        alert(res.retMsg);
        return;
      }
      var cityCode = res.retData['cityCode'];
      $.ajax({
        url:'http://apis.baidu.com/apistore/weatherservice/recentweathers',
        data:{cityid:cityCode},
        method:'get',
        headers:{
          apikey:'d37aeab7a94e922c87c04321edfe811a'
        },
        dataType:'json',
        success:function(res){
          var dataArr =[];
          var today = res.retData['today'];
          var forecast = res.retData['forecast'];
          var history = res.retData['history'];
          dataArr.push(today);
          dataArr = dataArr.concat(forecast);
          dataArr = dataArr.concat(history);

          document.querySelector('tbody').innerHTML = template('tbody',{
            list:dataArr
          });
        },
        error:function(ref){
          console.log(ref);
        }
      });
    },
    error:function(ref){
      console.log(ref);
    }
  });
}
