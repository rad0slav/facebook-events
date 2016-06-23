module.controller('EventsController', ['$scope', '$http', '$resource', function($scope, $http, $resource){

//http://localhost:3000/events?lat=40.710803&lng=-73.964040&distance=1000&sort=venue&access_token=YOUR_APP_ACCESS_TOKEN
//http://localhost:3000/events?lat=40.710803&lng=-73.964040&distance=1000&sort=venue&access_token=1009698882417660%7CyKAzMQdcUUvH7h9vflg6hCxDEEg
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
            access_token: '1009698882417660|yKAzMQdcUUvH7h9vflg6hCxDEEg'
        })
        .$promise.then(function(events){
            console.log(events.events);
            $scope.events = events.events;
        })
}]);