    Jugadas = Number(prompt("¿Cuantas veces deseas jugar?")); //1.Solicitar al usuario las veces que desea que se repita el juego consecutivamente.

    function elegirOpcion(opUser) {
    const opciones = ['piedra', 'papel', 'tijera']; //2. Solicitar al usuario que indique su jugada
    const opComp = opciones[Math.floor(Math.random() * 3)]; //3. Generar una jugada automática para la máquina usando la función Math.random()
    const resultado = comparar(opUser, opComp);

    document.getElementById('resultado').innerHTML = `Elegiste ${opUser}. La computadora eligió ${opComp}. ${resultado}`;
    }

    function comparar(opUser, opComp) {

    if (opUser === opComp) { //4. Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina
        return "¡Empate!";

    } else if (

        (opUser === 'piedra' && opComp === 'tijera') ||
        (opUser === 'papel' && opComp === 'piedra') ||
        (opUser === 'tijera' && opComp === 'papel')
    ) { // 5. Indicar el resultado de la partida dependiendo del caso
        return "¡Felicidades, Ganaste!";
    } else {
        return "¡Perdiste, intentalo otra vez!";
    }
}
