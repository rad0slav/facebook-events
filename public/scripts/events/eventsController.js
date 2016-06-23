module.controller('EventsController', ['$scope', '$http', '$resource', function($scope, $http, $resource){

   var Events = $resource('/events?lat=:lat&lng=:lng&distance=:distance&sort=:sort&access_token=:access_token', 
        {
            lat: '@lat',
            lng: '@lng',
            distance: '@distace',
            sort: '@sort',
            access_token: '@access_token'
        }
    );

    Events.get({
            lat: '44.426625',
            lng: '26.102170',
            distance: '1000',
            sort: 'venue',
            access_token: 'fff'
        })
        .$promise.then(function(events){
            console.log(events.events);
            $scope.events = events.events;
        })
}]);
