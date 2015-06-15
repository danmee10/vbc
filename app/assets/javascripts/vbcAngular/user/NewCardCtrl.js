app.controller('NewCardCtrl', ['$scope', '$http', function ($scope, $http){
  'use strict';

  var url = '/api/linkedin/' + userId + '.json'
  console.log("url -0-> ", url)
  $http.get(url).success(function(data){
    console.log("data --> ", data);
    $scope.userData = data;
  }).error(function(msg){
    console.log("message --> ", msg)
  });

  $scope.createCard = function() {
    console.log("creatingCard");
  }

 // {Name, +
  // Description +
  // , Company +
  // , Title +
  // , Skills +
  // , Location +
  // , Image +
  // , etc}


}]);