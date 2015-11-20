var app = angular.module('alliApp', ['ui.router', 'ngTouch']);

// app.run(['$rootScope', '$state', '$location', '$window', function ($rootScope, $state, $location, $window) {
//     $rootScope.$state = $state;
//     $rootScope.$on('$viewContentLoaded',function(){
//         document.body.scrollTop = document.documentElement.scrollTop = 0;
//     });
// }]);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", '$provide', function($stateProvider, $urlRouterProvider, $locationProvider, $provide) {
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      data: {
        pageTitle: 'Allison Yee'
      }
    })
    .state('about', {
      url: '/about',
      templateUrl: '/views/about.html',
      data: {
        pageTitle: 'Allison Yee | About'
      }
    })
    .state('work', {
      absract: true,
      url: '/work',
      templateUrl: '/views/work.html',
      controller: ['$scope', '$state', 'work', 'utils', function (  $scope,   $state,   contacts,   utils) {  
        $scope.work = work;
      }]
    })
    .state('workDetail', {
      url: '/work/{name}',
      controller: function($scope, $stateParams) {
        $scope.name = $stateParams.name;  
      },
      templateUrl:
        function (stateParams) {
           return '/views/work/' + stateParams.name + '.html';
        }
    })
    .state('blog', {
      url: '/blog',
      templateUrl: '/views/blog.html',
      data: {
        pageTitle: 'Allison Yee | Blog'
      }
    });
}]);

app.run(function($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function() {
     document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});

// app.controller('MainCtrl', function($scope, $location, $anchorScroll, $routeParams) {
// });

// app.controller('TestCtrl', function($scope) {
// });


// app.controller('WeeeCtrl', function($scope, $location, $anchorScroll, $routeParams) {
// });