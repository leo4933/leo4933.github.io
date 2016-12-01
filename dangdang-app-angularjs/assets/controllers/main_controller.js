app.controller('mainController',['$scope',function($scope){
  // c_s.getData('ertong',function(res){
  //   console.dir(res);
  // });
  var arr = window.location.href.split('/');
  var lastStr = arr[arr.length-1];
  console.log(lastStr);

  switch (lastStr) {
    case 'hot':$scope.selectedIndex = 2;
      break ;
    case 'video':$scope.selectedIndex = 1;
      break ;
    default: $scope.selectedIndex = 0;
      break;
  }
    // $scope.selectedIndex = 0;
    $scope.linkTo = function(index){
    $scope.selectedIndex = index;
    console.log(index);
    };
}]);
