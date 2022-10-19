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
  return ""; //Si no devuelve vacío
}
function seeCookie() {
  let x = document.cookie;
  alert("Las cookies son " + x);
}
function checkCookie() {
  let username = getCookie("username"); //extrae el valor función anterior
  if (username != "") {
    //Si no está vacío
    alert("Bienvenido de nuevo, " + username); //Se le saluda
  } else {
    username = prompt("Introduzca su nombre: ", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365); //Se inicializa la variable
    }
  }
}

function createCookie(){
    let name = prompt("Introduce el nombre de tu cookie")
    let value = prompt("Introduce lo que vas a guardar en la cookie")
    let expiration = prompt("Introduce la cantidad de duración de la cookie")
    setCookie(name,value,expiration)
}
function readCookie(){
    let name = prompt("Introduce el nombre de la cookie que quieres comprobar")
    let cookie =  getCookie(name)
    if(getCookie(cookie) == ""){
        alert("Los siento pero la cookie no existe")
    }else{
        alert("El contenido es: "+cookie)    
    }
}
function updateCookie(){
    let name = prompt("Introduce el nombre de la cookie a cambiar")
    if(getCookie(name) == ""){
        alert("Los siento pero la cookie no existe")
    }else{
        let value = prompt("Introduce el nuevo valor")
        let expiration = prompt("Introduce el tiempo de expiración")
        setCookie(name,value,expiration)
    }
}
function deleteCookie(){
    let name = prompt("Introduce el nombre de la cookie a cambiar")
    if(getCookie(name) == ""){
        alert("Los siento pero la cookie no existe")
    }else{
        setCookie(name,"",0)
    }
}
