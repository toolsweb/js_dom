window.onload = function () {
    var div = document.getElementsByTagName("div")[2];
    var img = new Image();
    img.src = "script/little.png";

    function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/jpeg");
        return dataURL;
    }
    img.addEventListener("load", function(){
        if (localStorage.getItem("Pangolin") === null) {
            localStorage.setItem("Pangolin",
            getBase64Image(img));
        }
        if (localStorage.getItem("Pangolin") !== null) {   
            var image = new Image();
            div.appendChild(image);
            image.src = localStorage.getItem("Pangolin");
        }
    });
};