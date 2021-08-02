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
	var icone=document.getElementById('iconeCardapios');
	var div=document.getElementById('blocoTituloCardapios');
	var span=div.children[0];
	icone.style.opacity="0";
	if(eventoTexto==null){
	eventoTexto=window.setInterval(function(){
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
	var div=document.getElementById('blocoTituloCardapios');
	var icone=document.getElementById('iconeCardapios');
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
	var div=document.getElementById('blocoTituloInformativos');
	var icone=document.getElementById('iconeInformativos');
	var span=div.children[0];
	icone.style.opacity="1";
	span.innerText="";
	span.style.left="30%";
	span.style.marginTop="0%";
}
//-------------FIM EVENTOS "INFORMATIVOS"


//EVENTOS "LOGOMARCAS"
function CriandoTextoLogomarcas(){
	var icone=document.getElementById('iconeLogomarcas');
	var div=document.getElementById('blocoTituloLogomarcas');
	var span=div.children[0];
	icone.style.opacity="0";
	if(eventoTexto==null){
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
	var div=document.getElementById('blocoTituloLogomarcas');
	var icone=document.getElementById('iconeLogomarcas');
	var span=div.children[0];
	icone.style.opacity="1";
	span.innerText="";
	span.style.left="30%";
	span.style.marginTop="0%";
}
//-------------FIM EVENTOS "LOGOMARCAS"


//Evento universal
function cancelandoTexto(){
	window.clearInterval(eventoTexto);
	eventoTexto=null;
}
function limparConteudo(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,valorScrollY){
	setTimeout(function(){
		article.style.width="400px";
		article.style.height="400px";
		icone.style.display="block";
		span.style.display="block";
		article.removeChild(fundoRetrair);
		article.removeChild(botaoRetrair);
		article.removeChild(blocoComImagens);
		document.documentElement.scrollTop = valorScrollY;
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
function iniciaBotaoRetrair(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,valorScrollY){
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
			limparConteudo(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,valorScrollY);
		});
		botaoRetrair.addEventListener('click',function(){
			limparConteudo(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,valorScrollY);
		});
}


//Eventos de cliques na galeria
function cliqueChamativos(){
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
		iniciaBotaoRetrair(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens);
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
		iniciaBotaoRetrair(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,0);
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
		iniciaBotaoRetrair(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,600);
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
		iniciaBotaoRetrair(icone,div,article,span,fundoRetrair,botaoRetrair,blocoComImagens,500);
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