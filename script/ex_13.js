window.onload = function() {
    var Module = function() { 
        var self = {};
        self.div =  document.getElementsByTagName("div")[2];
        self.img = null;
        self.temps = null;
        function init ()
        {
            if (localStorage.getItem("Pangolin") !== null) {
                self.img = document.createElement("img");
                self.img.src = localStorage.getItem("Pangolin");
                self.div.appendChild(self.img);
                self.temps;
                self.width = window.getComputedStyle(self.div.firstElementChild, null).getPropertyValue("width");
                self.height = window.getComputedStyle(self.div.firstElementChild, null).getPropertyValue("height");
                self.wtmp = self.width;
                self.htmp = self.height;
                self.listenEvent();
            }
        }

        self.getSizePx = function(whtmp, wh, sign)
        {
            if (sign)
                return (parseFloat(whtmp.substr(0, wh.length - 2)) - parseFloat(((wh.substr(0, wh.length - 2)) / 100))) + "px";
            else
                return (parseFloat(whtmp.substr(0, wh.length - 2)) + parseFloat(((wh.substr(0, wh.length - 2)) / 100))) + "px";
        }

        self.enter= function() {

            if (self.width.substr(0, self.width.length - 2) > 0) {
                self.wtmp = self.getSizePx(self.wtmp, self.width,1);
                self.htmp = self.getSizePx(self.htmp, self.height, 1);
                self.div.firstElementChild.style.width =  self.wtmp;
                self.div.firstElementChild.style.height = self.htmp;
            }
            else
                clearInterval(self.temps);
        }

        self.leave = function() {
            if (self.htmp.substr(0, self.htmp.length - 2) < self.height.substr(0, self.height.length - 2)) {
                self.wtmp = self.getSizePx(self.wtmp, self.width, 0);
                self.htmp = self.getSizePx(self.htmp, self.height, 0);
                self.div.firstElementChild.style.width =  self.wtmp;
                self.div.firstElementChild.style.height = self.htmp;
            }
            else
                clearInterval(self.temps);
        }

        self.listenEvent = function()
        {
            if (self.div.firstElementChild)
            {
                self.div.firstElementChild.onmouseenter = () => {
                    clearInterval(self.temps);
                    self.temps = setInterval(() =>{
                        self.enter();
                    }
                        , 1000);

                }
                self.div.firstElementChild.onmouseleave = () => {
                        clearInterval(self.temps);
                        self.temps = setInterval(() => {
                            self.leave();
                        }, 1000);
                }
                self.div.firstElementChild.onclick = () => {
                        clearInterval(self.temps);
                        localStorage.removeItem("Pangolin");
                        self.div.innerHTML = "";
            }}
        }
        return {
            init: init,
        }
    }

    var instance = new Module();
    instance.init();
}; 

