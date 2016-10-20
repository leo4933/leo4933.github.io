app.controller('mainController',['$scope',function($scope){
  // c_s.getData('ertong',function(res){
  //   console.dir(res);
  // });

  $scope.selectedIndex = 0;
  $scope.linkTo = function(index){
    $scope.selectedIndex = index;
    console.log(index);
  };
}]);
