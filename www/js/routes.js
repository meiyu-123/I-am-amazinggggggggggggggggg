angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.weighYourBag', {
    url: '/bag',
    views: {
      'tab3': {
        templateUrl: 'templates/weighYourBag.html',
        controller: 'weighYourBagCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.history', {
    url: '/history',
    views: {
      'tab4': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('tabsController.about', {
    url: '/Meiyu',
    views: {
      'tab5': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/home')

  

});