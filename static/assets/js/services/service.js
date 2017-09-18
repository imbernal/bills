app.factory("customerProvidder" , ["$http" , function($http){


  function getCustomers(){
    return $http.get("/customers");
  }

  function createCustomer($params){
    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "/createCustomer",
      data: $params,
      cache: true,
      method: "POST"
    })
    .success(function(res){
        console.log(res);
    });
  }
  //
  function deleteCustomer(id){

    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "/deleteCustomer",
      cache:true,
      data: id,
      method: "DELETE"
    }).success(function(res){
      console.log(res);
    });

  }

  return { getCustomers , createCustomer , deleteCustomer }

}]);
