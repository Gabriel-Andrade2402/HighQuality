//Functions onClick para conteudo
function clickDatabasesBasico(){
	let article=document.getElementById('articleDatabaseSimples');
	article.onclick=null;
	let textDownload=document.createElement('a');
	let textoExplicativo=document.createElement('span');
	let video=document.createElement('video');
	let imagens=document.createElement('img');
	let blockImagens=document.createElement('div');
	let blockFechar=document.createElement('div');
	let imgFechar=document.createElement('img');
	let inicioTitulo=document.getElementById('textTituloArticle1');
	let fimTitulo=document.getElementById('blocoTextoSimples1');
	if(article.style.width!="90%"){
		article.style.width="90%";
		article.style.height="450px";
		article.style.marginLeft="0%";
		setTimeout(function(){
			article.classList.remove('articleDatabases');
			article.classList.add('articleDatabaseOpen');
			//Formatar e manipular titulo ===================
			inicioTitulo.classList.add('inicioTitulo');
			inicioTitulo.style.marginLeft="0%";
			fimTitulo.classList.add('fimTitulo');
			//Fim -------------------------------------------
			//Formatar texto Download =======================
			let iconeBaixar=document.createElement('img');
			iconeBaixar.src="../imagens/iconeBaixar.png";
			iconeBaixar.classList.add('iconeBaixar');
			textDownload.classList.add('textDownload');
			textDownload.href="https://www.facebook.com"
			textDownload.target="blank";
			textDownload.appendChild(iconeBaixar);
			//Fim -------------------------------------------
			//Formatar texto conteudo =======================
			textoExplicativo.textContent="Este banco de dados é simples e possui apenas uma tabela"+
			" com os informações";
			textoExplicativo.classList.add('textoExplicativo');
			//Fim -------------------------------------------
			//Formatar video  ===============================
			video.id="videoDatabaseBasicos";
			video.src="../videos/VideoBancoDeDados1.mp4";
			video.classList.add('video');
			video.controls = true;
			//Fim -------------------------------------------
			//Formatar botao fechar imagens  =============================
			blockFechar.classList.add('blockFechar');
			blockFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			blockFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			blockFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			}
			imgFechar.src="../imagens/iconeSubir.png";
			imgFechar.classList.add('imgFechar');
			imgFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			imgFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			imgFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			};
			//Fim -------------------------------------------
			//Formatar slide imagens  =============================
			blockImagens.classList.add('blockImagens');
			imagens.id="imagemDatabaseBasico-1";
			imagens.src="../imagens/databases/basico/imagemDatabaseBasico-1.png";
			imagens.classList.add('imagens');
			blockImagens.appendChild(imagens);
			iniciarManipulacaoSlide(blockImagens,imagens,'basico',3);
			//Fim -------------------------------------------
			article.appendChild(textDownload);
			article.appendChild(textoExplicativo);
			article.appendChild(video);
			article.appendChild(blockFechar);
			article.appendChild(imgFechar);
			article.appendChild(blockImagens);
		},500);
	}
}
function clickDatabasesAutomatizado(){
	let article=document.getElementById('articleDatabaseAutomatizado');
	article.onclick=null;
	let textDownload=document.createElement('a');
	let textoExplicativo=document.createElement('span');
	let video=document.createElement('video');
	let imagens=document.createElement('img');
	let blockImagens=document.createElement('div');
	let blockFechar=document.createElement('div');
	let imgFechar=document.createElement('img');
	let inicioTitulo=document.getElementById('textTituloArticle2');
	let fimTitulo=document.getElementById('blocoTextoSimples2');
	if(article.style.width!="90%"){
		article.style.width="90%";
		article.style.height="450px";
		article.style.marginLeft="0%";
		setTimeout(function(){
			article.classList.remove('articleDatabases');
			article.classList.add('articleDatabaseOpen');
			//Formatar e manipular titulo ===================
			inicioTitulo.classList.add('inicioTitulo');
			inicioTitulo.style.marginLeft="0%";
			fimTitulo.classList.add('fimTitulo');
			//Fim -------------------------------------------
			//Formatar texto Download =======================
			let iconeBaixar=document.createElement('img');
			iconeBaixar.src="../imagens/iconeBaixar.png";
			iconeBaixar.classList.add('iconeBaixar');
			textDownload.classList.add('textDownload');
			textDownload.href="https://www.facebook.com"
			textDownload.target="blank";
			textDownload.appendChild(iconeBaixar);
			//Fim -------------------------------------------
			//Formatar texto conteudo =======================
			textoExplicativo.textContent="Este banco de dados é simples e possui apenas uma tabela"+
			" com os informações";
			textoExplicativo.classList.add('textoExplicativo');
			//Fim -------------------------------------------
			//Formatar video  ===============================
			video.id="videoDatabaseBasicos";
			video.src="../videos/VideoBancoDeDados2.mp4";
			video.classList.add('video');
			video.controls = true;
			//Fim -------------------------------------------
			//Formatar botao fechar imagens  =============================
			blockFechar.classList.add('blockFechar');
			blockFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			blockFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			blockFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			}
			imgFechar.src="../imagens/iconeSubir.png";
			imgFechar.classList.add('imgFechar');
			imgFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			imgFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			imgFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			};
			//Fim -------------------------------------------
			//Formatar slide imagens  =============================
			blockImagens.classList.add('blockImagens');
			imagens.id="databaseFuncoes-1";
			imagens.src="../imagens/databases/funcao/databaseFuncoes-1.png";
			imagens.classList.add('imagens');
			blockImagens.appendChild(imagens);
			iniciarManipulacaoSlide(blockImagens,imagens,'funcao',5);
			//Fim -------------------------------------------
			article.appendChild(textDownload);
			article.appendChild(textoExplicativo);
			article.appendChild(video);
			article.appendChild(blockFechar);
			article.appendChild(imgFechar);
			article.appendChild(blockImagens);
		},500);
	}
}
function clickDatabasesPorAPI(){
	let article=document.getElementById('articleDatabasePorAPI');
	article.onclick=null;
	let textDownload=document.createElement('a');
	let textoExplicativo=document.createElement('span');
	let video=document.createElement('video');
	let imagens=document.createElement('img');
	let blockImagens=document.createElement('div');
	let blockFechar=document.createElement('div');
	let imgFechar=document.createElement('img');
	let inicioTitulo=document.getElementById('textTituloArticle3');
	let fimTitulo=document.getElementById('blocoTextoSimples3');
	if(article.style.width!="90%"){
		article.style.width="90%";
		article.style.height="450px";
		article.style.marginLeft="0%";
		setTimeout(function(){
			article.classList.remove('articleDatabases');
			article.classList.add('articleDatabaseOpen');
			//Formatar e manipular titulo ===================
			inicioTitulo.classList.add('inicioTitulo');
			inicioTitulo.style.marginLeft="0%";
			fimTitulo.classList.add('fimTitulo');
			//Fim -------------------------------------------
			//Formatar texto Download =======================
			let iconeBaixar=document.createElement('img');
			iconeBaixar.src="../imagens/iconeBaixar.png";
			iconeBaixar.classList.add('iconeBaixar');
			textDownload.classList.add('textDownload');
			textDownload.href="https://www.facebook.com"
			textDownload.target="blank";
			textDownload.appendChild(iconeBaixar);
			//Fim -------------------------------------------
			//Formatar texto conteudo =======================
			textoExplicativo.textContent="Este banco de dados é simples e possui apenas uma tabela"+
			" com os informações";
			textoExplicativo.classList.add('textoExplicativo');
			//Fim -------------------------------------------
			//Formatar video  ===============================
			video.id="videoDatabaseBasicos";
			video.src="../videos/VideoBancoDeDados3.mp4";
			video.classList.add('video');
			video.controls = true;
			//Fim -------------------------------------------
			//Formatar botao fechar imagens  =============================
			blockFechar.classList.add('blockFechar');
			blockFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			blockFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			blockFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			}
			imgFechar.src="../imagens/iconeSubir.png";
			imgFechar.classList.add('imgFechar');
			imgFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			imgFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			imgFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			};
			//Fim -------------------------------------------
			//Formatar slide imagens  =============================
			blockImagens.classList.add('blockImagens');
			imagens.id="imagemDatabasePorApi-1";
			imagens.src="../imagens/databases/porApi/imagemDatabasePorApi-1.png";
			imagens.classList.add('imagens');
			blockImagens.appendChild(imagens);
			iniciarManipulacaoSlide(blockImagens,imagens,'porApi',14);
			//Fim -------------------------------------------
			article.appendChild(textDownload);
			article.appendChild(textoExplicativo);
			article.appendChild(video);
			article.appendChild(blockFechar);
			article.appendChild(imgFechar);
			article.appendChild(blockImagens);
		},500);
	}
}
function clickDatabasesProcessadoras(){
	let article=document.getElementById('articleDatabaseProcessadoras');
	article.onclick=null;
	let textDownload=document.createElement('a');
	let textoExplicativo=document.createElement('span');
	let video=document.createElement('video');
	let imagens=document.createElement('img');
	let blockImagens=document.createElement('div');
	let blockFechar=document.createElement('div');
	let imgFechar=document.createElement('img');
	let inicioTitulo=document.getElementById('textTituloArticle4');
	let fimTitulo=document.getElementById('blocoTextoSimples4');
	if(article.style.width!="90%"){
		article.style.width="90%";
		article.style.height="450px";
		article.style.marginLeft="0%";
		setTimeout(function(){
			article.classList.remove('articleDatabases');
			article.classList.add('articleDatabaseOpen');
			//Formatar e manipular titulo ===================
			inicioTitulo.classList.add('inicioTitulo');
			inicioTitulo.style.marginLeft="0%";
			fimTitulo.classList.add('fimTitulo');
			//Fim -------------------------------------------
			//Formatar texto Download =======================
			let iconeBaixar=document.createElement('img');
			iconeBaixar.src="../imagens/iconeBaixar.png";
			iconeBaixar.classList.add('iconeBaixar');
			textDownload.classList.add('textDownload');
			textDownload.href="https://www.facebook.com"
			textDownload.target="blank";
			textDownload.appendChild(iconeBaixar);
			//Fim -------------------------------------------
			//Formatar texto conteudo =======================
			textoExplicativo.textContent="Este banco de dados é simples e possui apenas uma tabela"+
			" com os informações";
			textoExplicativo.classList.add('textoExplicativo');
			//Fim -------------------------------------------
			//Formatar video  ===============================
			video.id="videoDatabaseBasicos";
			video.src="../videos/VideoBancoDeDados4.mp4";
			video.classList.add('video');
			video.controls = true;
			//Fim -------------------------------------------
			//Formatar botao fechar imagens  =============================
			blockFechar.classList.add('blockFechar');
			blockFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			blockFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			blockFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			}
			imgFechar.src="../imagens/iconeSubir.png";
			imgFechar.classList.add('imgFechar');
			imgFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			imgFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			imgFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			};
			//Fim -------------------------------------------
			//Formatar slide imagens  =============================
			blockImagens.classList.add('blockImagens');
			imagens.id="databaseProcedimentos-1";
			imagens.src="../imagens/databases/procedimento/databaseProcedimentos-1.png";
			imagens.classList.add('imagens');
			blockImagens.appendChild(imagens);
			iniciarManipulacaoSlide(blockImagens,imagens,'procedimento',3);
			//Fim -------------------------------------------
			article.appendChild(textDownload);
			article.appendChild(textoExplicativo);
			article.appendChild(video);
			article.appendChild(blockFechar);
			article.appendChild(imgFechar);
			article.appendChild(blockImagens);
		},500);
	}
}
function clickDatabasesSegurança(){
	let article=document.getElementById('articleDatabaseSegurança');
	article.onclick=null;
	let textDownload=document.createElement('a');
	let textoExplicativo=document.createElement('span');
	let video=document.createElement('video');
	let imagens=document.createElement('img');
	let blockImagens=document.createElement('div');
	let blockFechar=document.createElement('div');
	let imgFechar=document.createElement('img');
	let inicioTitulo=document.getElementById('textTituloArticle5');
	let fimTitulo=document.getElementById('blocoTextoSimples5');
	if(article.style.width!="90%"){
		article.style.width="90%";
		article.style.height="450px";
		article.style.marginLeft="0%";
		setTimeout(function(){
			article.classList.remove('articleDatabases');
			article.classList.add('articleDatabaseOpen');
			//Formatar e manipular titulo ===================
			inicioTitulo.classList.add('inicioTitulo');
			inicioTitulo.style.marginLeft="0%";
			fimTitulo.classList.add('fimTitulo');
			//Fim -------------------------------------------
			//Formatar texto Download =======================
			let iconeBaixar=document.createElement('img');
			iconeBaixar.src="../imagens/iconeBaixar.png";
			iconeBaixar.classList.add('iconeBaixar');
			textDownload.classList.add('textDownload');
			textDownload.href="https://www.facebook.com"
			textDownload.target="blank";
			textDownload.appendChild(iconeBaixar);
			//Fim -------------------------------------------
			//Formatar texto conteudo =======================
			textoExplicativo.textContent="Este banco de dados é simples e possui apenas uma tabela"+
			" com os informações";
			textoExplicativo.classList.add('textoExplicativo');
			//Fim -------------------------------------------
			//Formatar video  ===============================
			video.id="videoDatabaseBasicos";
			video.src="../videos/VideoBancoDeDados5.mp4";
			video.classList.add('video');
			video.controls = true;
			//Fim -------------------------------------------
			//Formatar botao fechar imagens  =============================
			blockFechar.classList.add('blockFechar');
			blockFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			blockFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			blockFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			}
			imgFechar.src="../imagens/iconeSubir.png";
			imgFechar.classList.add('imgFechar');
			imgFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			imgFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			imgFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			};
			//Fim -------------------------------------------
			//Formatar slide imagens  =============================
			blockImagens.classList.add('blockImagens');
			imagens.id="databaseSeguranca-1";
			imagens.src="../imagens/databases/seguranca/databaseSeguranca-1.png";
			imagens.classList.add('imagens');
			blockImagens.appendChild(imagens);
			iniciarManipulacaoSlide(blockImagens,imagens,'seguranca',5);
			//Fim -------------------------------------------
			article.appendChild(textDownload);
			article.appendChild(textoExplicativo);
			article.appendChild(video);
			article.appendChild(blockFechar);
			article.appendChild(imgFechar);
			article.appendChild(blockImagens);
		},500);
	}
}
function clickDatabasesTransacionais(){
	let article=document.getElementById('articleDatabaseTransacionais');
	article.onclick=null;
	let textDownload=document.createElement('a');
	let textoExplicativo=document.createElement('span');
	let video=document.createElement('video');
	let imagens=document.createElement('img');
	let blockImagens=document.createElement('div');
	let blockFechar=document.createElement('div');
	let imgFechar=document.createElement('img');
	let inicioTitulo=document.getElementById('textTituloArticle6');
	let fimTitulo=document.getElementById('blocoTextoSimples6');
	if(article.style.width!="90%"){
		article.style.width="90%";
		article.style.height="450px";
		article.style.marginLeft="0%";
		setTimeout(function(){
			article.classList.remove('articleDatabases');
			article.classList.add('articleDatabaseOpen');
			//Formatar e manipular titulo ===================
			inicioTitulo.classList.add('inicioTitulo');
			inicioTitulo.style.marginLeft="0%";
			fimTitulo.classList.add('fimTitulo');
			//Fim -------------------------------------------
			//Formatar texto Download =======================
			let iconeBaixar=document.createElement('img');
			iconeBaixar.src="../imagens/iconeBaixar.png";
			iconeBaixar.classList.add('iconeBaixar');
			textDownload.classList.add('textDownload');
			textDownload.href="https://www.facebook.com"
			textDownload.target="blank";
			textDownload.appendChild(iconeBaixar);
			//Fim -------------------------------------------
			//Formatar texto conteudo =======================
			textoExplicativo.textContent="Este banco de dados é simples e possui apenas uma tabela"+
			" com os informações";
			textoExplicativo.classList.add('textoExplicativo');
			//Fim -------------------------------------------
			//Formatar video  ===============================
			video.id="videoDatabaseBasicos";
			video.src="../videos/VideoBancoDeDados6.mp4";
			video.classList.add('video');
			video.controls = true;
			//Fim -------------------------------------------
			//Formatar botao fechar imagens  =============================
			blockFechar.classList.add('blockFechar');
			blockFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			blockFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			blockFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			}
			imgFechar.src="../imagens/iconeSubir.png";
			imgFechar.classList.add('imgFechar');
			imgFechar.onmouseover=function(){
				blockFechar.style.opacity="0.7";
				imgFechar.style.opacity="0.7";
			};
			imgFechar.onmouseleave=function(){
				blockFechar.style.opacity="0.2";
				imgFechar.style.opacity="0.2";
			};
			imgFechar.onclick=function(){
				article.removeChild(textDownload);
				article.removeChild(textoExplicativo);
				article.removeChild(video);
				article.removeChild(blockImagens);
				article.removeChild(imgFechar);
				article.removeChild(blockFechar);
				article.style.width="60%";
				article.style.height="60px";
				article.style.marginLeft="13%";
				article.classList.remove('articleDatabaseOpen');
				article.classList.add('articleDatabases');
				inicioTitulo.style.marginLeft="30%";
				setTimeout(function (){
				 article.onclick=clickDatabasesBasico;
				},200);
			};
			//Fim -------------------------------------------
			//Formatar slide imagens  =============================
			blockImagens.classList.add('blockImagens');
			imagens.id="databaseTransacoes-1";
			imagens.src="../imagens/databases/transacionais/databaseTransacoes-1.png";
			imagens.classList.add('imagens');
			blockImagens.appendChild(imagens);
			iniciarManipulacaoSlide(blockImagens,imagens,'transacionais',5);
			//Fim -------------------------------------------
			article.appendChild(textDownload);
			article.appendChild(textoExplicativo);
			article.appendChild(video);
			article.appendChild(blockFechar);
			article.appendChild(imgFechar);
			article.appendChild(blockImagens);
		},500);
	}
}

//Métodos auxiliar para passar e voltar  imagens manipulando a string com id "imagensCakesTreats-1"
//cria e inicia o slide de imagens
function iniciarManipulacaoSlide(blocoMain,imagem,rotaBase,maxValue){
	let iconeVoltar= document.createElement('img');
	let iconePassar= document.createElement('img');
	let blocoPreto= document.createElement('div');
	blocoPreto.style.width="100%";
	blocoPreto.style.height="100%";
	blocoPreto.style.position="relative";
	blocoPreto.style.top="-100%";
	blocoPreto.style.opacity="0";
	blocoPreto.style.background="black";
	blocoPreto.style.borderRadius="20px";
	blocoPreto.style.transition="opacity 0.5s";
	blocoPreto.onmouseover=function (){
		iconePassar.style.opacity="0.4";
		iconeVoltar.style.opacity="0.4";
		blocoPreto.style.opacity="0.1";
	}
	blocoPreto.onmouseleave=function(){
		iconeVoltar.style.opacity="0";
		iconePassar.style.opacity="0";
		blocoPreto.style.opacity="0";
	}
	iconePassar.style.width="70px";
	iconePassar.style.height="70px";
	iconePassar.style.position="relative";
	iconePassar.style.top="-160%";
	iconePassar.style.left="72%";
	iconePassar.style.opacity="0";
	iconePassar.style.transition="opacity 0.5s";
	iconePassar.src="../imagens/iconePassar.png";
	iconePassar.onmouseover=function (){
		iconePassar.style.opacity="0.8";
		iconeVoltar.style.opacity="0.4";
		blocoPreto.style.opacity="0.1";
	}
	iconePassar.onmouseleave=function(){
		iconeVoltar.style.opacity="0";
		iconePassar.style.opacity="0";
		blocoPreto.style.opacity="0";
	}
	iconePassar.addEventListener('click',function(){passarFoto(imagem,rotaBase,maxValue)});
	iconeVoltar.style.width="70px";
	iconeVoltar.style.height="70px";
	iconeVoltar.style.position="relative";
	iconeVoltar.style.top="-160%";
	iconeVoltar.style.opacity="0";
	iconeVoltar.style.transition="opacity 0.5s";
	iconeVoltar.src="../imagens/iconeVoltar.png";
	iconeVoltar.onmouseover=function (){
		iconeVoltar.style.opacity="0.8";
		iconePassar.style.opacity="0.4";
		blocoPreto.style.opacity="0.1";
	}
	iconeVoltar.onmouseleave=function(){
		iconeVoltar.style.opacity="0";
		iconePassar.style.opacity="0";
		blocoPreto.style.opacity="0";
	}
	iconeVoltar.addEventListener('click',function(){voltarFoto(imagem,rotaBase)});
	blocoMain.appendChild(blocoPreto);
	blocoMain.appendChild(iconeVoltar);
	blocoMain.appendChild(iconePassar);
}
//metodo de passar foto universal	
function passarFoto(imagens,rotaBase,maxImagens){
	var resultadoSplit=imagens.id.split("-");
	if(resultadoSplit[1]!=maxImagens){
		var sum=parseInt(resultadoSplit[1])+1;
		imagens.src="../imagens/databases/"+rotaBase+"/"+resultadoSplit[0]+"-"+sum+".png";
		imagens.id=resultadoSplit[0]+"-"+sum;
	}
}
//metodo de voltar foto universal
function voltarFoto(imagens,rotaBase){
	var resultadoSplit=imagens.id.split("-");
	if(resultadoSplit[1]!=1){
		var sum=parseInt(resultadoSplit[1])-1;
		imagens.src="../imagens/databases/"+rotaBase+"/"+resultadoSplit[0]+"-"+sum+".png";
		imagens.id=resultadoSplit[0]+"-"+sum;
	}
}
//