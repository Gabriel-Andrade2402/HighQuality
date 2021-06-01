function ScrollManipulation(){
	window.addEventListener('scroll',function(ev){
		if (window.scrollY > 100){
			let article=document.getElementById('articleDatabase');
    		article.style.left="0px";
    	}
    	if(window.scrollY>300){
    		let article=document.getElementById('articleDesign');
    		article.style.left="0px";
    	}
    	if(window.scrollY>500){
    		let article=document.getElementById('articlePlanilhas');
    		let menu=document.getElementById('menu');
    		menu.style.position="fixed";
    		article.style.left="0px";
    	}
    	if(window.scrollY>800){
    		let article=document.getElementById('articleMobile');
    		article.style.left="0px";
    	}
    	if(window.scrollY>1050){
    		let article=document.getElementById('articleWeb');
    		article.style.left="0px";
    	}
    	if(window.scrollY<500){
    		let menu=document.getElementById('menu');
    		menu.style.position="absolute";
    	}

	})

}