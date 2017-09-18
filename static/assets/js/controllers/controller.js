app.controller("mainController" , ["$scope" ,"$location", "$route" ,"customerProvidder" , function($scope,$location,$route ,customerProvidder){

  $scope.table_name = "Customers";

  customerProvidder.getCustomers().then(res=>{

    $scope.customers = res.data;


  });

  $scope.showModalforNew = function($event){
      $event.preventDefault();

    $(".modalStock").modal();
  };

  // $scope.editStock = function(stock , $event){
  //   $event.preventDefault();
  //   $scope.dat = "ASAS";
  //   $(".modalEditStock").modal();
  // };

  $scope.deleteCustomer = function(id , $event){
    $event.preventDefault();

    $params = $.param({
      "id" : id
    });

    customerProvidder.deleteCustomer(id).then(res=>{
      $route.reload();
    });

  };

  $scope.addCustomer = function(customer){



    $params = $.param({
        "name": customer.name,
        "phone": customer.phone,
        "reference": customer.reference,
        "pantaiId" : customer.pantaiId,
        "material" : customer.material
    });

    customerProvidder.createCustomer($params).then(res=>{
      console.log(res);
      $route.reload();
    });
  }
}]);