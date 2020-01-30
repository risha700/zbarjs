// Get the canvas element
var canvas = document.getElementById('canvas');

var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

// Enter fullscreen
function fullscreen(){
    if(canvas.RequestFullScreen){
        canvas.RequestFullScreen();
    }else if(canvas.webkitRequestFullScreen){
        canvas.webkitRequestFullScreen();
    }else if(canvas.mozRequestFullScreen){
        canvas.mozRequestFullScreen();
    }else if(canvas.msRequestFullscreen){
        canvas.msRequestFullscreen();
    }else{
        alert("This browser doesn't supporter fullscreen");
    }
}

// Exit fullscreen
function exitfullscreen(){
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }else{
        alert("Exit fullscreen doesn't work");
    }
}