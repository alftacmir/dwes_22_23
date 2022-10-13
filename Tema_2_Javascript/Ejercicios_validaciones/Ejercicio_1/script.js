const $FORM = document.getElementById("formulario");
const $DNI = document.getElementById("dni");
const $NOMBRE = document.getElementById("nombre");
const $APELLIDOS = document.getElementById("apellidos");
const $TELEFONO = document.getElementById("telefono");
const $COMENTARIO = document.getElementById("comentario");
const $HORA = document.getElementById("hora");

function handleSubmit(e) {
  e.preventDefault();
  const dni = $DNI.value;
  const nombre = $NOMBRE.value;
  const apellidos = $APELLIDOS.value;
  const telefono = $TELEFONO.value;
  const comentario = $COMENTARIO.value;
  const hora = $HORA.value;
  if (dni == false || validDNI(dni) == false) {
    alert(
      "El DNI debe ser un valor válido : \n -Debe estar relleno \n - Debe tener este formato XX.XXX.XXX-L"
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
        if (telefono == false || validTelefono(telefono) == false) {
          alert(
            "El telefono tiene que tener un formato válido : \n -Debe estar relleno \n - Debe tener nueve numeros y el +34 primero"
          );
        } else {
          let regUsuario = {
            dni: dni,
            nombre: nombre,
            apellidos: apellidos,
            telefono: telefono,
            comentario: comentario,
            hora: hora,
          };
          let newUsuario = JSON.stringify(regUsuario);
          console.log(newUsuario);
        }
      }
    }
  }
}

function validDNI(dni) {
  const validacion = /^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[-][A-Z]$/;
  return validacion.test(dni);
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
function validTelefono(telefono) {
  const validacion = /^[+][3][4]+\s[0-9]{9}$/;
  return validacion.test(telefono);
}
$FORM.addEventListener("submit", handleSubmit);
