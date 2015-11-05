(function() {

 	'use strict';

    function audio($document) {
        var audio = $document[0].createElement('audio');
        return audio;
    };

    angular
        .module('myApp')
        .factory('audio', ['$document', audio])

})();