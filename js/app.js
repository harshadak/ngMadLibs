angular.module('myApp', [])
    .constant('VERSION', 1.1)
    .run(function (VERSION, $rootScope) {
        $rootScope.version = VERSION;
    })
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
