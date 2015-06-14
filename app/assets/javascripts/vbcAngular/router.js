app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('myCards', {
        url: '/my-cards',
        templateUrl: '/user/_myCards.html',
        controller: 'MyCardsCtrl'
      });

    $urlRouterProvider.when('', '/');
  }
]);

