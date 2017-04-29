var app = angular.module('KitchAApp',['ui.router']);
        //app config
        app.config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                        .state('/home',{
                            url: '/home',
                            templateUrl: '../views/homePage/home.html',
                            controller: 'indexCtrl'
                        })
                        
                        .state('/about', {
                            url:'/about',
                            templateUrl:'../views/aboutPage/about.html',
                            controller:'indexCtrl'
                        })
                        .state('/recipe',{
                            url:'/recipe',
                            templateUrl:'../views/recipe/recipe.html',
                            controller:'indexCtrl'
                        });
                        
            
        });
       