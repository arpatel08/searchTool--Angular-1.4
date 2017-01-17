/**
 * Created by Arpita on 11/21/2016.
 */


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("MOCK_DATA.JSON").then(function (response) {
        $scope.result = response.data;
        console.log($scope.result[1].name);
    });

    $scope.mySearch = function(searchValue) {
        angular.forEach($scope.result, function (value,key) {
            if(key === searchValue) {
                $scope.result.push({name: key, email: value[0].email, city: value[0].city
                });
            }
        });
    }

    $scope.getColor = function (genderColor) {
        switch(genderColor){
            case 'F': return 'red';
            case 'M': return 'blue';
            default: return 'black';
        }

    };
});