app.controller('MyCardsCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location){
  'use strict';

  $http.get('/api/cards.json', {params:{'user_id': userId}}).success(function(data){
    if (data.length === 0) {
      $location.path('/new-card');
    } else {
      $scope.cards = data;
    }
  }).error(function(msg){
    console.log("Please contact support.");
  });

}]);