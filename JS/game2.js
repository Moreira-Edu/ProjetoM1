function historia2(e) {
    var escolha = e.path[0].classList[4]
    console.log(escolha)
    if (escolha == "cen2_1") {
        var escolha = prompt(`Escolha!
            1. Entrar no portal
            2. ir embora`);
        construirCenario2_2(escolha)
    } else if (escolha == "cen2_2") {
        construirCenario2_3(escolha)
    } else if (escolha == "cen2_3") {
        var escolha = prompt(`Escolha!
            1. Voltar e entrar no portal
            2. Seguir seu irmão`);
        construirCenario2_4(escolha);
    } else if (escolha == "cen2_4") {
        construirCenario2_5(escolha);
    } else if (escolha == "cen2_5") {
        var escolha = prompt(`Escolha!
            1. Seguir sua irmã
            2. Ir ao vilarejo buscar ajuda`);
        construirCenario2_6(escolha);
    } else if (escolha == "cen2_6") {
        var escolha = prompt(`Escolha!
            1. ajudar
            2. não ajudar`);
        construirCenario2_8(escolha);
    } else if (escolha == "cen2_7") {
        construirCenario2_9(escolha);
    } else if (escolha == "cen2_8") {
        construirCenario2_10(escolha);
    } else if (escolha == "cen2_9") {
        var escolha = prompt(`Escolha!
            1. Roubar com sua irmã
            2. Não ajudar`);
        construirCenario2_11(escolha);
    } else if (escolha == "cen2_10") {
        construirCenario2_12(escolha);
    } else if (escolha == "cen2_11") {
        construirCenario2_13(escolha);
    } else if (escolha == "cen2_12") {
        var escolha = prompt(`Escolha!
            1. Ajudar sua irmã a cortar
            2. impedir`);
        construirCenario2_14(escolha);
    } else if (escolha == "cen2_13") {
        construirCenario2_15(escolha);
    } else if (escolha == "fim2_3") {

        fim2_3(escolha);
    } else if (escolha == "cen2_14") {
        construirCenario2_16(escolha);
    } else if (escolha == "cen2_15") {
        construirCenario2_17(escolha);
    } else if (escolha == "cen2_16") {
        construirCenario2_18(escolha);
    } else if (escolha == "fim2_4") {
        var escolha = prompt(`Escolha!
            1. Decide ficar
            2. Decide ir`);
        fim2_4(escolha);
    } else if (escolha == "gameOver1") {

        gameOver2_1(escolha);
    } else if (escolha == "gameOver2") {

        gameOver2_2(escolha);
    }
}


function construirCenario2_2(escolha) {
    

    var cen = escolha
    if (cen == 1) {
        btEscolha.classList.toggle("cen2_1");
        construirCenario2_7();
    } else if (cen == 2) {
        btEscolha.classList.toggle("cen2_1");
        btEscolha.classList.toggle("cen2_2");
        chars[0].src = "imgs/CONDOR.gif";
        chars[1].src = "imgs/gPlant.gif";
        chars[2].classList.toggle("inverter");
        chars[2].src = "imgs/kids1.gif";
        btEscolha.innerHTML = "Continuar"
        dialogo.innerHTML = `O irmão convence Ceci a não entrar e voltar para o vilarejo. Ceci concorda mesmo contrariada.`;

    }
}

function construirCenario2_3(escolha) {
  

    btEscolha.classList.toggle("cen2_2");
    btEscolha.classList.toggle("cen2_3");
    btEscolha.innerHTML = "Escolha";
    chars[0].src = "imgs/kidF.gif";
    chars[0].classList.toggle("placeEnd");
    chars[1].src = "imgs/Lit.gif";
    chars[1].classList.toggle("placeStart");
    chars[1].classList.toggle("inverter");
    chars[2].src = "imgs/kidM.gif";
    dialogo.innerHTML = `Entretanto Ceci é tomada por um ímpeto de curiosidade. A criança conhece as lendas sobre os portais dos Labirintos
    de prontera e seus caminhos para mundos místicos.`;
}


function construirCenario2_4(escolha) {


    var cen = escolha
    if (cen == 1) {
        btEscolha.classList.toggle("cen2_3");
        btEscolha.classList.toggle("cen2_4");
        btEscolha.innerHTML = "Continuar";
        chars[0].src = "imgs/kidF.gif";
        chars[1].src = "imgs/Portal.gif";
        chars[1].classList.toggle("inverter");
        chars[1].classList.toggle("alignEnd");
        chars[2].src = "imgs/gPlant.gif";
        chars[2].classList.toggle("placeStart");
        chars[2].classList.toggle("inverter");
        chars[2].classList.toggle("alignEnd");
        dialogo.innerHTML = `Ceci é vencida pelo ímpeto e corre até o portal. Deixando seu irmão para trás.`;

    } else if (cen == 2) {
        fim2_1();
    }
}

function construirCenario2_5() {
 
    btEscolha.classList.toggle("cen2_4");
    btEscolha.classList.toggle("cen2_5");
    btEscolha.innerHTML = "Escolha";
    chars[0].src = "imgs/kidM.gif";
    chars[1].src = "imgs/Portal.gif";
    chars[1].classList.toggle("alignStart");
    chars[2].src = "imgs/gPlant.gif";
    dialogo.innerHTML = `Doko corre atrás da irmã e a vê entrar no portal. Assustado ele para e pensa se a segue ou se chama por ajuda.`;
}


function construirCenario2_6(escolha) {
   

    var cen = escolha
    if (cen == 1) {
        btEscolha.classList.toggle("cen2_5");
        construirCenario2_7();

    } else if (cen == 2) {
        fim2_2();

    }
}

function construirCenario2_7() {
    btEscolha.classList.toggle("cen2_6");
    btEscolha.innerHTML = "Esolha";
    chars[0].src = "imgs/kids1.gif";
    chars[0].classList.add("inverter");
    chars[1].src = "imgs/bonfire.gif";
    chars[2].src = "imgs/leaf1.gif";
    dialogo.innerHTML = `Doko atravessa o portal com a irmã e juntos encontram uma criatura curiosa. Ela se apresenta. Seu nome é Leaf.
    Ela pede ajuda às crianças.`;
}

function construirCenario2_8(escolha) {
    

    var cen = escolha
    if (cen == 1) {
        btEscolha.classList.toggle("cen2_6");
        btEscolha.classList.toggle("cen2_7");
        chars[0].src = "imgs/kidF.gif";
        chars[1].src = "imgs/kidM.gif";
       
        chars[2].src = "imgs/leaf1.gif";
        btEscolha.innerHTML = "Continuar"
        dialogo.innerHTML = `Os irmãos decidem ajudar. Mas Doko não se sente confortável com a criatura.`;

    } else if (cen == 2) {
        btEscolha.classList.toggle("cen2_6");
        btEscolha.classList.toggle("cen2_7");
        chars[0].src = "imgs/kidF.gif";
        chars[1].src = "imgs/kidM.gif";
      
        chars[2].src = "imgs/leaf1.gif";
        btEscolha.innerHTML = "Continuar"
        dialogo.innerHTML = `Doko não quer ajudar. Mas Ceci simplesmente ignora.`;

    }
}



function construirCenario2_9() {
   
    btEscolha.classList.toggle("cen2_7");
    btEscolha.classList.toggle("cen2_8");
    btEscolha.innerHTML = "continuar";
    chars[0].src = "imgs/kidM.gif";
    chars[1].src = "imgs/leaf1.gif";
    chars[2].src = "imgs/kidF.gif";
    dialogo.innerHTML = `Leaf dá sua primeira tarefa. Um ser chamado Tamadora está com um item chamado desejo estelar.
    Sem ele, Leaf não pode ficar forte. "Ela omite detalhes" Doko pensa. Mas a irmã apenas quer saber onde encontrar a criatura.`;
}

function construirCenario2_10() {
    
    btEscolha.classList.toggle("cen2_8");
    btEscolha.classList.toggle("cen2_9");
    btEscolha.innerHTML = "Escolha";
    chars[0].src = "imgs/StarTamadora.gif";
    chars[1].src = "imgs/kidM.gif";
    chars[2].src = "imgs/kidF.gif";
    dialogo.innerHTML = `Ceci e Doko seguem o caminho indicado. Encontram Tamadora que parece ser uma criatura gentil. 
    Porém se recusa a entregar o desejo. A garota não hesita, lança-se para cima de Tamadora afim de lhe tomar a força o item.`;
}


function construirCenario2_11(escolha) {
    

    var cen = escolha;
    if (cen == 1) {
        btEscolha.classList.toggle("cen2_9");
        btEscolha.classList.toggle("cen2_10");
        btEscolha.id = "especial"
        chars[0].src = "imgs/kidF.gif";
        chars[1].src = "imgs/MonsterTamadora.gif";
        chars[2].src = "imgs/kidM.gif";
        btEscolha.innerHTML = "Continuar"
        dialogo.innerHTML = `Sem o desejo estelar Tamadora se torna um monstro. Graças à distração gerada por Doko a irmã foge.`;

    } else {
        btEscolha.classList.toggle("cen2_9");
        btEscolha.classList.toggle("cen2_10");
        chars[0].src = "imgs/kidF.gif";
        chars[1].src = "imgs/kidM.gif";
        chars[2].src = "imgs/MonsterTamadora.gif";
        btEscolha.innerHTML = "Continuar"
        dialogo.innerHTML = `Tamadora sem o Desejo se torna um monstro. Doko se joga na frente da irmã e a salva.
        O item é abandonado na confusão`;
    }
}

function construirCenario2_12(escolha) {
   

    if (btEscolha.id == "especial") {
        chars[0].src = "imgs/leaf2.gif";
        dialogo.innerHTML = `Doko e Ceci voltam para Leaf vitoriosos. A criatura não demonstra impressão e dá aos jovens guerreiros
        uma nova missão. Um parasita pula de árvore em árvore devorando a força vital da terra. "A oeste ele se encontra"
        encerra a planta olhando o por do sol com um brilho estranho.`;
    } else {
        chars[0].src = "imgs/leaf1.gif";
        dialogo.innerHTML = `Doko e Ceci voltam para Leaf. A criatura decepcionada se resigna e dá aos gêmeos uma nova missão.
        Um parasita pula de árvore em árvore devorando a força vital da terra. "A oeste ele se encontra" encerra a planta rainha
        com um olhar desafiante para os irmãos.`;
    }
    btEscolha.classList.toggle("cen2_10");
    btEscolha.classList.toggle("cen2_11");
    btEscolha.innerHTML = "continuar";
    chars[1].src = "imgs/kidM.gif";
    chars[2].src = "imgs/kidF.gif";

}

function construirCenario2_13() {
   
    btEscolha.classList.toggle("cen2_11");
    btEscolha.classList.toggle("cen2_12");
    btEscolha.innerHTML = "Escolha";
    chars[0].src = "imgs/ParasiteG.gif";
    chars[1].src = "imgs/kidM.gif";
    chars[2].src = "imgs/kidF.gif";
    dialogo.innerHTML = `Seguindo a Oeste vocês encontram a criatura. Parece uma fada. Doko parece achar incorreto exterminar
    o ser planta. Entretanto a irmã pula com a lâmina em punhos, sem pensar.`;
}

function construirCenario2_14(escolha) {
    
    var cen = escolha;
    if (cen == 1 && btEscolha.id == "especial") {

        btEscolha.classList.toggle("cen2_12");
        btEscolha.classList.toggle("cen2_14");
        chars[0].src = "imgs/ParasiteM.gif";
        btEscolha.innerHTML = "continuar";
        chars[1].src = "imgs/kidM.gif";
        chars[2].src = "imgs/kidF.gif";
        dialogo.innerHTML = `Com a liderança da irmã, Doko pula no parasita que agora descolado da terra se revela um monstro.
        Com a força dos dois o monstro é liquidado.`;
    } else if (cen == 1) {
        btEscolha.id = "especial";
        btEscolha.classList.toggle("cen2_12");
        btEscolha.classList.toggle("cen2_13");
        chars[0].src = "imgs/ParasiteM.gif";
        btEscolha.innerHTML = "continuar";
        chars[1].src = "imgs/kidM.gif";
        chars[2].src = "imgs/kidF.gif";
        dialogo.innerHTML = "vcs  ceifam o parasita e este revela sua forma, o trabalho. Dessa vez o trabalho é feito";
    } else if (cen == 2) {
        btEscolha.classList.toggle("cen2_12");
        btEscolha.classList.toggle("cen2_13");
        chars[0].src = "imgs/ParasiteG.gif";
        dialogo.innerHTML = "vcs deixam a criatura planta em paz e voltam para Leaf.";
        btEscolha.innerHTML = "continuar";
        chars[1].src = "imgs/kidM.gif";
        chars[2].src = "imgs/kidF.gif";

    }

}

function construirCenario2_15(escolha) {



    if (btEscolha.id == "especial") {
        chars[0].src = "imgs/leaf2.gif";
        btEscolha.classList.toggle("cen2_13");
        btEscolha.classList.toggle("fim2_3");        
    } else {
        chars[0].src = "imgs/leaf1.gif";
        btEscolha.classList.toggle("cen2_13");
        btEscolha.classList.toggle("fim2_3");
    }
    chars[1].src = "imgs/kidM.gif";
    chars[2].src = "imgs/kidF.gif";
    btEscolha.innerHTML = "Continuar"
    dialogo.innerHTML = `Os irmãos falham com a rainha. Triste, a rainha explica sua ambição.
    Um dragão corruptor roubou sua verdadeira forma. Os monstros que os gêmeos encontraram pelo caminho são frutos
    de sua corrupção.`;
}


function construirCenario2_16() {
    btEscolha.classList.toggle("cen2_14");
    btEscolha.classList.toggle("cen2_15");
    btEscolha.innerHTML = "Continuar";
    chars[0].src = "imgs/leaf3.gif";   
    chars[1].src = "imgs/kidF.gif";
    chars[2].src = "imgs/kidM.gif";
    dialogo.innerHTML = `Vocês retornam à Leaf agora completamente mudada. O poder fluindo nela é sublime. A rainha planta
    conta o porquê de ir atrás dessas criaturas. Um dragão corruptor havia roubado sua verdadeira forma. Os monstros encontrados até agora
    eram frutos de sua corrupção.`;
}

function construirCenario2_17() {
    btEscolha.classList.toggle("cen2_15");
    btEscolha.classList.toggle("cen2_16");
    btEscolha.innerHTML = "Continuar";
    chars[0].src = "imgs/Dragon.gif";    
    chars[1].src = "imgs/leaf3.gif";
    chars[2].src = "imgs/kids1.gif";
    dialogo.innerHTML = `Leaf e os gêmeos vão até o dragão. Com sua força totalmente restituída, Leaf não tem dificuldades
    para abater o monstro.`;
}

function construirCenario2_18() {
    btEscolha.classList.toggle("cen2_16");
    btEscolha.classList.toggle("fim2_4");
    btEscolha.innerHTML = "Escolha";
    chars[0].src = "imgs/leafQ.gif";    
    chars[1].src = "imgs/bonfire.gif";
    chars[2].src = "imgs/kids1.gif";
    dialogo.innerHTML = `Com os poderes restituídos, Leaf pode conceder aos irmãos a possibilidade de retornar para casa. 
    Doko se pronuncia:`;
}





function fim2_1() {
    btEscolha.classList.toggle("cen2_3");
    chars[0].src = "imgs/gPlant.gif";
    chars[1].src = "imgs/kids1.gif";
    chars[2].classList.toggle("inverter");
    chars[2].src = "imgs/gPlant.gif";
    btEscolha.innerHTML = "Game Over";
    dialogo.innerHTML = `Ainda sim o conselho do seu irmão pulsa mais alto. Vocês seguem o caminho para casa e assim chegam. Sãos e salvo.`;

}

function fim2_2() {
    btEscolha.classList.toggle("cen2_5");
    chars[0].src = "imgs/kidM.gif";
    chars[1].src = "imgs/elder.gif";
    chars[2].classList.toggle("inverter");
    chars[2].src = "imgs/dog.gif";
    btEscolha.innerHTML = "Game Over";
    dialogo.innerHTML = `Doko vai até o vilarejo pedir ajuda. Os moradores vão até onde o garoto apontou o portal. No entanto 
    não encontram nada no lugar. O portal provavelmente se fechara prendendo a irmã no outro lado para sempre.`;

}

function fim2_3() {

    btEscolha.classList.toggle("fim2_3")

    if (btEscolha.id == "especial") {
        chars[1].src = "imgs/leaf2.gif";
        btEscolha.classList.toggle("gameOver2");


    } else {
        chars[1].src = "imgs/leaf1.gif";
        btEscolha.classList.toggle("gameOver1");
    }
    chars[0].src = "imgs/Dragon.gif";    
    chars[2].src = "imgs/kids1.gif";
    dialogo.innerHTML = `Sem opção a não ser enfrentar o Dragão, Leaf parte para a batalha final. Os irmãos decidem ajudar.`;

}

function gameOver2_1(escolha) {
    btEscolha.classList.toggle("gameOver1");
    btEscolha.innerHTML = "Game Over";
    chars[0].src = "";
    chars[1].src = "imgs/Dragon.gif";
    chars[2].src = "";
    dialogo.innerHTML = `O dragão derrota Doko, Ceci e Leaf que não possuia qualquer poder. Nada pode parar sua corrupção que destrói 
    aquele mundo e fecha os portais.`;
}


function gameOver2_2(escolha) {
    btEscolha.classList.toggle("gameOver2");
    chars[0].src = "imgs/kidM.gif";
    chars[1].src = "imgs/leaf2.gif";
    chars[2].classList.toggle("inverter");
    chars[2].src = "imgs/Grave.gif";
    btEscolha.innerHTML = "Game Over"
    dialogo.innerHTML = `A batalha foi dura e com muitas dificuldades para a rainha. O Dragão é aniquilado mas 
    Doko perde sua irmã. O jovem guerreiro volta pra casa com pesar.`;
}

function fim2_4(escolha) {
    var cen = escolha
    if (cen == 1) {
        btEscolha.classList.toggle("fim2_4");
        chars[0].src = "imgs/kidFg.gif";
        chars[1].src = "imgs/leafQ.gif";
        chars[2].classList.toggle("inverter");
        chars[2].src = "imgs/kidMg.gif";
        btEscolha.innerHTML = "Game Over";
        dialogo.innerHTML = `A irmã concorda aliviada com a decisão de Doko. Ambos são transformados seres poderosos protetores
        e sabedores dos segredos da Rainha Leaf.`;
    } else if (cen == 2) {
        btEscolha.classList.toggle("fim2_4");
        chars[0].src = "imgs/kidF.gif";
        chars[1].src = "imgs/kidM.gif";
        chars[2].classList.toggle("inverter");
        chars[2].src = "imgs/Portal.gif";
        btEscolha.innerHTML = "Game Over";
        dialogo.innerHTML = `Doko decide ir embora. A irmã, no entanto, não. Seu irmão a olha admirado. Agora a compreende
        completamente. Dá o último abraço e um adeus. Volta para o vilarejo e conta o que aconteceu na floresta.`;
    }

}

