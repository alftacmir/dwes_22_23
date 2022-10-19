if (typeof Storage !== "undefined") {
  alert("LocalStorage funciona en este navegador");
} else {
  alert("LocalStorage no funciona en este navegador");
}

const $FORM = document.getElementById("formulario");
const $NOMBRE = document.getElementById("nombre");
const $DNI = document.getElementById("dni");
const $EMAIL = document.getElementById("email");
const $WEB = document.getElementById("web");
const $PASSWORD = document.getElementById("password");
const $FECHA = document.getElementById("fecha");

function handleSubmit(e) {
  e.preventDefault();
  const nombre = $NOMBRE.value;
  const email = $EMAIL.value;
  const web = $WEB.value;
  const password = $PASSWORD.value;
  const dni = $DNI.value;
  const fecha = $FECHA.value;
  if (email == false || validEmail(email) == false) {
    alert(
      "El email debe ser un valor válido : \n -Debe estar relleno \n - Debe tener el formato de ejemolo"
    );
  } else {
    if (nombre == false || validNombre(nombre) == false) {
      alert(
        "El nombre debe ser un valor válido : \n -Debe estar relleno \n - Solo tener uno o dos nombres"
      );
    } else {
      if (password == false || validPassword(password) == false) {
        alert(
          "El apellido tiene que tener un formato válido : \n -Debe estar relleno \n - Minimo 8 carácteres"
        );
      } else {
        if (web == false || validWeb(web) == false) {
          alert(
            "La web tiene que tener un formato válido : \n -Debe estar relleno \n - Debe tener formato como el ejemplo"
          );
        } else {
          if (dni == false || validDNI(dni) == false) {
            alert(
              "El DNI tiene que tener un formato válido : \n -Debe estar relleno \n - Debe tener formato XX.XXX.XXX-L"
            );
          } else {
            if (fecha == false) {
             alert("Elige una fecha por favor")
            }else{
              let regUsuario = {
                Dni: dni,
                Nombre: nombre,
                Contraseña: password,
                Email: email,
                Web: web,
                Fecha_De_Nacimiento : fecha
              };

              let newUsuario = JSON.stringify(regUsuario);
              console.log(newUsuario);

              sessionStorage.setItem("dni", regUsuario.dni);
              sessionStorage.setItem("nombre", regUsuario.nombre);
              sessionStorage.setItem("password", regUsuario.password);
              sessionStorage.setItem("email", regUsuario.email);
              sessionStorage.setItem("web", regUsuario.web);
              sessionStorage.setItem("fecha", regUsuario.fecha);


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
function validpassword(password) {
  const validacion =
    /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
  return validacion.test(password);
}
function validEmail(email) {
  const validacion = /^([a-zA-Z0-9]+)[@]([a-z]+)[.]([a-z]{2,3})$/;
  return validacion.test(email);
}
function validWeb(web) {
  const validacion = /^(https:)[/][/](www.)[a-z]+[.][a-z]{2,3}$/;
  return validacion.test(web);
}
function validPassword(web) {
  const validacion = /^[\w]{8,10}$/;
  return validacion.test(web);
}
function validDNI(dni) {
  const validacion = /^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[-][A-Z]$/;
  return validacion.test(dni);
}
function recargar(){
  $DNI.value = sessionStorage.getItem("dni")
  $EMAIL.value = sessionStorage.getItem("email")
  $FECHA.value = sessionStorage.getItem("fecha")
  $NOMBRE.value = sessionStorage.getItem("nombre")
  $PASSWORD.value = sessionStorage.getItem("password")
  $WEB.value = sessionStorage.getItem("web")
}

$FORM.addEventListener("submit", handleSubmit);
