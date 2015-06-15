app.controller('NewCardCtrl', ['$scope', '$http', '$location', 'dataCleanser', function ($scope, $http, $location, dataCleanser){
  'use strict';

  var url = '/api/linkedin/' + userId + '.json'
  $http.get(url).success(function(data){
    $scope.userData = dataCleanser.clean(data);
  }).error(function(msg){
    console.log("please contact support")
  });

  $scope.createCard = function() {


    $http.post('/api/cards.json', {card_fields: $scope.userData, authenticity_token: token, user_id: userId} ).success(function(){
      $location.path('/my-cards');
    }).error(function(){
      console.log("please contact support")
    });
  }



}]);