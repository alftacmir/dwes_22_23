alert("Bienvenido al juego tienes que adivinar un numero del 1 al 50");

let jugar = true;

while (jugar) {
  const objetivo = parseInt(Math.random() * 50 + 1);
  let numero;
  let intentos = 5;
  while (intentos != 0) {
    numero = prompt("Introduce un numero ");
    if (isNaN(numero) || numero > 50 || numero < 1) {
      alert("Por favor introduzca una cosa que sea un numero entre 1 y 50");
    } else {
      intentos--;
      if (numero > objetivo) {
        alert(
          "El numero que has introducido es mas grande que el numero a adivinar\nTe quedan " +
            intentos +
            " intentos"
        );
      } else if (numero < objetivo) {
        alert(
          "El numero que has introducido es más pequeño que el numero a adivinar\nTe quedan " +
            intentos +
            " intentos"
        );
      } else if ((numero = objetivo)) {
        alert("HAS GANADO ERES UN CRACK!!!");
        break;
      }
    }
  }
  if (intentos === 0) {
    alert("HAS PERDIDO, OTRA VEZ SERÁ");
  }

  jugar = (
    prompt(
      "Quieres volver a jugar, introduce true si quieres repetir y false si quieres acabar"
    )
  );
}
