(function() {

    'use strict';
    
    function player(audio, $rootScope) {

        var player = {

            current: null,
            progress: 0,
            playing: false,
            ready: false,

            play: function(program) {
                if (player.playing){
                    player.stop();
                  }

                var url = program.audio[0].format.mp4.$text;
                player.current = program;
                audio.src = url;
                audio.play();
                player.playing = true;
            },
            stop: function() {
                if (player.playing) {
                    audio.pause();
                    player.playing = false;
                    player.current = null;
                }
            },

            //restart function
            restart: function(program) {
                if (player.playing){
                    audio.pause();
                  }

                player.current = program;
                audio.play();
                player.playing = true;
            },

            currentTime: function() {
                return audio.currentTime;
            },
            currentDuration: function() {
                return audio.duration;
            }
        };
        audio.addEventListener('canplay', function() {
            $rootScope.$apply(function() {
                player.ready = true;
            });
        });
        audio.addEventListener('timeupdate', function() {
            $rootScope.$apply(function() {
                player.progress = player.currentTime();
                player.progress_percent = player.progress / player.currentDuration();
            });
        });
        audio.addEventListener('ended', function() {
            $rootScope.$apply(player.stop());
        });
        return player;


    }

    angular
        .module('myApp')
        .factory('player', ['audio', '$rootScope', player]);

})();