(function() {

 
    function PlayerController ($scope, nprService, PlayerService) {

    	apiKey = 'MDExODQ2OTg4MDEzNzQ5OTM4Nzg5MzFiZA001';
    	
    	$scope.player = PlayerService;
        nprService.programs(apiKey)
            .success(function(data, status) {
                    $scope.programs = data.list.story;
    	})
    }

    angular
        .module('myApp')
        .controller('PlayerController', [ '$scope', 'nprService', 'PlayerService', PlayerController] )

})();