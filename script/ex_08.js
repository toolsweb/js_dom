window.onload = function () {
    let colorsNb = {
        orange: 0,
        purple: 0,
        black: 0,
        olive: 0,
    }
    let canvasArray = document.querySelectorAll("canvas");
    function getNbColors(colorsNb, canvasArray)
    {
        for (var x = 0; x < canvasArray.length; x ++){
            switch (getComputedStyle(canvasArray[x]).backgroundColor){
                case "rgb(0, 0, 0)" : 
                    colorsNb.black++;
                    break;
    
                case "rgb(255, 165, 0)" : 
                    colorsNb.orange++;
                    break;
    
                case "rgb(128, 128, 0)" :
                    colorsNb.olive++;
                    break;
    
                case "rgb(128, 0, 128)" : 
                    colorsNb.purple++;
                    break;
            }
        }
        return colorsNb;
    }
    function setColorsByNb(colorsNb, canvasArray)
    {
        for(var y = 0; y < colorsNb.orange; y++){
            canvasArray[y].style.backgroundColor = "rgb(255, 165, 0)";
        }
    
        for(y = 0; y < colorsNb.purple; y++){
            canvasArray[y + colorsNb.orange].style.backgroundColor = "rgb(128, 0, 128)";
        }
    
        for(y = 0; y < colorsNb.black; y++){
            canvasArray[y + colorsNb.orange + colorsNb.purple].style.backgroundColor = "rgb(0, 0, 0)";
        }
    
        for(y = 0; y < colorsNb.olive; y++){
            canvasArray[y + colorsNb.orange + colorsNb.purple + colorsNb.black].style.backgroundColor = "rgb(128, 128, 0)";
        }
    
    }
    colorsNb = getNbColors(colorsNb, canvasArray);
    setColorsByNb(colorsNb, canvasArray);
}