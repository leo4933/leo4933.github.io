//创建一个共用的数据调用服务

app.factory('commonService',['$http',function ($http) {
  var service ={};
  /**
   * 根据分类信息去数据
   * @param  {[type]} type     [url]
   * @param  {[type]} callBack [回调函数]
   * @return {[type]}          [description]
   */
  service.getData = function(type,callBack){
    $http({
      url:'../../data/book'+type+'.json',
      method:'get'
    })
    .then(function(res){
      console.log('获取数据成功');
      callBack(res);
    },function (err) {
      console.log(err);
    });
  };
}]);
