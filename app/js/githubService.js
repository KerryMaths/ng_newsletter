(function() {

    // created a service to pull data from github api
    function githubService($http) {
        var doRequest = function(username, path) {
            return $http({
                method: 'JSONP',
                url: 'https://api.github.com/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
            });
        }
        return {
            events: function(username) {
                return doRequest(username, 'events');
            },
        };
    }

    angular
        .module('myApp.services', [])
        .factory('githubService', ['$http', githubService])


})();