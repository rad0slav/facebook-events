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
            access_token: ''
        })
        .$promise.then(function(events){
            $scope.events = events.events;
        });

    $scope.truncateDescription = function(description){
        if (description.length > 200)
            return description.substring(0, 200) + '...';
        else
            return description;
    }
}]);
