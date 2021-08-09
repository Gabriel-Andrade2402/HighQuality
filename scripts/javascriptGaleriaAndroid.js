function AbrirCakesTreats(){
	var divPrincipal=document.getElementById('blocoConteudoCakesTreats');
	//Último elemento da div usada como referencia
	var ultimoElemento=document.getElementById('ultimaTagReferencia');
	var botaoDescerConteudo=document.getElementById('botaoDescerConteudo');
	var blocoPretoDescerSubir=document.getElementById('blocoPretoAbrirFecharConteudo');
	var textoConteudo=document.getElementById('textoGaleriaAndroidCakesTrets');
	if(document.getElementById('videoCakesTreats')!==null){
		//Codigos pare remover conteudos aberto e fechar o conteudo
		divPrincipal.style.height='200px'
		var video=document.getElementById('videoCakesTreats');
		var divManipularImagens=document.getElementById('divManipularImagens');
		divPrincipal.removeChild(video);
		divPrincipal.removeChild(divManipularImagens);
		botaoDescerConteudo.src="../imagens/iconeDescer.png";
		botaoDescerConteudo.style.top="15%";
		blocoPretoDescerSubir.style.height="100%";
		 textoConteudo.textContent="Cakes Treats são 3 aplicações interligadas que se comunicam via webService, uma das aplicações é acessada "+
		 "apenas pelos clientes, outra aplicações é o webService remoto e por último a aplicações de controle que faz "+
		 "modificações em produtos, valores, nomes, sabores etc... Também tem controle aos pedidos feitos "+
		 "por data ou por outro filtro. As aplicações mobiles tem as dependencias de: Volley..."
	}else{	
		//Codigos para criar os elementos que estarão presentes na abertura do conteudo
		botaoDescerConteudo.src="../imagens/iconeSubir.png";
		botaoDescerConteudo.style.top="150%";
		blocoPretoDescerSubir.style.height="410%";
		textoConteudo.textContent="Cakes Treats são 3 aplicações interligadas que se comunicam via webService, "+
		 "uma das aplicações é acessada apenas pelos clientes, outra aplicações é o webService remoto e por último a "+
		 "aplicações de controle que faz modificações em produtos, valores, nomes, sabores etc... Também tem "+
		 "controle aos pedidos feitos por data ou por outro filtro. As aplicações mobiles tem as dependencias "+
		 "de: Volley, Fragments, Gson, Junit e conexão a rede; A estrutura é baseada nos padrões de "+ 
		 "projeto: Builder, Singleton e memento. "+
		 "A aplicações web é um padrão REST no spring boot e tem as dependencias de: JPA, Hibernate, "+
		 "TomCat; É estruturada no padrão de Entitys,Service,Resources e repositório; o banco "+
		 "de dados é na linguagem SQL.Os textos foram formatados e validados por expressões regulares REGEX. ";
		var video=document.createElement('video');
		var divManipularImagens=document.createElement('div');
		var imagens=document.createElement('img');
		video.id="videoCakesTreats";
		video.src="../videos/CakesTreatsVideo.mp4";
		video.style.width='50%';
		video.style.height='50%';
		video.style.display='inline-block';
		video.style.position = "relative";
		video.style.top="-20px";
		video.controls = true;
		divManipularImagens.id="divManipularImagens";
		divManipularImagens.style.width='20%';
		divManipularImagens.style.height='50%';
		divManipularImagens.style.marginLeft='15%';
		divManipularImagens.style.display='inline-block';
		divManipularImagens.style.top="-20px";
		divManipularImagens.style.padding="0px";
		divManipularImagens.style.position='relative';
		imagens.id="imagensCakesTreats-1";
		imagens.style.width='105%';
		imagens.style.height='100%';
		imagens.src='../imagens/imagensCakesTreats-1.png';
		divPrincipal.style.height = "820px";
		divManipularImagens.appendChild(imagens);
		divPrincipal.insertBefore(video,ultimoElemento);
		divPrincipal.insertBefore(divManipularImagens,ultimoElemento);
		ManipulacaoDeEventosCakesTreats(divPrincipal,ultimoElemento,imagens,divManipularImagens);
	}
}
function ManipulacaoDeEventosCakesTreats(divPrincipal,ultimoElemento,imagens,divManipularImagens){
	//Elementos criados anteriormente estão nos argumentos
	var divBlocoPreto=document.createElement('div');
	var iconePassar=document.createElement('img');
	var iconeVoltar=document.createElement('img');
	divBlocoPreto.style.background="black";
	divBlocoPreto.style.position="absolute";
	divBlocoPreto.style.top="-700";
	divBlocoPreto.id="divBlocoPretoImagensCakesTreats"
	divBlocoPreto.style.left="650px";
	divBlocoPreto.style.height="100%";
	divBlocoPreto.style.width="99%";
	divBlocoPreto.style.top="0px";
	divBlocoPreto.style.left="3%";
	divBlocoPreto.style.opacity="0";
	iconeVoltar.src="../imagens/iconeVoltar.png";
	iconeVoltar.style.position="absolute";
	iconeVoltar.id="botaoVoltarImagensCakesTreats"
	iconeVoltar.style.width="60px";
	iconeVoltar.style.height="60px"
	iconeVoltar.style.top="40%";
	iconeVoltar.style.left="0px";
	iconeVoltar.style.opacity="0";
	iconePassar.src="../imagens/iconePassar.png";
	iconePassar.style.position="absolute";
	iconePassar.id="botaoPassarImagensCakesTreats";
	iconePassar.style.width="60px";
	iconePassar.style.height="60px";
	iconePassar.style.top="40%";
	iconePassar.style.left="75%"
	iconePassar.style.opacity="0";
	divManipularImagens.appendChild(divBlocoPreto);
	divManipularImagens.appendChild(iconePassar);
	divManipularImagens.appendChild(iconeVoltar);
	//Eventos de mouseover e mouseleave
	divBlocoPreto.addEventListener('mouseover',function(){
		divBlocoPreto.style.opacity="0.1";
		iconePassar.style.opacity="0.1";
		iconeVoltar.style.opacity="0.1";
		iconePassar.addEventListener('mouseover',function(){
			iconePassar.style.opacity="0.7";
		});
		iconeVoltar.addEventListener('mouseover',function(){
			iconeVoltar.style.opacity="0.7";
		});
	});
	divBlocoPreto.addEventListener('mouseleave',function(){
		divBlocoPreto.style.opacity="0";
		iconePassar.style.opacity="0";
		iconeVoltar.style.opacity="0";
		iconePassar.addEventListener('mouseleave',function(){
			iconePassar.style.opacity="0";
		});
		iconeVoltar.addEventListener('mouseleave',function(){
			iconeVoltar.style.opacity="0";
		});
	});
	iconePassar.addEventListener('click',function(){passarFoto(imagens)});
	iconeVoltar.addEventListener('click',function(){voltarFoto(imagens)});
}
//Métodos auxiliar para passar e voltar  imagens manipulando a string com id "imagensCakesTreats-1"
function passarFoto(imagens){
	var resultadoSplit=imagens.id.split("-");
	if(resultadoSplit[1]!=='11'){
		var sum=parseInt(resultadoSplit[1])+1;
		imagens.src="../imagens/imagensCakesTreats-"+sum+".png";
		imagens.id="imagensCakesTreats-"+sum;
	}
}
function voltarFoto(imagens){
	var resultadoSplit=imagens.id.split("-");
	console.log(resultadoSplit[1]);
	if(resultadoSplit[1]!=='1'){
		var sum=parseInt(resultadoSplit[1])-1;
		imagens.src="../imagens/imagensCakesTreats-"+sum+".png";
		imagens.id="imagensCakesTreats-"+sum;
	}
}