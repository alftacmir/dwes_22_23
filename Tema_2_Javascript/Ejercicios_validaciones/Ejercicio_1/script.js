function enviar(){
    const $FORM = document.getElementById("formulario")
    const $DNI = document.getElementById("dni")
    const $NOMBRE = document.getElementById("nombre")
    const $APELLIDOS = document.getElementById("apellidos")
    const $TELEFONO = document.getElementById("telefono")
    const $COMENTARIO = document.getElementById("comentario")
    const $HORA = document.getElementById("hora")

    function validDNI(dni){
        const validacion = /^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[-][A-Z]$/
        return validacion.test(dni)
    }
    function validNombre(nombre){
        const validacion = /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/
        return validacion.test(nombre)
    }
    function validNombre(apellidos){
        const validacion = /^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/
        return validacion.test(apellidos)
    }
    function validTelefono(telefono){
        const validacion = /^[+][3][4]+\s[0-9]{9}$/
        return validacion.test(telefono)
    }

}