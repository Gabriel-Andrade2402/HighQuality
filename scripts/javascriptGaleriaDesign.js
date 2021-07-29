var eventoTexto;

//EVENTOS "CHAMATIVOS"
function CriandoTextoChamativos(){
	var icone=document.getElementById('iconeChamativo');
	var div=document.getElementById('blocoTituloChamativo');
	var span=div.children[0];
	icone.style.opacity="0";
	if(eventoTexto==null){
	eventoTexto=window.setInterval(function(){
		var arrayTexto=span.innerText.split("");
		span.style.fontSize ="20pt";
		span.style.position="relative";
		span.style.left="6%";
		span.style.top="35%";
		if(arrayTexto.length==0){
			span.innerText="C";
		}
		if(arrayTexto.length==1){
			span.innerText+="H";
		}if(arrayTexto.length==2){
			span.innerText+="A";
		}
		if(arrayTexto.length==3){
			span.innerText+="M";
		}
		if(arrayTexto.length==4){
			span.innerText+="A";
		}
		if(arrayTexto.length==5){
			span.innerText+="T";	
		}
		if(arrayTexto.length==6){
			span.innerText+="I";
		}
		if(arrayTexto.length==7){
			span.innerText+="V";
		}
		if(arrayTexto.length==8){
			span.innerText+="O";
		}
		if(arrayTexto.length==9){
			span.innerText+="S";
			cancelandoTexto();
		}
	}, 120);
	}
}

function cancelarChamativos(){
	cancelandoTexto();
	var div=document.getElementById('blocoTituloChamativo');
	var icone=document.getElementById('iconeChamativo');
	var span=div.children[0];
	icone.style.opacity="1";
	span.innerText="";
	span.style.left="30%";
	span.style.marginTop="0%";
}
//-------------FIM EVENTOS "CHAMATIVOS"




//EVENTOS "CARDAPIOS"
function CriandoTextoCardapios(){
	var icone=document.getElementById('iconeCardapio');
	var div=document.getElementById('blocoTituloCardapio');
	var span=div.children[0];
	icone.style.opacity="0";
	if(eventoTexto==null){
	eventoTexto=window.setInterval(function(){
		var arrayTexto=span.innerText.split("");
		span.style.fontSize ="20pt";
		span.style.position="relative";
		span.style.left="9%";
		span.style.top="35%";
		if(arrayTexto.length==0){
			span.innerText="C";
		}
		if(arrayTexto.length==1){
			span.innerText+="A";
		}if(arrayTexto.length==2){
			span.innerText+="R";
		}
		if(arrayTexto.length==3){
			span.innerText+="D";
		}
		if(arrayTexto.length==4){
			span.innerText+="Á";
		}
		if(arrayTexto.length==5){
			span.innerText+="P";
		}
		if(arrayTexto.length==6){
			span.innerText+="I";
		}
		if(arrayTexto.length==7){
			span.innerText+="O";
		}
		if(arrayTexto.length==8){
			span.innerText+="S";
			cancelandoTexto();
		}
	}, 120);
	}
}

function cancelarCardapios(){
	cancelandoTexto();
	var div=document.getElementById('blocoTituloCardapio');
	var icone=document.getElementById('iconeCardapio');
	var span=div.children[0];
	icone.style.opacity="1";
	span.innerText="";
	span.style.left="30%";
	span.style.marginTop="0%";
}
//-------------FIM EVENTOS "CARDAPIOS"

//EVENTOS "INFORMATIVOS"
function CriandoTextoInformativos(){
	var icone=document.getElementById('iconeInformativos');
	var div=document.getElementById('blocoTituloInformativos');
	var span=div.children[0];
	icone.style.opacity="0";
	if(eventoTexto==null){
	eventoTexto=window.setInterval(function(){
		var arrayTexto=span.innerText.split("");
		span.style.fontSize ="17pt";
		span.style.position="relative";
		span.style.left="9%";
		span.style.top="35%";
		if(arrayTexto.length==0){
			span.innerText="I";
		}
		if(arrayTexto.length==1){
			span.innerText+="N";
		}
		if(arrayTexto.length==2){
			span.innerText+="F";
		}if(arrayTexto.length==3){
			span.innerText+="O";
		}
		if(arrayTexto.length==4){
			span.innerText+="R";
		}
		if(arrayTexto.length==5){
			span.innerText+="M";
		}
		if(arrayTexto.length==6){
			span.innerText+="A";
		}
		if(arrayTexto.length==7){
			span.innerText+="T";
		}
		if(arrayTexto.length==8){
			span.innerText+="I";
		}
		if(arrayTexto.length==9){
			span.innerText+="V";
		}
		if(arrayTexto.length==10){
			span.innerText+="O";
		}
		if(arrayTexto.length==11){
			span.innerText+="S";
			cancelandoTexto();
		}
	}, 120);
	}
}

function cancelarInformativos(){
	cancelandoTexto();
	var div=document.getElementById('blocoTituloInformativos');
	var icone=document.getElementById('iconeInformativos');
	var span=div.children[0];
	icone.style.opacity="1";
	span.innerText="";
	span.style.left="30%";
	span.style.marginTop="0%";
}
//-------------FIM EVENTOS "INFORMATIVOS"
//Evento universal
function cancelandoTexto(){
	window.clearInterval(eventoTexto);
	eventoTexto=null;
}
function limparConteudo(icone,div,article,span,fundoRetrair,botaoRetrair){
	setTimeout(function(){
		article.style.width="200px";
		article.style.height="200px";
		icone.style.display="block";
		span.style.display="block";
		article.removeChild(fundoRetrair);
		article.removeChild(botaoRetrair);
	},100);
}
//Eventos de cliques na galeria
function cliqueChamativos(){
	var icone=document.getElementById('iconeChamativo');
	var div=document.getElementById('blocoTituloChamativo');
	var article=document.getElementById('articleChamativos');
	var span=div.children[0];
	if(icone.style.display==="block" || icone.style.display===""){
		//Criação do botao de retração do conteudo
		var botaoRetrair=document.createElement('img');
		var fundoRetrair=document.createElement('div');
		fundoRetrair.style.background="white";
		fundoRetrair.style.position="absolute";
		fundoRetrair.style.width="1000px";
		fundoRetrair.style.height="60px";
		fundoRetrair.style.borderBottomLeftRadius="30px";
		fundoRetrair.style.borderBottomRightRadius="30px";
		fundoRetrair.style.top="550px";
		fundoRetrair.style.opacity="0.5";
		botaoRetrair.style.width="60px";
		botaoRetrair.style.height="60px";
		botaoRetrair.style.position="relative";
		botaoRetrair.style.left="47%";
		botaoRetrair.style.top="88%";
		botaoRetrair.style.opacity="0.5";
		botaoRetrair.src="../imagens/iconeSubir.png";
		fundoRetrair.onmouseover = function(){
			fundoRetrair.style.opacity="0.8";
			botaoRetrair.style.opacity="0.8";
		};
		fundoRetrair.onmouseleave = function(){
			fundoRetrair.style.opacity="0.5";
			botaoRetrair.style.opacity="0.5";
		};
		botaoRetrair.onmouseover = function(){
			fundoRetrair.style.opacity="0.8";
			botaoRetrair.style.opacity="0.8";
		};
		botaoRetrair.onmouseleave = function(){
			fundoRetrair.style.opacity="0.5";
			botaoRetrair.style.opacity="0.5";
		};
		console.log('executouPrincipal');
		//Fim da criação do botão de retração
		article.style.width="1000px";
		article.style.height="500px";
		icone.style.display="none";
		span.style.display="none";
		fundoRetrair.addEventListener('click',function(){
			limparConteudo(icone,div,article,span,fundoRetrair,botaoRetrair)
		});
		botaoRetrair.addEventListener('click',function(){
			limparConteudo(icone,div,article,span,fundoRetrair,botaoRetrair);
		});
		setTimeout(function(){
			article.appendChild(fundoRetrair);	
			article.appendChild(botaoRetrair);	
		},1000);
		
	}
}
function cliqueCardapios(){}
function cliqueInformativos(){}