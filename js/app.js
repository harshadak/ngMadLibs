angular.module('myApp', [])
    .constant('VERSION', 1.1)
    .run(function (VERSION, $rootScope) {
        $rootScope.version = VERSION;
    })
    .controller('myCtrl', ['$scope', function ($scope) {
        $scope.data = {};
        $scope.$watch('data.gender', function (genderOf) {
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
        $scope.hideForm = false;
        $scope.submit = function () {
            $scope.hideForm = true;
        }
        $scope.reset = function () {
            $scope.data = {};
            $scope.hideForm = false;
            $scope.submitted = false;
        }
    }])
