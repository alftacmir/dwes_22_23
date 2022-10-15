const $FORM = document.getElementById("formulario");
const $NOMBRE = document.getElementById("nombre");
const $APELLIDOS = document.getElementById("apellidos");
const $EMAIL = document.getElementById("email");
const $WEB = document.getElementById("web");

function handleSubmit(e) {
    e.preventDefault();
    const nombre = $NOMBRE.value;
    const apellidos = $APELLIDOS.value;
    const email = $EMAIL.value;
    const web = $WEB.value;
    if (email == false || validEmail(email) == false) {
      alert(
        "El DNI debe ser un valor válido : \n -Debe estar relleno \n - Debe tener el formato de ejemolo"
      );
    } else {
      if (nombre == false || validNombre(nombre) == false) {
        alert(
          "El nombre debe ser un valor válido : \n -Debe estar relleno \n - Solo tener uno o dos nombres"
        );
      } else {
        if (apellidos == false || validApellidos(apellidos) == false) {
          alert(
            "El apellido tiene que tener un formato válido : \n -Debe estar relleno \n - Solo tener uno o dos apellidos"
          );
        } else {
          if (web == false || validWeb(web) == false) {
            alert(
              "La web tiene que tener un formato válido : \n -Debe estar relleno \n - Debe tener formato como el ejemplo"
            );
          } else {
            let regUsuario = {
              Nombre: nombre,
              Apellidos: apellidos,
              Email: email,
              Web: web,
            };
            let newUsuario = JSON.stringify(regUsuario);
            console.log(newUsuario);
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
function validApellidos(apellidos) {
    const validacion =
      /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
    return validacion.test(apellidos);
}
function validEmail(email){
    const validacion = /^([a-zA-Z0-9]+)[@]([a-z]+)[.]([a-z]{2,3})$/
    return validacion.test(email)
}
function validWeb(web){
    const validacion = /^(https:)[/][/](www.)[a-z]+[.][a-z]{2,3}$/
    return validacion.test(web)
}

$FORM.addEventListener("submit", handleSubmit);
