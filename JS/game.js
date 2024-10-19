function capturarBotao(EventTarget) {
  botao = EventTarget;
  botao = EventTarget.target.id;

  if (botao == "personagem1") {
    botao = 1;
  } else if (botao == "personagem2") {
    botao = 2;
  } else if (botao == "personagem3") {
    botao = 3;
  }
  construirCenario(botao);
}

function construirCenario(botao, cen) {
  cen = botao;
  if (cen == 1) {
    chars[0].src = "imgs/mMageBattle.gif";
    chars[0].classList.add("inverter");
    chars[1].src = "imgs/orcLadyViva.gif";
    chars[2].src = "imgs/orcWarriorVivo.gif";
    chars[2].classList.toggle("placeStart");
    chars[2].classList.toggle("alignCenter");
    dialogo.style.fontStyle = "italic";
    dialogo.classList.add("texto");
    dialogo.innerHTML = `Ao retornar de Juno, Arjen desce em Izlude e decide ir caminhando para Geffen.
        Já há algum tempo na estrada, chega aos arredores da vila Orc e depara-se com um casal na estrada babulciando sonoramente. "E agora" ele pensa
        ... "talvez seja um ataque"`;
    btEscolha.classList.toggle("cen1_1");
    btEscolha.addEventListener("click", historia1);
  } else if (cen == 2) {
    chars[0].src = "imgs/kids1.gif";
    chars[0].classList.add("inverter");
    chars[1].src = "imgs/gPlant.gif";
    chars[2].src = "imgs/Portal.gif";
    dialogo.style.fontStyle = "italic";
    dialogo.classList.add("texto");
    dialogo.innerHTML = `Doko e Ceci brincavam nos arredores do Labirinto de Prontera quando encontraram um portal. 
        Ceci decide entrar, mas o irmão fica hesitante.`;
    btEscolha.classList.toggle("cen2_1");
    btEscolha.addEventListener("click", historia2);
  } else if (cen == 3) {
    chars[0].src = "imgs/arvore.gif";
    chars[1].src = "imgs/bonfire.gif";
    chars[2].src = "imgs/CeciIdle.gif";
    dialogo.style.fontStyle = "italic";
    dialogo.classList.add("texto");
    dialogo.innerHTML = "Ceci acorda confusa e assustada em um lugar estranho.";
    btEscolha.innerHTML = "Continuar";
    btEscolha.classList.toggle("cen3_1");
    btEscolha.addEventListener("click", historia3);
  }
}

function historia1(e) {
  var escolha = e.target.classList[4];
  if (escolha == "cen1_1") {
    var escolha = prompt(`Escolha!
            1. Revidar
            2. Conversar`);

    construirCenario1_2(escolha);
  } else if (escolha == "cen1_2") {
    construirCenario1_3(escolha);
  } else if (escolha == "cen1_3") {
    gameOver1(escolha);
  } else if (escolha == "cen1_4") {
    construirCenario1_4(escolha);
  } else if (escolha == "cen1_5") {
    construirCenario1_5(escolha);
  } else if (escolha == "cen1_6") {
    var escolha = prompt(`Escolha!
        1. Lanças de fogo
        2. Lanças de gelo`);
    construirCenario1_6(escolha);
  } else if (escolha == "cen1_7") {
    construirCenario1_7(escolha);
  } else if (escolha == "cen1_8") {
    var escolha = prompt(`Escolha!
        1. Persegue
        2. Ignora`);
    construirCenario1_8(escolha);
  } else if (escolha == "cen1_9") {
    gameOver2(escolha);
  } else if (escolha == "cen1_10") {
    construirCenario1_10(escolha);
  } else if (escolha == "cen1_11") {
    var escolha = prompt(`Escolha!
        1. Tenta continuar o caminho de volta pra casa
        2. Decide desansar na ilha do Natal`);
    construirCenario1_11(escolha);
  } else if (escolha == "fimE") {
    fimE(escolha);
  } else if (escolha == "fim1") {
    fim1(escolha);
  } else if (escolha == "fim2") {
    fim2(escolha);
  }
}

function construirCenario1_2(escolha) {
  dialogo.style.fontStyle = "italic";
  var cen = escolha;
  if (cen == 1) {
    btEscolha.classList.toggle("cen1_1");
    btEscolha.classList.toggle("cen1_2");
    btEscolha.innerHTML = "Continuar";
    chars[0].src = "imgs/mMageBattle.gif";
    chars[0].classList.add("inverter");
    chars[1].src = "imgs/orcLadyMorta.gif";
    chars[2].src = "imgs/orcWarriorMorto.gif";
    dialogo.innerHTML =
      "O mago consegue ser mais rápido e os pega de surpresa.";
  } else if (cen == 2) {
    btEscolha.classList.toggle("cen1_1");
    btEscolha.classList.toggle("cen1_4");
    chars[0].src = "imgs/mMageBattle.gif";
    chars[0].classList.add("inverter");
    chars[1].src = "imgs/orcLadyViva.gif";
    chars[2].src = "imgs/orcWarriorVivo.gif";
    btEscolha.innerHTML = "Continuar";
    dialogo.innerHTML = `Arjen é fluente em muitas línguas, ao tentar contato com os orcs, desobre que são
        convidados de honra de um casamento. O mago é convidado e decide ir, pois todos conhecem a fama das festas orcs,
        apesar das poucas testemunhas serem fugitivos de seus caldeirões.`;
  }
}

function construirCenario1_3(escolha) {
  btEscolha.classList.toggle("cen1_2");
  btEscolha.classList.toggle("cen1_3");
  chars[0].src = "imgs/orcWarriorMorto.gif";
  chars[0].classList.add("inverter");
  chars[0].classList.toggle("end");
  chars[1].src = "imgs/mMageBattle.gif";
  chars[2].src = "imgs/orcHeroi.gif";
  dialogo.innerHTML = `Antes mesmo do mago sair da batalha, o Herói Orc aparece e vê seus aliados mortos.
    Arjen não tem outra opção a não ser se defender da sua ira.`;
  btEscolha.innerHTML = "Continuar";
}

function construirCenario1_4(escolha) {
  btEscolha.classList.toggle("cen1_4");
  btEscolha.classList.toggle("cen1_5");
  chars[0].src = "imgs/cervejeiro.gif";
  chars[0].classList.add("inverter");
  chars[1].src = "imgs/mMageBattle.gif";
  chars[2].src = "imgs/orcHeroi.gif";
  dialogo.innerHTML = `Na festa você encontra o Orc Herói, que é padrinho dos noivos. Juntos vocês esvaziam o álcool da casa.`;
  btEscolha.innerHTML = "Continuar";
}

function construirCenario1_5(escolha) {
  btEscolha.classList.toggle("cen1_5");
  btEscolha.classList.toggle("cen1_6");
  btEscolha.innerHTML = "Escolha";
  chars[0].src = "imgs/GarmBaby.gif";
  chars[0].classList.add("inverter");
  chars[1].src = "imgs/Sob.gif";
  chars[1].classList.add("placeStart");
  chars[1].classList.add("alignCenter");
  chars[1].classList.toggle("inverter");
  chars[2].src = "imgs/mMageBattle.gif";
  dialogo.innerHTML = `Arjen acorda confuso num lugar congelante e com uma dor de cabeça terrível. Tudo o que lembra
    é de dizer que ia buscar mais gelo ao abrir um portal...
    Um grunhido alto o leva a um Garm preso entre os rochedos de gelo. O mago sabe das propriedades raras que o monstro possui...`;
}

function construirCenario1_6(escolha) {
  var cen = escolha;
  if (cen == 1) {
    btEscolha.classList.toggle("cen1_6");
    btEscolha.classList.toggle("cen1_7");
    btEscolha.id = "especial";
    btEscolha.innerHTML = "Continuar";
    chars[0].src = "imgs/GarmBaby.gif";
    chars[0].classList.toggle("inverter");
    chars[1].src = "imgs/Wah.gif";
    chars[2].src = "imgs/mMageBattle.gif";
    dialogo.innerHTML = `As lanças de fogo queimam o Garm e derrete o gelo. 
        Apesar de filhote, o Garm resiste e foge com medo. Quem diria que mesmo um filhote poderia resiste a sua magia.
        Essas criaturas são mesmo incríveis.`;
    btEscolha.innerHTML = "Continuar";
  } else if (cen == 2) {
    btEscolha.classList.toggle("cen1_6");
    btEscolha.classList.toggle("cen1_7");
    chars[0].src = "imgs/GarmBaby.gif";
    chars[0].classList.toggle("inverter");
    chars[1].src = "imgs/Kis2.gif";
    chars[2].src = "imgs/mMageBattle.gif";
    dialogo.innerHTML = `Seu conhecimento profundo sabe que monstros de natureza elemental,
        como os Garms, se curam através de magia do mesmo elemento de origem. Sendo assim,
        você revitaliza o pequeno monstro e suas lanças fragilizam a rocha, ajudando o pequeno a se soltar.
        Ele foge agradecido`;
    btEscolha.innerHTML = "Continuar";
  }
}

function construirCenario1_7(escolha) {
  btEscolha.classList.toggle("cen1_7");
  btEscolha.classList.toggle("cen1_8");
  btEscolha.innerHTML = "Escolha";
  chars[0].src = "imgs/mMageBattle.gif";
  chars[0].classList.add("inverter");
  chars[1].src = "imgs/Hmm.gif";
  chars[1].classList.toggle("start");
  chars[1].classList.toggle("alignCenter");
  chars[1].classList.toggle("alignStart");
  chars[2].src = "";
  dialogo.innerHTML = `O conjurador pondera sobre as propriedades raras do lobo congelante e os tesouros que 
    se poderia criar com isso. "Mas será que meu poder é suficiente para abatê-lo?"`;
}

function construirCenario1_8(escolha) {
  var cen = escolha;
  if (cen == 1 && btEscolha.id == "especial") {
    btEscolha.classList.toggle("cen1_8");
    btEscolha.classList.toggle("cen1_9");
    btEscolha.innerHTML = "Continuar";
    chars[0].src = "imgs/GarmBaby.gif";
    chars[1].src = "imgs/mMageBattle.gif";
    chars[1].classList.toggle("end");
    chars[1].classList.toggle("encolher");
    chars[1].classList.toggle("placeStart");
    chars[1].classList.toggle("alignStart");
    chars[2].src = "imgs/Garm.gif";
    chars[2].classList.toggle("engrandecer");
    dialogo.innerHTML = `O mago o persegue até a toca. Lá encontra um Garm ainda maior que instintivamente ataca
        para proteger seu bebê. O filhote magoado pela sua magia também investe pra cima.`;
  } else if (cen == 1) {
    btEscolha.classList.toggle("cen1_8");
    btEscolha.classList.toggle("cen1_10");
    btEscolha.id = "especial1";
    btEscolha.innerHTML = "Continuar";
    chars[1].src = "imgs/GarmBaby.gif";
    chars[1].classList.toggle("inverter");
    chars[2].src = "imgs/mMageBattle.gif";
    chars[2].classList.toggle("inverter");
    chars[2].classList.toggle("placeStart");
    chars[2].classList.toggle("placeEnd");
    chars[2].classList.toggle("encolher");
    chars[0].src = "imgs/Garm.gif";
    chars[0].classList.toggle("engrandecer");
    dialogo.innerHTML = `Ao entrar na caverna um Garm ainda maior te ataca. Arjen é pego de surpresa, porém é protegido pelo filhote que acabara de salvar.`;
  } else if (cen == 2) {
    btEscolha.classList.toggle("cen1_8");
    btEscolha.classList.toggle("cen1_10");
    chars[0].src = "imgs/mMageBattle.gif";
    chars[0].classList.add("inverter");
    chars[1].classList.toggle("inverter");
    chars[1].src = "imgs/Dum.gif";
    chars[2].src = "";
    btEscolha.innerHTML = "Continuar";
    dialogo.innerHTML = `Arjen ignora o monstro. Somente uma força divina ou de um clã inteiro para lidar com seres como eles.`;
  }
}

function construirCenario1_10(escolha) {
  if (btEscolha.id == "especial1") {
    btEscolha.classList.toggle("cen1_10");
    btEscolha.classList.toggle("cen1_11");

    chars[0].classList.toggle("alignStart");
    chars[0].classList.toggle("inverter");
    chars[0].classList.toggle("engrandecer");
    chars[0].classList.toggle("center");
    chars[0].src = "imgs/Spin.gif";
    chars[1].src = "imgs/mMageBattle.gif";
    chars[2].src = "";
    btEscolha.innerHTML = "Escolha";
    dialogo.innerHTML = `O mago sobrevive por pouco. Não fosse pelo filhote atrasando o lobo congelante, seria definitivamente seu fim.
        Sem mana e sem dinheiro ele pensa se é melhor continuar na estrada principal ou ir até a ilha do Natal`;
  } else {
    btEscolha.classList.toggle("cen1_10");
    btEscolha.classList.toggle("cen1_11");
    chars[0].classList.toggle("alignStart");
    chars[0].src = "imgs/Whisp.gif";
    chars[1].src = "imgs/mMageBattle.gif";
    chars[2].classList.toggle("inverter");
    chars[2].src = "";
    dialogo.innerHTML = `Sem dinheiro e quase sem mana você segue pela estrada pensando se o melhor é voltar e parar na ilha do Natal para descansar.`;
  }
}

function construirCenario1_11(escolha) {
  var cen = escolha;
  if (cen == 2 && btEscolha.id == "especial1") {
    btEscolha.classList.toggle("cen1_11");
    btEscolha.classList.toggle("fimE");
    btEscolha.innerHTML = "Continuar";
    chars[0].classList.toggle("inverter");
    chars[0].src = "imgs/npcPreocupado.gif";
    chars[1].src = "imgs/mMageBattle.gif";
    chars[2].src = "imgs/npcTranquilo3.gif";
    chars[2].classList.toggle("placeEnd");
    chars[2].classList.toggle("encolher");
    chars[2].classList.toggle("alignCenter");
    dialogo.innerHTML = `Ao chegar na ilha do Natal o mago é bem recebido, tratado dos ferimentos e alimentado. Os moradores explicam a ele
         a situação aterradora que estão passando com os lobos elementais.`;
  } else if (cen == 2) {
    btEscolha.classList.toggle("cen1_11");

    btEscolha.classList.toggle("fim1");
    btEscolha.innerHTML = "Continuar";
    chars[0].src = "imgs/npcTranquilo2.gif";
    chars[1].src = "imgs/npcTranquilo3.gif";
    chars[1].classList.toggle("inverter");
    chars[2].src = "imgs/mMageBattle.gif";
    chars[2].classList.toggle("inverter");
    dialogo.innerHTML = `O mago chega na ilha e é bem acolhido. Os oficiais enviam uma carta a Geffen solicitando auxilio.`;
  } else if (cen == 1) {
    btEscolha.classList.toggle("cen1_11");
    btEscolha.classList.toggle("fim2");
    chars[0].src = "imgs/mMageBattle.gif";
    chars[0].classList.add("inverter");
    chars[0].classList.toggle("alignStart");
    chars[1].src = "imgs/viajante.gif";
    chars[2].src = "";
    btEscolha.innerHTML = "Continuar";
    dialogo.innerHTML = `O conjurador decide continuar pela estrada principal. A certa altura encontra um estrangeiro que o ajuda 
        com uma asa de borboleta salva em Payon e algunz zenys para o serviço Kafra.`;
  }
}

function gameOver1() {
  btEscolha.innerHTML = "Game Over";
  btEscolha.classList.toggle("cen1_3");
  chars[0].src = "imgs/mMageDead.gif";
  chars[1].classList.toggle("end");
  chars[1].classList.toggle("alignCenter");
  chars[1].src = "imgs/Pif.gif";
  chars[2].src = "imgs/orcHeroi.gif";
  dialogo.innerHTML = `Sua luta não dura muito. A força do Orc é descomunal.`;
}

function gameOver2() {
  btEscolha.innerHTML = "Game Over";
  btEscolha.classList.remove("cen1_9");
  chars[0].src = "imgs/mMageDead.gif";
  chars[0].classList.toggle("end");
  chars[1].src = "imgs/Bzz.gif";
  chars[1].classList.toggle("inverter");
  chars[1].classList.toggle("encolher");
  chars[1].classList.toggle("placeEnd");
  chars[1].classList.toggle("alignCenter");
  chars[2].src = "imgs/Garm.gif";
  dialogo.innerHTML = `Os dois Garms resistem às melhores técnicas do conjurador e a batalha termina com 
    Arjen levando a pior.`;
}

function fimE(escolha) {
  btEscolha.classList.toggle("fimE");
  chars[0].classList.toggle("inverter");
  chars[0].src = "imgs/Grat.gif";
  chars[0].classList.toggle("end");
  chars[0].classList.toggle("encolher");
  chars[1].src = "imgs/Lov2.gif";
  chars[1].classList.toggle("alignStart");
  chars[1].classList.toggle("placeStart");
  chars[2].classList.toggle("encolher");
  chars[2].classList.toggle("inverter");
  chars[2].src = "imgs/Grat.gif";
  dialogo.innerHTML = `Diante do que vivera recentemente, e da experiência que teve na toca dos Garms, Arjen decide ficar na ilha do natal e
    ajudar os moradores da ilha, procurando a melhor solução para as criaturas e os humanos.`;
  btEscolha.innerHTML = "Game Over";
}

function fim1(escolha) {
  btEscolha.classList.toggle("fim1");
  chars[0].src = "imgs/Grat.gif";
  chars[0].classList.toggle("inverter");
  chars[0].classList.toggle("end");
  chars[0].classList.toggle("encolher");
  chars[1].classList.toggle("placeStart");
  chars[1].classList.toggle("alignStart");
  chars[1].src = "imgs/Lov2.gif";
  chars[2].classList.toggle("encolher");
  chars[2].src = "imgs/Grat.gif";
  dialogo.innerHTML = `Arjen é ajudado pelo povo da ilha do Natal. O auxílio da Ordem de Geffen chega após alguns meses, e com isso ele volta para casa.`;
  btEscolha.innerHTML = "Game Over";
}

function fim2(escolha) {
  btEscolha.classList.toggle("fim2");
  chars[0].src = "imgs/Grat.gif";

  chars[0].classList.toggle("encolher");
  chars[0].classList.toggle("inverter");
  chars[1].src = "imgs/Lov2.gif";
  chars[1].classList.toggle("placeStart");
  chars[1].classList.toggle("alignStart");
  chars[2].classList.toggle("encolher");
  chars[2].classList.toggle("inverter");
  chars[2].classList.toggle("placeEnd");
  chars[2].src = "imgs/Grat.gif";
  btEscolha.innerHTML = "Game Over";
  dialogo.innerHTML = "Graças ao estranho Arjen chega em Geffen a salvo";
}
