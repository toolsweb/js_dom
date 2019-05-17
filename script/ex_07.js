/*jslint browser:true*/
window.onload = function () {
    "use strict";
    var canvas = document.body.children[0].children[0].children[2].children[0].children[0];
    var context = canvas.getContext("2d");
    var pause = document.body.children[0].children[0].children[2].children[1].children[0];
    var stop = document.body.children[0].children[0].children[2].children[1].children[1];
    var mute = document.body.children[0].children[0].children[2].children[1].children[2];
    var bloc = new window.Audio("https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg");
    var i = 1;

    function drawTriangle(ctx)
    {
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(6, 6);
        ctx.lineTo(14, 10);
        ctx.lineTo(6, 14);
        ctx.closePath();
        ctx.stroke();
    }

    drawTriangle(context);
    
    canvas.addEventListener("click", function () {
        bloc.play();
    });
    pause.addEventListener("click", function () {
        bloc.pause();
    });
    stop.addEventListener("click", function () {
        bloc.pause();
        bloc.currentTime = 0;
    });
    mute.addEventListener("click", function () {
        if (i % 2 !== 0) {
            bloc.volume = 0;
        } else if (i % 2 === 0) {
            bloc.volume = 1;
        }
        i += 1;
    });
};