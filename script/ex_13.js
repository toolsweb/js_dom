window.onload = function() {
	var div = document.getElementsByTagName("div")[2];
	if (localStorage.getItem("Pangolin") !== null) {
        var img = document.createElement("img");
        img.src = localStorage.getItem("Pangolin");
        div.appendChild(img);
        var temps;
        var width = window.getComputedStyle(div.firstElementChild, null).getPropertyValue("width");
        var height = window.getComputedStyle(div.firstElementChild, null).getPropertyValue("height");
        console.log(height);
        var wtmp = width;
        var htmp = height;

    
        var i = 0;
        if (div.firstElementChild !== null) {
            function enter() {
                    if (width.substr(0, width.length - 2) > 0) {
                        wtmp = (parseFloat(wtmp.substr(0, width.length-2))-parseFloat(((width.substr(0, width.length - 2) * 1) / 100))) + "px";
                        htmp = (parseFloat(htmp.substr(0, height.length-2))-parseFloat(((height.substr(0, height.length - 2) * 1) / 100))) + "px";
                        div.firstElementChild.style.width =  wtmp;
                        div.firstElementChild.style.height = htmp;
                    }
                    else {
                        clearInterval(temps);
                    }
            }

            function leave() {
                if (htmp.substr(0, htmp.length - 2) < height.substr(0, height.length - 2)) {
                        wtmp = (parseFloat(wtmp.substr(0, width.length-2))+parseFloat(((width.substr(0, width.length - 2) * 1) / 100))) + "px";
                        htmp = (parseFloat(htmp.substr(0, height.length-2))+parseFloat(((height.substr(0, height.length - 2) * 1) / 100))) + "px";
                        div.firstElementChild.style.width = wtmp;
                        div.firstElementChild.style.height = htmp;
                    }
                else {
                    clearInterval(temps);
                }
            }
            div.firstElementChild.onmouseenter = function(){
                    clearInterval(temps);
                    temps = setInterval(enter, 1000);
            }
            div.firstElementChild.onmouseleave = function(){
                    clearInterval(temps);
                    temps = setInterval(leave, 1000);
            }
            div.firstElementChild.onclick = function click(){
                    clearInterval(temps);
                    localStorage.removeItem("Pangolin");
                    div.innerHTML = "";
            }
        }
    }
}

