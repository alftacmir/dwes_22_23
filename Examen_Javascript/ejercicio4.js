const $FORM = document.getElementById("form4");
const $NOMBRE = document.getElementById("nombre");
const $DNI = document.getElementById("dni");
const $EMAIL = document.getElementById("email");
const $MOVIL = document.getElementById("movil");
const $FECHA_CITA = document.getElementById("fecha_cita");
const $HORA_CITA = document.getElementById("hora_cita");
const $APELLIDOS = document.getElementById("apellidos");

function handleSubmit(e) {
  e.preventDefault();
  const nombre = $NOMBRE.value;
  const apellidos = $APELLIDOS.value;
  const dni = $DNI.value;
  const fecha_cita = $FECHA_CITA.value;
  const hora_cita = $HORA_CITA.value;
  const email = $EMAIL.value;
  const movil = $MOVIL.value;

  if (email == false || validEmail(email) == false) {
    alert(
      "El email debe ser un valor válido : \n -Debe estar relleno \n - Debe tener el formato example@example.com"
    );
  } else {
    if (nombre == false || validNombre(nombre) == false) {
      alert(
        "El nombre debe ser un valor válido : \n -Debe estar relleno \n - Solo tener uno o dos nombres"
      );
    } else {
      if (apellidos == false || validApellidos(apellidos) == false) {
        alert(
          "El apellido tiene que tener un formato válido : \n -Debe estar relleno \n - Solo puedes tener uno o dos apellidos"
        );
      } else {
        if (fecha_cita == false || validFecha_Cita(fecha_cita) == false) {
          alert(
            "La fecha de la cita tiene que tener un formato válido : \n -Debe estar relleno \n - Debe tener formato dd-mm-yyyy"
          );
        } else {
          if (dni == false || validDNI(dni) == false) {
            alert(
              "El DNI tiene que tener un formato válido : \n -Debe estar relleno \n - Debe tener formato 99.999.999X"
            );
          } else {
            if (hora_cita == false) {
              alert("Elige una hora por favor");
            } else {
              if ((movil = false || validMovil(movil) == false)) {
                alert(
                  "El movil tiene que tener un formato válido : \n -Debe estar relleno \n - Debe tener formato +34 600 600 600"
                );
              } else {
                let regUsuario = {
                  Dni: dni,
                  Nombre: nombre,
                  Apellidos: apellidos,
                  Fecha: fecha_cita,
                  Hora: hora_cita,
                  Email: email,
                  Movil: movil,
                };
                
                setCookie(dni, regUsuario, 1);
              }
            }
          }
        }
      }
    }
  }
}

function validNombre(nombre) {
  const validacion =
    /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
  return validacion.test(nombre);
}
function validApellidos(apellido) {
  const validacion =
    /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
  return validacion.test(password);
}
function validEmail(email) {
  const validacion = /^([a-zA-Z0-9]+)[@]([a-z]+)[.]([a-z]{2,3})$/;
  return validacion.test(email);
}

function validDNI(dni) {
  const validacion = /^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[A-Z]$/;
  let comprobacion = false;
  let dni_puro = "";
  for (let index = 0; index < dni.length - 1; index++) {
    if (dni[index] != ".") {
      dni_puro += dni[index];
    }
    const letras = [
      "A",
      "B",
      "C",
      "D",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    if (letras[dni_puro % 23] == dni[dni.length]) {
      comprobacion = true;
    }
  }
  return validacion.test(dni) && comprobacion;
}

function validMovil(movil) {
  const validacion = /^[0-9]{2,3} [0-9]{3} [0-9]{3} [0-9]{3}$/;
}

function validFecha_Cita(fecha_cita) {
  const validacion = /^\d{2}\-\d{2}\-\d{4}$/;
  return validacion.test(fecha_cita);
}

function recargar() {
  dni_buscar = prompt("Introduca el dni para buscar");
  let newUsuario = getCookie(dni_buscar);
  $DNI.value = newUsuario.Dni
  $NOMBRE.value = newUsuario.Nombre
  $APELLIDOS.value = newUsuario.Apellidos
  $FECHA_CITA.value = newUsuario.Fecha
  $HORA_CITA.value =  newUsuario.Hora
  $EMAIL.value = newUsuario.Email
  $MOVIL.value = newUsuario.Movil
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date(); // Se extrae la fecha actual
  //Se le suman los días indicados por parámetro
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString(); // Se pasa a formato GMT
  document.cookie = cname + "=" + cvalue + "; " + expires; //Se crea la cookie;
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";"); //Divide la cookie separando por ;
  for (let i = 0; i < ca.length; i++) {
    //Recorre cada trozo de la cookie
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
      //Si encuentra el campo buscado
      return c.substring(name.length, c.length); //lo devuelve
  }
  return "";
}
$FORM.addEventListener("submit", handleSubmit);
