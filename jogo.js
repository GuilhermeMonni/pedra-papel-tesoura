let vitoria = 0
let derrota = 0

function btnVoltar(){
    location.replace("index.html", "_self")
}

function btnJogar(){
    location.replace("jogo.html", "_self")
}

function btnRegras(){
    location.replace("regras.html", "_self")
}

function btnRedes(){
    location.replace("redes.html", "_self")
}

function revanche(){
    location.replace("jogo.html", "_self")
}

function semRevanche(){
    location.replace("index.html", "_self")
}

function pedra(){      //Botão de escolha: Pedra
    let ponto = document.querySelector("#ponto")   //respota de quem pontuou
    let pontoJogador = document.querySelector("#pontoJogador")
    let pontoComputador = document.querySelector("#pontoComputador")
    let img = document.querySelector("#resposta")
    let jogadaPC = parseInt((Math.random()*3)+1)  //computador escolhe um número de 1 a 3
    let pc = document.querySelector("#pc")  //escolha do pc
    let placar = document.querySelector("#placar")  //placar
    let xis = document.querySelector("#xis") // xis do placar
    let revanche = document.querySelector(".alert")  //alerta de revanche
    let txtRevanche = document.querySelector("#txt-alert")  //titulo revanche
    let placarFinal = document.querySelector("#placar-final") //placar do alerta
      
    img.setAttribute("src", "imagens/pedra.png")         //imagem pedra
    img.style.width = "80px"
    img.style.height = "70px"
    pc.style.width = "80px"
    pc.style.height = "70px"  //estilo das escolhas
    placar.style.background = "wheat"
    placar.style.border = "1px solid"  //estilo do placar
    xis.innerHTML = ("X")  //xis do placar

    switch(jogadaPC){
        case 1:
            pc.setAttribute("src", "imagens/pedra.png")  //pc escolheu pedra
            ponto.innerHTML = ("UFA, EMPATE!")  //resultado da rodada
            ponto.style.color = "white"
            break
        case 2:
            pc.setAttribute("src", "imagens/papel.png")  //pc escolheu papel
            ponto.innerHTML = ("✘ PONTO PARA O COMPUTADOR HAHA!")  //resultado da rodada
            ponto.style.color = "#4000ffd2"
            derrota++
            break
        case 3:
            pc.setAttribute("src", "imagens/tesoura.png")  //pc escolheu tesoura
            ponto.innerHTML = ("✔ PARABÉNS, PONTO PARA VOCÊ!")  //resultado da rodada
            ponto.style.color = "#00ff00"
            vitoria++
            break
    }

    pontoJogador.innerHTML = vitoria    //placar
    pontoComputador.innerHTML = derrota

    if(vitoria == 5){   //jogador venceu
        revanche.style.display = "block"    //alerta de revanche
        txtRevanche.innerHTML = ("Você venceu, vamos uma revanche?")
        placarFinal.innerHTML = (`${vitoria} X ${derrota}`)
        img.setAttribute("src", "imagens/vitoria.png")
        img.style.width = "50px"
        img.style.height = "50px"
        pc.setAttribute("src", "imagens/derrota.png")
        pc.style.width = "50px"
        pc.style.height = "50px"
        vitoria = 0
        derrota = 0
        ponto.innerHTML = (" ")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.color = "white"
    }else if(derrota == 5){ //pc venceu
        revanche.style.display = "block"    //alerta de revanche
        txtRevanche.innerHTML = ("Você perdeu HAHA! Quer uma revanche?")
        placarFinal.innerHTML = (`${vitoria} X ${derrota}`)
        img.setAttribute("src", "imagens/derrota.png")
        img.style.width = "50px"
        img.style.height = "50px"
        pc.setAttribute("src", "imagens/vitoria.png")
        pc.style.width = "50px"
        pc.style.height = "50px"
        vitoria = 0
        derrota = 0
        ponto.innerHTML = (" ")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.color = "white"
    }
}

function papel(){      //Botão de escolha: papel
    let ponto = document.querySelector("#ponto")   //respota de quem pontuou
    let img = document.querySelector("#resposta")
    let jogadaPC = parseInt((Math.random()*3)+1)  //computador escolhe um número de 1 a 3
    let pc = document.querySelector("#pc")  //escolha do pc
    let placar = document.querySelector("#placar")  //placar
    let xis = document.querySelector("#xis") // xis do placar
    let revanche = document.querySelector(".alert")  //alerta de revanche
    let txtRevanche = document.querySelector("#txt-alert")  //titulo revanche
    let placarFinal = document.querySelector("#placar-final") //placar do alerta
    
    img.setAttribute("src", "imagens/papel.png")    //imagem papel
    img.style.width = "80px"
    img.style.height = "70px"
    pc.style.width = "80px"
    pc.style.height = "70px"  //estilo das escolhas
    placar.style.background = "wheat"
    placar.style.border = "1px solid"  //estilo do placar
    xis.innerHTML = ("X")  //xis do placar

    switch(jogadaPC){
        case 1:
            pc.setAttribute("src", "imagens/pedra.png") //pc escolheu pedra
            ponto.innerHTML = ("✔ PARABÉNS, PONTO PARA VOCÊ!") //resultado rodada
            ponto.style.color = "#00ff00"
            vitoria++
            break
        case 2: 
            pc.setAttribute("src", "imagens/papel.png") //pc escolheu papel
            ponto.innerHTML = ("UFA, EMPATE!")  //resultado rodada
            ponto.style.color = "white"
            break
        case 3:
            pc.setAttribute("src", "imagens/tesoura.png")   //pc escolheu tesoura
            ponto.innerHTML = ("✘ PONTO PARA O COMPUTADOR HAHA!")  //resultado rodada
            ponto.style.color = "#4000ffd2"
            derrota++
            break
    }

    pontoJogador.innerHTML = vitoria    //placar
    pontoComputador.innerHTML = derrota

    if(vitoria == 5){   //jogador venceu
        revanche.style.display = "block"    //alerta de revanche
        txtRevanche.innerHTML = ("Você venceu, vamos uma revanche?")
        placarFinal.innerHTML = (`${vitoria} X ${derrota}`)
        img.setAttribute("src", "imagens/vitoria.png")
        img.style.width = "50px"
        img.style.height = "50px"
        pc.setAttribute("src", "imagens/derrota.png")
        pc.style.width = "50px"
        pc.style.height = "50px"
        vitoria = 0
        derrota = 0
        ponto.innerHTML = (" ")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.color = "white"
    }else if(derrota == 5){     //pc venceu
        revanche.style.display = "block"    //alerta de revanche
        txtRevanche.innerHTML = ("Você perdeu HAHA! Quer uma revanche?")
        placarFinal.innerHTML = (`${vitoria} X ${derrota}`)
        img.setAttribute("src", "imagens/derrota.png")
        img.style.width = "50px"
        img.style.height = "50px"
        pc.setAttribute("src", "imagens/vitoria.png")
        pc.style.width = "50px"
        pc.style.height = "50px"
        vitoria = 0
        derrota = 0
        ponto.innerHTML = (" ")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.color = "white"
    }
}

function tesoura(){      //Botão de escolha: tesoura
    let ponto = document.querySelector("#ponto")   //respota de quem pontuou
    let img = document.querySelector("#resposta")
    let jogadaPC = parseInt((Math.random()*3)+1)  //computador escolhe um número de 1 a 3
    let pc = document.querySelector("#pc")  //escolha do pc
    let placar = document.querySelector("#placar")  //placar
    let xis = document.querySelector("#xis") // xis do placar
    let revanche = document.querySelector(".alert")  //alerta de revanche
    let txtRevanche = document.querySelector("#txt-alert")  //titulo revanche
    let placarFinal = document.querySelector("#placar-final") //placar do alerta
    
    img.setAttribute("src", "imagens/tesoura.png")  //imagem tesoura
    img.style.width = "80px"
    img.style.height = "70px"
    pc.style.width = "80px"
    pc.style.height = "70px"  //estilo das escolhas
    placar.style.background = "wheat"
    placar.style.border = "1px solid"  //estilo do placar
    xis.innerHTML = ("X")  //xis do placar

    switch(jogadaPC){
        case 1:
            pc.setAttribute("src", "imagens/pedra.png")     //pc escolheu pedrA
            ponto.innerHTML = ("✘ PONTO PARA O COMPUTADOR HAHA!") //resultado rodada
            ponto.style.color = "#4000ffd2"
            derrota++
            break
        case 2: 
            pc.setAttribute("src", "imagens/papel.png") //pc escolheu papel
            ponto.innerHTML = ("✔ PARABÉNS, PONTO PARA VOCÊ!") //resultado rodada
            ponto.style.color = "#00ff00"
            vitoria++
            break
        case 3:
            pc.setAttribute("src", "imagens/tesoura.png")   //pc escolheu tesoura
            ponto.innerHTML = ("UFA, EMPATE!")  //resultado rodada
            ponto.style.color = "white"
            break
    }

    pontoJogador.innerHTML = vitoria    //placar
    pontoComputador.innerHTML = derrota

    if(vitoria == 5){   //jogador venceu
        revanche.style.display = "block"    //alerta de revanche
        txtRevanche.innerHTML = ("Você venceu, vamos uma revanche?")
        placarFinal.innerHTML = (`${vitoria} X ${derrota}`)
        img.setAttribute("src", "imagens/vitoria.png")
        img.style.width = "50px"
        img.style.height = "50px"
        pc.setAttribute("src", "imagens/derrota.png")
        pc.style.width = "50px"
        pc.style.height = "50px"
        vitoria = 0
        derrota = 0
        ponto.innerHTML = (" ")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.color = "white"
    }else if(derrota == 5){     //pc venceu
        revanche.style.display = "block"    //alerta de revanche
        txtRevanche.innerHTML = ("Você perdeu HAHA! Quer uma revanche?")
        placarFinal.innerHTML = (`${vitoria} X ${derrota}`)
        img.setAttribute("src", "imagens/derrota.png")
        img.style.width = "50px"
        img.style.height = "50px"
        pc.setAttribute("src", "imagens/vitoria.png")
        pc.style.width = "50px"
        pc.style.height = "50px"
        vitoria = 0
        derrota = 0
        ponto.innerHTML = (" ")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.color = "white"
    }
}

