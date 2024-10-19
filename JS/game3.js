function historia3(e) {
  var escolha = e.target.classList[4];
  console.log(escolha);
  if (escolha == "cen3_1") {
    construirCenario3_1(escolha);
  } else if (escolha == "cen3_2") {
    var escolha = prompt(`Escolha!
        1. Fugir desesperada
        2. Pergunta como sair`);
    construirCenario3_2(escolha);
  } else if (escolha == "cen3_3") {
    var escolha = prompt(`Escolha!
        1. Decidir confiar
        2. Decidir não confiar`);
    construirCenario3_3(escolha);
  } else if (escolha == "cen3_4") {
    construirCenario3_4(escolha);
  } else if (escolha == "cen3_5") {
    construirCenario3_5(escolha);
  } else if (escolha == "cen3_6") {
    construirCenario3_6(escolha);
  } else if (escolha == "cen3_7") {
    var escolha = prompt(`Escolha!
        1. Continuar
        2. Desistir de ir embora`);
    fim3_1(escolha);
  } else if (escolha == "cen3_8") {
    var escolha = prompt(`Escolha!
        1. Quem é você?
        2. Como sair daqui?`);
    construirCenario3_8(escolha);
  } else if (escolha == "cen3_9") {
    construirCenario3_9(escolha);
  } else if (escolha == "cen3_10") {
    var escolha = prompt(`Escolha!
        1. presentear com uma rosa eterna
        2. Desafiá-la num duelo`);
    construirCenario3_10(escolha);
  } else if (escolha == "cen3_11") {
    var escolha = prompt(`Escolha!
        1. Aceitar
        `);
    construirCenario3_12(escolha);
  } else if (escolha == "cen3_12") {
    jogar(escolha);
  }
}

function construirCenario3_1(escolha) {
  //cena de conversa da ceci

  btEscolha.classList.toggle("cen3_1");
  btEscolha.classList.toggle("cen3_2");
  chars[0].src = "imgs/CeciIdle.gif";
  chars[0].classList.toggle("inverter");
  chars[1].src = "imgs/npcMalicioso2.gif";
  chars[2].src = "imgs/npcMalicioso.gif";
  dialogo.innerHTML = `Após recobrar sua calma, a jovem começa a caminhar pela estrada deserta e escura até que se depara
    com dois monstros assustadores.`;
  btEscolha.innerHTML = "Escolha";
}

function construirCenario3_2(escolha) {
  //resultado escolha1 ceci

  var cen = escolha;
  if (cen == 1) {
    btEscolha.classList.toggle("cen3_2");
    btEscolha.classList.toggle("cen3_4");
    chars[0].src = "imgs/CeciIdle.gif";
    chars[0].classList.toggle("placeStart");
    chars[0].classList.toggle("inverter");
    chars[1].classList.toggle("alignStart");
    chars[1].src = "imgs/Meh.gif";
    chars[2].src = "imgs/npcMalicioso.gif";
    dialogo.innerHTML = `A jovem foge assustada sem nem mesmo se preocupar com o caminho adiante.`;
    btEscolha.innerHTML = "Continuar";
  } else if (cen == 2) {
    btEscolha.classList.toggle("cen3_2");
    btEscolha.classList.toggle("cen3_3");
    chars[0].src = "imgs/CeciIdle.gif";
    chars[1].classList.toggle("alignCenter");
    chars[1].src = "imgs/Ok.gif";
    chars[2].src = "imgs/npcMalicioso.gif";
    dialogo.innerHTML = `Ceci pergunta aos monstros como sair dali. Ambos olham sombriamente a jovem e apontam um caminho.
        A garota sente uma pontada de malícia.`;
    btEscolha.innerHTML = "Continuar";
  }
}

function construirCenario3_3(escolha) {
  //cenario ela pergnta como sair, resultado se ela confiar ou não

  var cen = escolha;
  if (cen == 1) {
    btEscolha.classList.toggle("cen3_3");
    gameOver3_1();
  } else if (cen == 2) {
    btEscolha.classList.toggle("cen3_3");
    btEscolha.classList.toggle("cen3_4");
    btEscolha.id = "especial";
    chars[0].src = "imgs/CeciIdle.gif";
    chars[1].classList.toggle("placeStart");
    chars[1].classList.toggle("inverter");
    chars[1].src = "imgs/No1.gif";
    chars[2].src = "imgs/npcMalicioso.gif";
    dialogo.innerHTML = `Ceci guarda a má impressão daqueles dois e decide não ir pelo caminho apontado. 
        Quando sai de vista deles, desvia a direção e decide seguir seu próprio caminho.`;
    btEscolha.innerHTML = "Continuar";
  }
}

function construirCenario3_4(escolha) {
  //Cena do covil de um ser repugnante;

  if (btEscolha.id == "especial") {
    //não se falam
    btEscolha.classList.toggle("cen3_4");
    btEscolha.classList.toggle("cen3_5");
    chars[0].src = "imgs/CeciIdle.gif";
    //chars[0].classList.toggle("inverter");
    chars[0].classList.toggle("placeEnd");
    chars[1].classList.toggle("alignStart");
    chars[1].classList.toggle("placeStart");
    chars[1].classList.toggle("inverter");
    chars[1].src = "imgs/Panic.gif";
    chars[2].src = "imgs/npcRepugnante.gif";
    dialogo.innerHTML = `Caminhando Ceci chega à toca de um ser repugnane. Malgrado a aparência ele parece ter uma calma
        que a jovem não vira em nenhum habitante daquela região.`;
    btEscolha.innerHTML = "Continuar";
  } else {
    //vocês começam a conversar escolha quem é ele ou como sair daqui
    btEscolha.classList.toggle("cen3_4");
    btEscolha.classList.toggle("cen3_8");
    chars[0].src = "imgs/CeciIdle.gif";
    chars[0].classList.toggle("inverter");
    chars[0].classList.toggle("placeEnd");
    chars[1].classList.toggle("placeStart");
    chars[1].src = "imgs/Shh.gif";
    chars[1].classList.toggle("inverter");
    chars[2].src = "imgs/npcRepugnante.gif";
    dialogo.innerHTML = `Sua fuga resulta num encontro estranho com um ser misteroso. Ele te acalma conversa contigo.`;
    btEscolha.innerHTML = "Continuar";
  }
}

function construirCenario3_5(escolha) {
  //ceci apenas vai embora

  btEscolha.classList.toggle("cen3_5");
  btEscolha.classList.toggle("cen3_6");
  chars[0].src = "imgs/CeciIdle.gif";
  chars[0].classList.toggle("inverter");
  chars[1].src = "imgs/Hum.gif";
  chars[1].classList.toggle("placeStart");
  chars[2].src = "imgs/npcRepugnante.gif";
  dialogo.innerHTML = `O Ser diz que é um não-morto. Explica que a jovem está em Nilffiheim, lar dos mortos e não há como sair dali.
    Ceci contudo dá de ombros e não se importa com o que ele diz. "Nada que eles digam me interessa" pensa a garota.`;
  btEscolha.innerHTML = "continua";
}

function construirCenario3_6(escolha) {
  //Após muito tempo percorrendo o mundo dos mortos Ceci pensa
  if (btEscolha.id == "especial1") {
    btEscolha.classList.toggle("cen3_6");
    btEscolha.classList.toggle("cen3_7");
    chars[0].src = "imgs/arvore.gif";
    chars[1].src = "imgs/Hmm.gif";
    chars[1].classList.toggle("inverter");
    chars[2].src = "imgs/CeciIdle.gif";
    chars[2].classList.toggle("placeStart");
    dialogo.innerHTML = `Dias após o ocorrido, Ceci entende sua condição e começa a pensar se o destino dela é realmente esse.`;
    btEscolha.innerHTML = "Escolha";
  } else {
    btEscolha.classList.toggle("cen3_6");
    btEscolha.classList.toggle("cen3_7");
    chars[0].src = "imgs/CeciIdle.gif";
    chars[1].src = "imgs/Hmm.gif";
    chars[1].classList.toggle("inverter");
    chars[2].src = "imgs/arvore.gif";
    chars[2].classList.toggle("inverter");
    dialogo.innerHTML = "Ceci pensa sobre sua jornada";
    btEscolha.innerHTML = "Escolha";
  }
}

function construirCenario3_8(escolha) {
  //resultado escolha
  var cen = escolha;
  if (cen == 1) {
    btEscolha.classList.toggle("cen3_8");
    btEscolha.classList.toggle("cen3_9");
    chars[0].src = "imgs/CeciIdle.gif";
    chars[1].src = "imgs/Lit.gif";
    chars[2].src = "imgs/npcRepugnante.gif";
    dialogo.innerHTML = `O Ser conta sua história. Ele era um guerreiro Wootan que descobriu como chegar em Nilffiheim tentando procurar
        seu irmão. Para falar com ele, venceu a morte, mas esse desejo lhe custou o único direito que tinha adquirido com a
        vitória do duelo. Portanto nunca mais retornou para casa. Ceci escuta a tudo atentamente.`;
    btEscolha.innerHTML = "Continuar";
  } else if (cen == 2) {
    btEscolha.classList.toggle("cen3_8");
    btEscolha.classList.toggle("cen3_5");
    chars[0].src = "imgs/CeciIdle.gif";
    chars[0].classList.toggle("inverter");
    chars[0].classList.toggle("placeStart");
    chars[1].src = "";
    chars[1].classList.toggle("inverter");
    chars[2].src = "imgs/npcRepugnante.gif";
    chars[1].classList.toggle("removealign");
    chars[1].classList.toggle("removeplace");
    dialogo.innerHTML = `A criatura diz que o melhor para ela era se desfazer dessa ideia.`;
    btEscolha.innerHTML = "Continuar";
  }
}

function construirCenario3_9(escolha) {
  //cena do encontro com a morte

  btEscolha.classList.toggle("cen3_9");
  btEscolha.classList.toggle("cen3_10");
  chars[0].src = "imgs/CeciIdle.gif";
  //chars[0].classList.toggle("inverter")
  chars[1].src = "";
  chars[2].src = "imgs/Death.gif";
  dialogo.innerHTML = `Seguindo os passos do guerreiro, Ceci encontra a Morte e precisa chamar sua atenção.`;
  btEscolha.innerHTML = "Escolha";
}

function construirCenario3_10(escolha) {
  //cena resultado da decisão sobre a morte

  var cen = escolha;
  if (cen == 1) {
    btEscolha.classList.toggle("cen3_10");
    gameOver3_2();
  } else if (cen == 2) {
    btEscolha.classList.toggle("cen3_10");
    btEscolha.classList.toggle("cen3_11");
    chars[0].src = "imgs/CeciIdle.gif";
    //chars[0].classList.toggle("inverter")
    chars[1].src = "";
    chars[2].src = "imgs/Death.gif";
    dialogo.innerHTML = `"Acha que pode desafiar a morte? Certo, que tal um jogo?" pergunta a morte orgulhosamente.`;
    btEscolha.innerHTML = "Escolha";
  }
}

function construirCenario3_12(escolha) {
  //A morte prepara o jogo

  var cen = escolha;

  if (cen == 1) {
    btEscolha.classList.toggle("cen3_11");
    btEscolha.classList.toggle("cen3_12");
    chars[0].src = "imgs/CeciIdle.gif";
    //chars[0].classList.toggle("inverter")
    chars[1].src = "";
    chars[2].src = "imgs/Death.gif";
    dialogo.innerHTML = `"Diga 3 números e tente acertar": `;
    btEscolha.innerHTML = "Continue";
  }
}

function fim3_1(escolha) {
  //resultado final da decisão 1 continua 2 desiste

  var cen = escolha;

  if (cen == 1) {
    btEscolha.classList.toggle("cen3_7");
    btEscolha.innerHTML = "Game Over";
    chars[0].src = "imgs/CeciIdle.gif";
    chars[0].classList.toggle("placeEnd");
    chars[1].src = "imgs/Pif.gif";
    chars[2].src = "imgs/arvore.gif";
    dialogo.innerHTML = `Independente de como seja seu caminho, a jovem é obstinada e seu desejo de voltar pra casa
        é tão grande quanto a eternidade. Ceci inicia uma jornada infinita.`;
  } else if (cen == 2) {
    btEscolha.classList.toggle("cen3_7");
    btEscolha.innerHTML = "Game Over";
    chars[0].src = "imgs/CeciIdle.gif";
    chars[1].src = "imgs/Desp.gif";
    chars[1].classList.toggle("alignCenter");
    chars[2].src = "imgs/arvore.gif";
    dialogo.innerHTML = `Ceci aceita sua condição atual. O que lhe resta é descobrir o que fazer com a eternidade 
        repleta de seres hediondos.`;
  }
}

function gameOver3_1() {
  //cena em que ceci é aprisionada eternamente;

  chars[0].src = "imgs/CeciIdle.gif";
  chars[0].classList.toggle("inverter");
  chars[1].src = "imgs/Panic.gif";
  chars[1].classList.toggle("placeStart");
  chars[2].src = "imgs/devorador.gif";
  dialogo.innerHTML = `Apesar da má impressão, a jovem decide confiar nos monstros. Seguindo o caminho apontado acaba
    caindo numa cratera e das sombras salta um monstro que a aprisiona eternamente.`;
  btEscolha.innerHTML = "Game Over";
}

function gameOver3_2() {
  //a morte transforma a ceci em whisper

  if (btEscolha.id == "especial") {
    btEscolha.classList.remove("cen3_12");
    dialogo.innerHTML = ` "Vencer a morte... crianças" sibila a morte, e tranforma Ceci num miserável Whisper.`;
  } else {
    btEscolha.classList.toggle("0");

    dialogo.innerHTML = `"NÃO HÁ NADA MAIS OFENSIVO DO QUE A ETERNIDADE!" exclama a morte. E transforma Ceci num miserável Whisper.`;
  }
  btEscolha.innerHTML = "Game Over";
  chars[0].src = "imgs/whisper.gif";
  chars[0].classList.toggle("inverter");
  chars[1].src = "imgs/Whisp.gif";
  chars[1].classList.toggle("inverter");
  chars[1].classList.toggle("alignStart");
  chars[1].classList.toggle("alignEnd");
  chars[2].src = "imgs/Death.gif";
}

function jogar(escolha) {
  btEscolha.id = "especial";

  var i = 0;
  while (i < 3) {
    var n = Math.floor(Math.random() * 6);
    var sugestao = prompt(`Diga um número de 0 a 5`);
    if (sugestao == n) {
      fim3_E();
      break;
    } else {
      i++;
      gameOver3_2();
    }
    console.log(sugestao);
    console.log(n);
  }
}

function fim3_E() {
  btEscolha.innerHTML = "Game Over";
  chars[0].src = "imgs/Cecialive.gif";
  chars[0].classList.toggle("inverter");
  chars[1].src = "imgs/woods.gif";
  chars[1].classList.toggle("placeStart");
  chars[2].src = "imgs/Lib.gif";
  dialogo.innerHTML = `Ceci vence a morte no jogo e volta à vida. Entretanto não se lembra do que aconteceu em Nilffihem
    exceto por uns fragmentos que vêm em seus sonhos. Mas nada disso importa mais.`;
}
