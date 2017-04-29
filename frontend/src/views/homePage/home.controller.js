angular.module('KitchAApp')
.controller('indexCtrl',function($scope){
                    $scope.homePosts = [
                        {
                            foodImage:'../assets/img/dish1.jpg',
                            foodName: 'Garnished Shrimp',
                            foodCalories: '90',
                            foodPoster:'@Rui',
                            foodId:001
                        },
                        {
                            foodImage:'../assets/img/dish2.jpg',
                            foodName: 'Mixed Fruit Disco',
                            foodCalories: '110',
                            foodPoster:'@Abigail',
                            foodId:002
                        },
                        {
                            foodImage:'../assets/img/dish3.jpeg',
                            foodName: 'Fish Soup',
                            foodCalories: '190',
                            foodPoster:'@Mr.Tom',
                            foodId:003
                        },
                        {
                            foodImage:'../assets/img/dish4.jpg',
                            foodName: 'Eba and Banga Soup',
                            foodCalories: '290',
                            foodPoster:'@Rachi',
                            foodId:004
                        },
                        {
                            foodImage:'../assets/img/dish1.jpg',
                            foodName: 'Garnished Shrimp',
                            foodCalories: '90',
                            foodPoster:'@Emma',
                            foodId:005
                        }

                                        ]       
                //google maps
            $scope.initMap =function() {
                var uluru = {lat: 45, lng: 75};
                var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: uluru
                });
                var marker = new google.maps.Marker({
                position: uluru,
                map: map
                });
            }
            
                })//controller ends