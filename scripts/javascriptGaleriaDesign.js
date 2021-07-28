var eventoTexto;

//EVENTOS "CHAMATIVOS"
function CriandoTexto(){
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

function cancelar(){
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