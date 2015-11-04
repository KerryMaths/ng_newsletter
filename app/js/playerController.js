(function() {

 
    function PlayerController ($scope, $http) {

   //$http Request
    var apiKey = "MDIwNjQzNzEzMDE0NDM1NDMxNjgyMzUxYg001";
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

        $http({
            method: 'JSONP',
            url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
        }).success(function(data, status) {
            // Now we have a list of the stories (data.list.story)
            // in the data object that the NPR API 
            // returns in JSON that looks like:
            // data: { "list": {
            //   "title": ...
            //   "story": [
            //     { "id": ...
            //       "title": ...
            $scope.programs = data.list.story;
        }).error(function(data, status) {
            // Some error occurred
        });

        $scope.playing = false;
        $scope.audio = document.createElement('audio');
        $scope.audio.src = "media/01%20Money%20On%20My%20Mind.m4a";
        //play function
        // format.mp4.$text is the route to the mp4 file from the NPR api
        $scope.play = function(program) {
            if ($scope.playing) $scope.audio.pause();
            var url = program.audio[0].format.mp4.$text;
            $scope.audio.src = url;
            $scope.audio.play();
            $scope.playing = true;
            $scope.audio.name = program.title.$text
        };
        //stop function
        $scope.stop = function() {
            $scope.audio.pause();
            $scope.playing = false;
        };
        //restart function
        $scope.restart = function() {
            $scope.audio.pause();
            $scope.audio.currentTime = 0;
            $scope.audio.play();
            $scope.playing = true;
        };
        //song ended function
        $scope.audio.addEventListener('ended', function() {
            $scope.$apply(function() {
                $scope.stop()
            });
        });

    };

    angular
        .module('myApp')
        .controller('PlayerController', PlayerController)

})();