function startGame() {
    if (!jaFoiClicado) {
        setTimeout(function () {            
            menuStart.classList.add("invisivel");
            principal.classList.add("principalPersonagem");
            personagemEscolha.classList.remove("invisivel");
            botaoRetornar.parentElement.classList.remove("invisivel");
        }, 4000);
        audio1.play();
        audio1.volume = 0.1;
        jaFoiClicado = true;
    }
}

function personagemSelecionar() {
    personagemEscolha.classList.add("invisivel");
    audio1.currentTime = 0;
    audio1.pause();
    jaFoiClicado = false;
    load.classList.toggle("invisivel");
    setTimeout(function(){
        load.classList.toggle("invisivel");    
    }, 2000 )  
    setTimeout(function(){
        gameScreen.classList.toggle("invisivel")        
    }, 2002);
}  

botaoStart.addEventListener("click", startGame);

for(var i = 0; i < botoesSelecao.length; i++){
    botoesSelecao[i].addEventListener("click", capturarBotao);
    botoesSelecao[i].addEventListener("click", personagemSelecionar);
}
