
window.onload = function() {

    var div = document.body.children[0].children[0].children[2];
    var div2 = div.children[1];
    var lorem = div.children[0];
    var canvas = lorem.children[0];
    var cx = 0, cy = 0;
    canvas.draggable = true;
    canvas.style.position = "relative";	
    canvas.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', "");
        postionX = e.pageX;
        postionY = e.pageY;
    });
    lorem.addEventListener('dragover', (e) => {
        e.preventDefault();
        var x = e.screenX;
        var y = e.screenY; 
        div2.innerText = "Nouvelles coordonnées => {x:" + x + ", y:" + y +"}";	 
    });
    lorem.addEventListener('drop', function(e) {		
        e.preventDefault();
        cx += postionX - e.pageX;
        cy += postionY - e.pageY;
        canvas.style.bottom = cy + "px";	
        canvas.style.right = cx+"px";
    });
    lorem.addEventListener('dragend', function(e) {
        e.preventDefault(); 
        var x = e.screenX;
        var y = e.screenY; 
        div2.innerText = "Nouvelles coordonnées => {x:" + x + ", y:"+ y +"}";	 
    });	
}