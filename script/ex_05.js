window.onload = function() {

    var plus = document.getElementsByTagName("button")[0];
    var moins = document.getElementsByTagName("button")[1];
    var color = document.querySelector("select");
    var wrapper = document.querySelector(".wrapper");

    function getFontSize(){
        return parseInt(getComputedStyle(wrapper).fontSize);
    }

    function increaseFontSize(){
        wrapper.style.fontSize = "" + (getFontSize() + 1) + "px"
    }

    function decreaseFontSize(){
        wrapper.style.fontSize = "" + (getFontSize() - 1) + "px"
    }

    plus.addEventListener("click", increaseFontSize);
    moins.addEventListener("click", decreaseFontSize);

    color.addEventListener("change", function(){
        document.body.style.backgroundColor = this.value;
    });
}