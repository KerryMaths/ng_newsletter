(function() {
    
    apiKey = 'MDExODQ2OTg4MDEzNzQ5OTM4Nzg5MzFiZA001';
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

    'use strict';
    
    function nprService($http) {
     
        var doRequest = function() {

            return $http({
                method: 'JSONP',
                url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
            });
        };

        return {
            programs: function() {
                return doRequest(apiKey);
            }
        };
    }

    angular
        .module('myApp')
        .factory('nprService', ['$http', nprService]);

})();