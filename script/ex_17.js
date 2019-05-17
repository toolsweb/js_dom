
window.onload = function () {
	var div = document.querySelectorAll(".ex_17>div")[2];
	var top = window.getComputedStyle(div, null).getPropertyValue("top");
	top = parseInt(top.slice(0, top.length-2));
	var Fa;
	var Fp;
	var volume = 10000;
	var masse = 1000;
	var masse_volumique;
	var masse_volumique_eau = 1;
	var gravite = 9.81;
	var vitess;
	var i = 0.00001;
	var r = 1;

	div.addEventListener("click" ,function (){
		masse += 1000;
		masse_volumique = masse / volume;
		Fp = masse_volumique * volume * gravite;
		Fa = masse_volumique_eau * volume * gravite;
		vitess = Fp - Fa;
		r++;
		div.innerHTML = r;
		setInterval(movement, 100);
	});
	
	function movement() {
		if (vitess > 0 && top < 1150) {
			top = top + (i * vitess);
			div.style.top = top + "px";
		}
	};
};
	