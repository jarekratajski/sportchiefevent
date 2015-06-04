var eventsdemo = angular.module('eventsdemo',[]);


eventsdemo.controller( 'events',['$scope','$http', function($scope,$http) {
        $scope.events = {};
        $http.get("../serveranswers/events.json").success( function(data){
            $scope.events = data;
        });
}]);