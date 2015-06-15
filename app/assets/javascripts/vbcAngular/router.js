app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('myCards', {
        url: '/my-cards',
        templateUrl: '/user/_myCards.html',
        controller: 'MyCardsCtrl'
      })
      .state('newCard', {
        url: '/new-card',
        templateUrl: '/user/_newCard.html',
        controller: 'NewCardCtrl'
      });

    $urlRouterProvider.when('', '/');
  }
]);

