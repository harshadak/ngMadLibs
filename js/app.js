angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function ($scope) {
        $scope.$watch('gender', function (genderOf) {
            if (genderOf == 'male') {
                $scope.nominativePronoun = 'he';
                $scope.possessivePronoun = 'his';
                $scope.objectivePronoun = 'him';
            } else {
                $scope.nominativePronoun = 'she';
                $scope.possessivePronoun = 'her';
                $scope.objectivePronoun = 'her';
            }
        });
    }])
