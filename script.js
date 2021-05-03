var cartaPeralta = {
    nome: "Jake Peralta",
    imagem: "http://www.nerdrabugento.com.br/wp-content/uploads/2019/03/Jack-Peralta-768x1024.jpg",
    atributos: {
        ataque: 90,
        defesa: 87,
        magia: 90
    }
}

var cartaSantiago = {
    nome: "Amy Santiago",
    imagem: "https://static.wikia.nocookie.net/b99/images/3/38/AmySantiago.jpg/revision/latest?cb=20190825144004",
    atributos: {
        ataque: 70,
        defesa: 76,
        magia: 85
    }
}

var cartaHolt = {
    nome: "Raymond Holt",
    imagem: "https://pbs.twimg.com/media/EdPpe_YWkAAG5GK.png",
    atributos: {
        ataque: 90,
        defesa:88,
        magia: 90
    }
}

var cartaBoyle = {
    nome: "Charles Boyle",
    imagem: "https://i.pinimg.com/originals/2d/7c/99/2d7c998ebc937ddd925c4f7fdfc2d4b8.jpg",
    atributos: {
        ataque: 55,
        defesa: 40,
        magia: 38
    }
}

var cartaGina = {
    nome: "Gina Linetti",
    imagem: "https://images7.alphacoders.com/652/652201.png",
    atributos: {
        ataque: 95,
        defesa: 88,
        magia: 100
    }
}

var cartaTerry = {
    nome: "Terry",
    imagem: "https://spinoff.com.br/wp-content/uploads/TerryS5-932x1024.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaDiaz = {
    nome: "Rosa Diaz",
    imagem: "https://estanteante.files.wordpress.com/2017/12/rosa_diaz-e1512756538394.jpg?w=250&h=387",
    atributos: {
        ataque: 95,
        defesa: 95,
        magia: 86
    }
}


var cartaJudy = {
    nome: "Bandido do Pontiac",
    imagem: "https://i.pinimg.com/736x/d6/f5/74/d6f574f4f13a999996ed3ce622cbfd89.jpg",
    atributos: {
        ataque: 88,
        defesa: 100,
        magia: 86
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaPeralta, cartaSantiago, cartaHolt, cartaBoyle, cartaGina, cartaTerry, cartaDiaz, cartaJudy]
//            0           1           2          3         4            5            6           7       

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  var html = "Jogador" + pontosJogador + "/" + pontosMaquina + "Máquina"
  
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas [numeroCartaJogador]
  cartas.splice(numeroCartaJogador,1)
  
  
document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}



function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
    if(cartas.length == 0) {
     alert("Fim de Jogo")
    if(pontosJogador > pontosMaquina){
    htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (pontosMaquina > pontosJogador) {
   htmlResultado = '<p class="resultado-final">Perdeu</p>'
    }else {
   htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
    }else {
   document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true


  

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')

  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class-"carta"></div>`

  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true


 var divResultado = document.getElementById('resultado')
 divResultado.innerHTML = ""
 

}