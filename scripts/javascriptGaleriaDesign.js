//O EVENTOTEXTO não tem importancia de ser um só pois ele é executado apenas uma vez por metodo
var eventoTexto=null;
var click_chamativos=null;
var click_informativos=null;
var click_cardapios=null;
var click_logomarcas=null;


//EVENTOS "CHAMATIVOS"
function CriandoTextoChamativos(){
	var article=document.getElementById('articleChamativos');
	var icone=document.getElementById('iconeChamativo');
	var div=document.getElementById('blocoTituloChamativo');
	var span=div.children[0];
	icone.style.opacity="0";
	if(eventoTexto===null && click_chamativos=== null){
		eventoTexto=window.setInterval(function(){
			article.style.background="linear-gradient(to left top,#e4e4e4,#20B2AA)";
			article.style.border="0.5px solid black";
			var arrayTexto=span.innerText.split("");
			span.style.fontSize ="35pt";
			span.style.position="relative";
			span.style.left="25%";
			span.style.top="80%";
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
	var article=document.getElementById('articleChamativos');
	var div=document.getElementById('blocoTituloChamativo');
	var icone=document.getElementById('iconeChamativo');
	var span=div.children[0];
	icone.style.opacity="1";
	span.innerText="";
	span.style.left="30%";
	span.style.marginTop="0%";
	article.style.background="linear-gradient(to left top,#e4e4e4,#1E90FF)";
	article.style.border="0.5px solid #00BFFF";
}
//-------------FIM EVENTOS "CHAMATIVOS"




//EVENTOS "CARDAPIOS"
function CriandoTextoCardapios(){
	var article=document.getElementById('articleCardapios');
	var icone=document.getElementById('iconeCardapios');
	var div=document.getElementById('blocoTituloCardapios');
	var span=div.children[0];
	icone.style.opacity="0";
	if(eventoTexto==null && click_cardapios=== null){
	eventoTexto=window.setInterval(function(){
		article.style.background="linear-gradient(to left top,#20B2AA,#e4e4e4)";
		article.style.border="0.5px solid black";
		var arrayTexto=span.innerText.split("");
		span.style.fontSize ="35pt";
		span.style.position="relative";
		span.style.left="25%";
		span.style.top="80%";
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
	var article=document.getElementById('articleCardapios');
	var div=document.getElementById('blocoTituloCardapios');
	var icone=document.getElementById('iconeCardapios');
	var span=div.children[0];
	icone.style.opacity="1";
	span.innerText="";
	span.style.left="30%";
	span.style.marginTop="0%";
	article.style.background="linear-gradient(to left top,#1E90FF,#e4e4e4)";
	article.style.border="0.5px solid #00BFFF";
}
//-------------FIM EVENTOS "CARDAPIOS"


//EVENTOS "INFORMATIVOS"
function CriandoTextoInformativos(){
	var article=document.getElementById('articleInformativos');
	var icone=document.getElementById('iconeInformativos');
	var div=document.getElementById('blocoTituloInformativos');
	var span=div.children[0];
	icone.style.opacity="0";
	if(eventoTexto==null && click_informativos=== null){
	eventoTexto=window.setInterval(function(){
		article.style.background="linear-gradient(to left bottom,#20B2AA,#e4e4e4)";
		article.style.border="0.5px solid black";
		var arrayTexto=span.innerText.split("");
		span.style.fontSize ="30pt";
		span.style.position="relative";
		span.style.left="25%";
		span.style.top="80%";
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
	var article=document.getElementById('articleInformativos');
	var div=document.getElementById('blocoTituloInformativos');
	var icone=document.getElementById('iconeInformativos');
	var span=div.children[0];
	icone.style.opacity="1";
	span.innerText="";
	span.style.left="30%";
	span.style.marginTop="0%";
	article.style.background="linear-gradient(to left bottom,#1E90FF,#e4e4e4)";
	article.style.border="0.5px solid #00BFFF";
}
//-------------FIM EVENTOS "INFORMATIVOS"


//EVENTOS "LOGOMARCAS"
function CriandoTextoLogomarcas(){
	var article=document.getElementById('articleLogomarcas');
	var icone=document.getElementById('iconeLogomarcas');
	var div=document.getElementById('blocoTituloLogomarcas');
	var span=div.children[0];
	icone.style.opacity="0";
	if(eventoTexto==null && click_logomarcas=== null){
	article.style.background="linear-gradient(to left,#20B2AA,#e4e4e4)";
	article.style.border="0.5px solid black";
	eventoTexto=window.setInterval(function(){
		var arrayTexto=span.innerText.split("");
		span.style.fontSize ="30pt";
		span.style.position="relative";
		span.style.left="25%";
		span.style.top="80%";
		if(arrayTexto.length==0){
			span.innerText="L";
		}
		if(arrayTexto.length==1){
			span.innerText+="O";
		}if(arrayTexto.length==2){
			span.innerText+="G";
		}
		if(arrayTexto.length==3){
			span.innerText+="O";
		}
		if(arrayTexto.length==4){
			span.innerText+="M";
		}
		if(arrayTexto.length==5){
			span.innerText+="A";	
		}
		if(arrayTexto.length==6){
			span.innerText+="R";
		}
		if(arrayTexto.length==7){
			span.innerText+="C";
		}
		if(arrayTexto.length==8){
			span.innerText+="A";
		}
		if(arrayTexto.length==9){
			span.innerText+="S";
			cancelandoTexto();
		}
	}, 120);
	}
}

function cancelarLogomarcas(){
	cancelandoTexto();
	var article=document.getElementById('articleLogomarcas');
	var div=document.getElementById('blocoTituloLogomarcas');
	var icone=document.getElementById('iconeLogomarcas');
	var span=div.children[0];
	icone.style.opacity="1";
	span.innerText="";
	span.style.left="30%";
	span.style.marginTop="0%";
	article.style.background="linear-gradient(to left,#1E90FF,#e4e4e4)";
	article.style.border="0.5px solid #00BFFF";
}
//-------------FIM EVENTOS "LOGOMARCAS"


//Evento universal
function cancelandoTexto(){
	window.clearInterval(eventoTexto);
	eventoTexto=null;
}
function limparConteudo(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,
	valorScrollY,conteudo_clicado){
	setTimeout(function(){
		article.style.width="400px";
		article.style.height="400px";
		icone.style.display="block";
		span.style.display="block";
		article.removeChild(fundoRetrair);
		article.removeChild(botaoRetrair);
		article.removeChild(blocoComImagens);
		document.documentElement.scrollTop = valorScrollY;
		if(conteudo_clicado==="click_chamativos"){
			click_chamativos=null;
			cancelarChamativos();
		}
		if(conteudo_clicado==="click_cardapios"){
			click_cardapios=null;
			cancelarCardapios();
		}
		if(conteudo_clicado==="click_informativos"){
			click_informativos=null;
			cancelarInformativos();
		}
		if(conteudo_clicado==="click_logomarcas"){
			click_logomarcas=null;
			cancelarLogomarcas();
		}
	},100);
}
function iniciaImagensEAdiciona(blocoComImagens,arrayDeImagens,width,height){
	blocoComImagens.classList="formatacaoBlocoComImanges";
	blocoComImagens.style.width=width;
	blocoComImagens.style.height=height;
	arrayDeImagens.forEach(function(imagem){
		imagem.classList.add('formatacaoDeImagens');
		imagem.onmouseover=function(){imagem.style.filter="saturate(100%)"};
		imagem.onmouseleave=function(){imagem.style.filter="saturate(0%)"};
		blocoComImagens.appendChild(imagem);
	});
}
function iniciaBotaoRetrair(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,
	valorScrollY,conteudo_clicado){
	fundoRetrair.classList="formatacaoFundoRetrair";
	botaoRetrair.classList="formatacaoBotaoRetrair";
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
		fundoRetrair.addEventListener('click',function(){
			limparConteudo(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,
				valorScrollY,conteudo_clicado);
		});
		botaoRetrair.addEventListener('click',function(){
			limparConteudo(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,
				valorScrollY,conteudo_clicado);
		});
}


//Eventos de cliques na galeria
function cliqueChamativos(){
	click_chamativos="1";
	var icone=document.getElementById('iconeChamativo');
	var div=document.getElementById('blocoTituloChamativo');
	var article=document.getElementById('articleChamativos');
	var span=div.children[0];
	if(icone.style.display==="block" || icone.style.display===""){
		//Criação do botao de retração do conteudo
		var arrayDeImagens=[];
		var blocoComImagens=document.createElement('div');
		var botaoRetrair=document.createElement('img');
		var fundoRetrair=document.createElement('div');
		var imagem1=document.createElement('img');
		var imagem2=document.createElement('img');
		var imagem3=document.createElement('img');
		var imagem4=document.createElement('img');
		var imagem5=document.createElement('img');
		var imagem6=document.createElement('img');
		imagem1.src="../imagens/ovo.jpg";
		imagem2.src="../imagens/Artes4-2.png";
		imagem3.src="../imagens/McKevin1.png";
		imagem4.src="../imagens/arteinstagramchamar1.png";
		imagem5.src="../imagens/arte6.png";
		imagem6.src="../imagens/ArtesInstagram3.png";
		arrayDeImagens.push(imagem1);
		arrayDeImagens.push(imagem2);
		arrayDeImagens.push(imagem3);
		arrayDeImagens.push(imagem4);
		arrayDeImagens.push(imagem5);
		arrayDeImagens.push(imagem6);
		//Inicia bloco com imagens dentro do conteudo aberto
		iniciaImagensEAdiciona(blocoComImagens,arrayDeImagens,"980px","300px");
		//Inicia botao de retração de conteudo
		botaoRetrair.src="../imagens/iconeEsquerda.png";
		iniciaBotaoRetrair(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,0,"click_chamativos");
		//Fim da criação do botão de retração
		article.style.width="1000px";
		article.style.height="500px";
		icone.style.display="none";
		span.style.display="none";
		setTimeout(function(){
			article.appendChild(fundoRetrair);	
			article.appendChild(botaoRetrair);
			article.appendChild(blocoComImagens);
		},450);
	}
}
function cliqueCardapios(){
	click_cardapios="1";
	var icone=document.getElementById('iconeCardapios');
	var div=document.getElementById('blocoTituloCardapios');
	var article=document.getElementById('articleCardapios');
	var span=div.children[0];
	if(icone.style.display==="block" || icone.style.display===""){
		//Criação do botao de retração do conteudo
		var arrayDeImagens=[];
		var blocoComImagens=document.createElement('div');
		var botaoRetrair=document.createElement('img');
		var fundoRetrair=document.createElement('div');
		var imagem1=document.createElement('img');
		var imagem2=document.createElement('img');
		var imagem3=document.createElement('img');
		var imagem4=document.createElement('img');
		var imagem5=document.createElement('img');
		var imagem6=document.createElement('img');
		imagem1.src="../imagens/cardapioAltoastralFrente.png";
		imagem2.src="../imagens/cardapioAltoastralTras.png";
		imagem3.src="../imagens/cardapioCakesTreatsFrente.png";
		imagem4.src="../imagens/cardapioCakesTreatsTras.png";
		imagem5.src="../imagens/cardapioJhowFrente.png";
		imagem6.src="../imagens/cardapioJhowTras.png";
		arrayDeImagens.push(imagem1);
		arrayDeImagens.push(imagem2);
		arrayDeImagens.push(imagem3);
		arrayDeImagens.push(imagem4);
		arrayDeImagens.push(imagem5);
		arrayDeImagens.push(imagem6);
		//Inicia bloco com imagens dentro do conteudo aberto
		iniciaImagensEAdiciona(blocoComImagens,arrayDeImagens,"980px","350px");
		//Inicia botao de retração de conteudo
		botaoRetrair.src="../imagens/iconeEsquerda.png";
		iniciaBotaoRetrair(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,0,"click_cardapios");
		//Fim da criação do botão de retração
		article.style.width="1000px";
		article.style.height="500px";
		icone.style.display="none";
		span.style.display="none";
		setTimeout(function(){
			article.appendChild(fundoRetrair);	
			article.appendChild(botaoRetrair);
			article.appendChild(blocoComImagens);
			document.documentElement.scrollTop = 520;
		},450);
		
	}
}

function cliqueInformativos(){
	click_informativos="1";
	var icone=document.getElementById('iconeInformativos');
	var div=document.getElementById('blocoTituloInformativos');
	var article=document.getElementById('articleInformativos');
	var span=div.children[0];
	if(icone.style.display==="block" || icone.style.display===""){
		//Criação do botao de retração do conteudo
		var arrayDeImagens=[];
		var blocoComImagens=document.createElement('div');
		var botaoRetrair=document.createElement('img');
		var fundoRetrair=document.createElement('div');
		var imagem1=document.createElement('img');
		var imagem2=document.createElement('img');
		imagem1.src="../imagens/McKevin1.png";
		imagem2.src="../imagens/arteinstagramchamar1.png";
		arrayDeImagens.push(imagem1);
		arrayDeImagens.push(imagem2);
		//Inicia bloco com imagens dentro do conteudo aberto
		iniciaImagensEAdiciona(blocoComImagens,arrayDeImagens,"980px","300px");
		//Inicia botao de retração de conteudo
		botaoRetrair.src="../imagens/iconeEsquerda.png";
		iniciaBotaoRetrair(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,600,"click_informativos");
		//Fim da criação do botão de retração
		article.style.width="1000px";
		article.style.height="500px";
		icone.style.display="none";
		span.style.display="none";
		setTimeout(function(){
			article.appendChild(fundoRetrair);	
			article.appendChild(botaoRetrair);
			article.appendChild(blocoComImagens);
			document.documentElement.scrollTop = 500;
		},450);
		
	}
}
function cliqueLogomarcas(){
	click_logomarcas="1";
	var icone=document.getElementById('iconeLogomarcas');
	var div=document.getElementById('blocoTituloLogomarcas');
	var article=document.getElementById('articleLogomarcas');
	var span=div.children[0];
	if(icone.style.display==="block" || icone.style.display===""){
		//Criação do botao de retração do conteudo
		var arrayDeImagens=[];
		var blocoComImagens=document.createElement('div');
		var botaoRetrair=document.createElement('img');
		var fundoRetrair=document.createElement('div');
		var imagem1=document.createElement('img');
		imagem1.src="../imagens/iconeLogomarcas.png";
		arrayDeImagens.push(imagem1);
		//Inicia bloco com imagens dentro do conteudo aberto
		iniciaImagensEAdiciona(blocoComImagens,arrayDeImagens,"980px","300px");
		//Inicia botao de retração de conteudo
		botaoRetrair.src="../imagens/iconeEsquerda.png";
		iniciaBotaoRetrair(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,500,"click_logomarcas");
		//Fim da criação do botão de retração
		article.style.width="1000px";
		article.style.height="500px";
		icone.style.display="none";
		span.style.display="none";
		setTimeout(function(){
			article.appendChild(fundoRetrair);	
			article.appendChild(botaoRetrair);
			article.appendChild(blocoComImagens);
			document.documentElement.scrollTop = 1000;
		},450);
	}
}