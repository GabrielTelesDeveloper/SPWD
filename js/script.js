window.addEventListener('DOMContentLoaded', function(e) {
	document.querySelector('.nav.hamburguer')
	.addEventListener('click', function(e){
		document.querySelector('.nav.menu').classList.toggle('aberto');
	},false);
},false);