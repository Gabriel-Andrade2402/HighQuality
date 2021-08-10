function ScrollManipulation(){
	window.addEventListener('scroll',function(ev){
		var menu=document.getElementById('menu');
		menu.style.position="absolute";
		if (window.scrollY >100){
    		menu.style.position="fixed";
    		let backgroundTopo=document.getElementById('backgroundTopo');
			let backgrounArticle=document.getElementById('imageBackgroundArticleDatabase');
    		let icone=document.getElementById('iconeArticle1');
    		let tituloArticle=document.getElementById('tituloArticle1');
    		let conteudoArticle=document.getElementById('conteudoArticle1');
    		backgroundTopo.style.opacity="0.7";
    		tituloArticle.style.left="5%";
    		tituloArticle.style.opacity="1";
    		conteudoArticle.style.left="58%";
    		conteudoArticle.style.opacity="1";
    		icone.style.left="0%";
    		icone.style.opacity="1";
    		backgrounArticle.style.opacity="0.5";
    		document.body.style.background="#00BFFF";
    	}
    	if(window.scrollY>600){
    		let backgrounArticle=document.getElementById('imageBackgroundArticleDesign');
    		let icone=document.getElementById('imagemArticle2');
    		let tituloArticle=document.getElementById('tituloArticle2');
    		let conteudoArticle=document.getElementById('conteudoArticle2');
    		tituloArticle.style.left="-55%";
    		tituloArticle.style.opacity="1";
    		conteudoArticle.style.left="0%";
    		conteudoArticle.style.opacity="1";
    		icone.style.left="50%";
    		icone.style.opacity="1";
    		backgrounArticle.style.opacity="1";
    		document.body.style.background="#DC143C";
    	}
    	if(window.scrollY>1200){
    		let backgrounArticle=document.getElementById('imageBackgroundArticleMobile');
    		let icone=document.getElementById('imagemArticle3');
    		let tituloArticle=document.getElementById('tituloArticle3');
    		let conteudoArticle=document.getElementById('conteudoArticle3');
    		tituloArticle.style.left="5%";
    		tituloArticle.style.opacity="1";
    		conteudoArticle.style.left="50%";
    		conteudoArticle.style.opacity="1";
    		icone.style.left="0%";
    		icone.style.opacity="1";
    		backgrounArticle.style.opacity="1";
    		backgrounArticle.style.position="relative";
    		backgrounArticle.style.top="-12%";
    		document.body.style.background="#59f240";
    	}
    	if(window.scrollY>1900){
    		let backgrounArticle=document.getElementById('imageBackgroundArticleWeb');
    		let icone=document.getElementById('imagemArticle4');
    		let tituloArticle=document.getElementById('tituloArticle4');
    		let conteudoArticle=document.getElementById('conteudoArticle4');
    		let imagemWebArticle=document.getElementById('imagemWebArticle');
    		tituloArticle.style.left="-55%";
    		tituloArticle.style.opacity="1";
    		conteudoArticle.style.left="0%";
    		conteudoArticle.style.opacity="1";
    		icone.style.left="60%";
    		icone.style.opacity="1";
    		imagemWebArticle.style.width="500px";
    		imagemWebArticle.style.height="500px";
    		backgrounArticle.style.opacity="1";
    		document.body.style.background="#1C1C1C";
    	}
    	if(window.scrollY>2600){
    		let backgrounArticle=document.getElementById('imageBackgroundArticlePlanilhas');
    		let icone=document.getElementById('imagemArticle5');
    		let tituloArticle=document.getElementById('tituloArticle5');
    		let conteudoArticle=document.getElementById('conteudoArticle5');
    		tituloArticle.style.left="-5%";
    		tituloArticle.style.opacity="1";
    		conteudoArticle.style.left="45%";
    		conteudoArticle.style.opacity="1";
    		icone.style.left="0%";
    		icone.style.opacity="1";
    		backgrounArticle.style.opacity="1";
    		document.body.style.background="#32CD32";
    	}
    	if(window.scrollY<100){
    		let backgroundTopo=document.getElementById('backgroundTopo');
    		backgroundTopo.style.opacity="1";
    		document.body.style.background="#FFFAF0";
    		menu.style.position="absolute";
    	}

	})

}


function vitrineHeaderPalavras(){
	eventoTexto=window.setInterval(function(){
			let span=document.getElementById("vitrineHeader");
			var text="Pessego";
			var arrayTextPrincipal=text.split("");
			var arrayTexto=span.innerText.split("");
			if(arrayTexto.length!=0 && arrayTexto.length!=arrayTextPrincipal.length){
				span.innerText+=arrayTextPrincipal[arrayTexto.length];
			}else{
				if(arrayTexto.length==0){
					span.innerText=arrayTextPrincipal[0];
				}
			}

			/*if(arrayTexto.length==0){
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
			}*/
		}, 1000);
}