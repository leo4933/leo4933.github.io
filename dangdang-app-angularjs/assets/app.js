var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'./assets/tpl/main.html',
      controller:''
    })
    .when('/my',{
      templateUrl:'./assets/tpl/blog.html',
      controller:''
    })
    .when('/hot',{
      templateUrl:'./assets/tpl/book.html',
      controller:'bookController'
    })
    .when('/link',{
      templateUrl:'./assets/tpl/link.html',
      controller:''
    });
}]);
