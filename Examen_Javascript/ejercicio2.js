let contador_palabras = 1;
if (document.getElementById("frase") != false) {
  for (let index = 0; index < document.getElementById("frase").length; index++) {
    if (document.getElementById("frase")[i] == " ") {
      contador_palabras++;
    }
  }
}
let palindromo = false
let frase_pura
let frase_reversa
for (let index = 0; index < document.getElementById("frase").length; index++) {
    if (document.getElementById("frase")[i] == " "){
        frase_pura= document.getElementById("frase").toLowerCase()
    } 
}
for (let index = document.getElementById("frase").length; index > 0; index--) {
    if (document.getElementById("frase")[i] == " "){
        frase_pura= document.getElementById("frase").toLowerCase()
    } 
}
if(frase_pura==frase_reversa){
    palindromo=true
}

document.write("El numero de palabras es"+contador_palabras+(" "))

