(function() {

    function nprLink() {
        return {
            restrict: 'EA',
            require: ['^ngModel'],
            replace: true,
            scope: {
                ngModel: '=',
                play: '&'
            },
            templateUrl: '/views/nprListItem.html',
            link: function(scope, ele, attr) {
                scope.duration = scope.ngModel.audio[0].duration.$text;
            }
        }
    };

    angular
        .module("myApp")
        .directive('nprLink', nprLink)

})();