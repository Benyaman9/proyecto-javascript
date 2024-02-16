//aqui dentro escribo mi primera pre-entrega de js


// jugadores
let jugador;
let pc;

function aleatoria() {
    return Math.ceil(Math.random() * 3)

}
jugador = prompt("elija con numeros: 1 - PIEDRA, 2 - PAPEL, 3 - TIJERA")

pc = aleatoria();
alert("has elegido: "+  eleccion  (jugador))
alert("tu oponente eligio: "+ eleccion (pc))

//posibles resultados
if (jugador == pc) {
    alert("EMPATE")
} else if (jugador == 1 && pc == 3) {
    alert("Ganaste")
} else if (jugador == 2 && pc == 1) {
    alert("Ganaste")
} else if (jugador == 3 && pc == 2) {
    alert("Ganaste")
} else {
    alert("PERDISTE")
}

function eleccion (jugada) {
    let resultado = ""
    if(jugada ==1){
        resultado = "PIEDRA 🥌"
    }else if(jugada ==2){
        resultado = "PAPEL🧻"
    }else if(jugada ==3){
        resultado ="TIJERA ✂"
    }else{
        resultado = "tu eleccion es incorrecta"
    }
    return resultado
}

//poner siempre el return para que llamar al function



