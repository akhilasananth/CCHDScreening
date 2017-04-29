angular.module('ccdhApp',['ui.router', /* 'moment-picker' */]);

angular.module('ccdhApp').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
                .state('/home',{
                    url: '/home',
                    templateUrl: '../views/homePage/home.html',
                    controller: 'indexCtrl'
                })
                .state('/babyInformation',{
                    url:'/babyInformation',
                    templateUrl: '../views/babyInformation/babyInformation.html',
                    controller:'indexCtrl'
                })
                .state('/hospitalInformation', {
                    url:'/hospitalInformation',
                    templateUrl:'../views/hospitalInfo/hospitalInfo.html',
                    controller:'indexCtrl'
                })
                .state('/testRepeatScreen', {
                    url:'/testRepeat',
                    templateUrl:'../views/TestRepeatScreen/testRepeatScreen.html',
                    controller:'indexCtrl'
                })
});
angular
    .module('ccdhApp')
    .controller('indexCtrl', function($scope){ })
       