window.onload = function() {
    var bloc = document.querySelectorAll(".exercice>footer>div");
    bloc[0].onclick = showPromptModal;

    function showPromptModal() {
        var name = prompt("Quel est votre nom ?");
        name ? showConfirmModal(name) : showPromptModal();
    }

    function showConfirmModal(name) {
        var valid = confirm("Etes vous sûr que " + name + " est votre nom ?");
        valid ? writeResponse(name) : showPromptModal();
    }
    function writeResponse(name) {
        alert("Bonjour " + name + " !");
        bloc[0].innerHTML = "Bonjour " + name + " !";
    } 
};
