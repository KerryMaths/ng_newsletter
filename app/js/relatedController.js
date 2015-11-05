(function() {
 
    function RelatedController ($scope, PlayerService) {

    	$scope.player = PlayerService;

        $scope.$watch('player.current', function(newVal) {

        if (newVal) {
          $scope.related = [];
          angular.forEach(newVal.relatedLink, function(link) {
            $scope.related.push({link: link.link[0].$text, caption: link.caption.$text});
          });
        }

        });

    };

    angular
        .module('myApp')
        .controller('RelatedController', [ '$scope', 'PlayerService', RelatedController ])

})();