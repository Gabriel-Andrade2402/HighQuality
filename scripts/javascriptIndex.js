function ScrollManipulation(){
	window.addEventListener('scroll',function(ev){
		var menu=document.getElementById('menu');
		menu.style.position="absolute";
		if (window.scrollY >300){
			let article=document.getElementById('articlePlanilhas');
    		menu.style.position="fixed";
    		article.style.left="0px";
			let backgrounArticle=document.getElementById('imageBackgroundArticleDatabase');
    		let icone=document.getElementById('iconeArticle1');
    		let tituloArticle=document.getElementById('tituloArticle1');
    		let conteudoArticle=document.getElementById('conteudoArticle1');
    		tituloArticle.style.left="5%";
    		tituloArticle.style.opacity="1";
    		conteudoArticle.style.left="58%";
    		conteudoArticle.style.opacity="1";
    		icone.style.left="0%";
    		icone.style.opacity="1";
    		backgrounArticle.style.opacity="0.5";
    		document.body.style.background="#00BFFF";
    	}
    	if(window.scrollY>800){
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
    	if(window.scrollY>1400){
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
    	if(window.scrollY>800){
    		let article=document.getElementById('articleMobile');
    		article.style.left="0px";
    	}
    	if(window.scrollY>1000){
    		let article=document.getElementById('articleWeb');
    		article.style.left="0px";
    	}
    	if(window.scrollY<300){
    		document.body.style.background="#FFFAF0";
    		menu.style.position="absolute";
    	}

	})

}
