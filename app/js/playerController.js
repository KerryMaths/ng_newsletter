(function() {

    'use strict';
 
    function PlayerController ($scope, nprService, player) {
    	
    	$scope.player = player;
        nprService.programs(apiKey)
            .success(function(data, status) {
                    $scope.programs = data.list.story;
    	})
    }

    angular
        .module('myApp')
        .controller('PlayerController', [ '$scope', 'nprService', 'player', PlayerController] )

})();