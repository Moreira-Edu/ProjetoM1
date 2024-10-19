//variaveis funcionais
var jaFoiClicado = false;
var audio1 = new Audio();
audio1.src = "BGM/RagLoginTheme.mp3";

//

//sobre o projeto
var botaoSobre = document.querySelector(".botaoSobre");
botaoSobre.addEventListener("click", function () {
  var sobre = document.querySelector("#cartaoSobre");
  sobre.classList.toggle("invisivel");
});

//startScreen
var principal = document.querySelector(".principal");
var menuStart = document.querySelector(".menuStart");
var botaoStart = document.querySelector(".botaoStart");
var botaoRetornar = document.querySelector(".botaoRetornar");



//CharSelectionScreen
var cartaoSelecao = document.querySelector(".cartaoSelecao");
var personagemEscolha = document.querySelector(".personagemEscolha");
var botoesSelecao = cartaoSelecao.querySelectorAll("article");


//loadScreen

var load = document.querySelector(".loadScreen");

//gameScreen
var gameScreen = document.querySelector(".mainGameScreen");
var gameActing = document.querySelector(".gameActing");
var btEscolha = document.querySelector(".escolha");
var btContinuar = document.querySelector(".continue")
var dialogo = document.querySelector(".dialogos");
var personagens = document.querySelector(".cenario");
var chars = personagens.querySelectorAll("img");











//parar musica e ativar botao
function pararMusica() {
  audio1.currentTime = 0;
  audio1.pause();
  jaFoiClicado = false;
}

