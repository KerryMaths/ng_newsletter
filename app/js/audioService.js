(function() {

    function AudioService($document) {
        var audio = $document[0].createElement('audio');
        return audio;
    };

    angular
        .module('myApp')
        .factory('AudioService', ['$document', AudioService])

})();