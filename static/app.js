var app = angular.module("apiApp" , ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when("/customers" , {
      templateUrl: "assets/templates/table_customer.html",
      controller: "mainController"
    });
});
