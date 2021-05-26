var img_hamburger_btn = document.getElementById('hamburuger-btn-simbolo');
var Painel_Lateral = document.getElementById('painel-lateral');

window.onscroll = function(){
	mudarImg_Hamburguer_btn()
};

function mudarImg_Hamburguer_btn(){
	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		img_hamburger_btn.src = "./img/menu-button.svg";
	}else{
		img_hamburger_btn.src = "./img/menu-button-branco.svg";
	}
}

/*---------- Mostrar Painel Lateral: ----------*/

function abrirPainel(){
	Painel_Lateral.style.width = "265px";
	Painel_Lateral.style.boxShadow = "rgb(39, 39, 39) 40px 0px 35px 20px"; 
}

function fechar_painel(){
	Painel_Lateral.style.width = "0";
	Painel_Lateral.style.boxShadow = "none";
}