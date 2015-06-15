app.controller('NewCardCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location){
  'use strict';

  var url = '/api/linkedin/' + userId + '.json'
  $http.get(url).success(function(data){
    var pDefaults = {
      'position': {
        'values': [
          {
            'company': null,
            'title': null,
            'summary': null
          }
        ]
      }
    }
    var lDefaults = {
      'location': {
        'country': {
          'code': null
        }
      },
      'name': null
    }
    var lcDefaults = {
      'location': {
        'country': {
          'code': null
        }
      }
    }
    var lnDefaults = {
      'location': {
        'name': null
      }
    }
    $scope.userData = data;


    if (_.isUndefined($scope.userData.position)) {
      _.merge($scope.userData, pDefaults);
    }
    if (_.isUndefined($scope.userData.location)) {
      _.merge($scope.userData, lDefaults);
    } else if (_.isUndefined($scope.userData.location.name)) {
      _.merge($scope.userData, lnDefaults);
    } else if (_.isUndefined($scope.userData.location.country)) {
      _.merge($scope.userData, lcDefaults);
    }
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