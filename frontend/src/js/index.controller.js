var app = angular.module('ccdhApp',['ui.router']);
        //app config
        app.config(function($stateProvider, $urlRouterProvider){
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
                        .state('/eligibility', {
                            url:'/eligibility',
                            templateUrl:'../views/Eligibility/eligibility.html',
                            controller:'indexCtrl'
                        })
                        
                        
            
        });
        app.controller('indexCtrl', function($scope){

        })
       