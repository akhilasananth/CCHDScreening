angular.module('KitchAApp')
        .controller('indexCtrl', function($scope, $http){
            $scope.foodName = ""
            $scope.getFoodName = function(clickedFoodName){
                $scope.foodName = clickedFoodName
                displayFoodDetails(foodName)
            }
            $scope.displayFoodDetails = function(passedFoodName){
                 $http.get('http://localhost:5000/api/recipe/getRecipe')
                    .then(function onRetrieval(response){
                        $scope.foodImage=''
                        $scope.calories = response.data.calories
                        $scope.poster= "@Titi"
                        $scope.ingredients=response.data.preparation_items
                        $scope.preparationSteps=response.data.preparation_steps
                    },
                    function onError(error){
                        
                        template:<h1>OOops! Something is wrong</h1>
                    })
            }
           
        })