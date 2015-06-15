app.controller('NewCardCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location){
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
    $http.post('/api/cards.json', {card_fields: $scope.userData, authenticity_token: token, user_id: userId} ).success(function(){
      $location.path('/my-cards');
    }).error(function(){
      console.log("please contact support")
    });
  }



}]);