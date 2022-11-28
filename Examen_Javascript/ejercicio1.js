const $FORM = document.getElementById("form1");
const $PLATO = document.getElementById("plato");
const $ENTRANTE = document.getElementById("entrante");
const $BEBIDA = document.getElementById("bebida");
const $POSTRE = document.getElementById("postre");
const $VIP = document.getElementById("vip");

function handleSubmit(e) {
  e.preventDefault();
  const plato = $PLATO.value;
  const entrante = $ENTRANTE.value;
  const bebida = $BEBIDA.value;
  const postre = $POSTRE.value;
  const vip = $VIP.value;

  if (plato == false || validPlato(plato) == false) {
    alert(
      "El campo de plato es inválido: \n-Debe estár relleno el campo\n-Solo tenemos platos del 1 al 5"
    );
  } else {
    if (bebida == "" || bebida < 0) {
      alert(
        "El campo de bebida es inválido: \n-Debe estár relleno el campo\n-Tiene que ser positivo"
      );
    } else {
      if (entrante == "" || entrante < 0) {
        alert(
          "El campo de entrante es inválido: \n-Debe estár relleno el campo\n-Tiene que ser positivo"
        );
      } else {
        if (postre == "" || postre < 0) {
          alert(
            "El campo de postre es inválido: \n-Debe estár relleno el campo\n-Tiene que ser positivo"
          );
        } else {
          let cadena_final = "";
          let nbebidas;
          let nentrantes;
          let npostres;
          if (bebida == 0) {
            nbebidas = "no ha pedido ninguna bebida";
          } else {
            nbebidas = `ha pedido ${bebida} bebidas`;
          }
          if (entrante == 0) {
            nentrantes = "no ha pedido ningun entrante";
          } else {
            nentrantes = `ha pedido ${entrante} entrantes`;
          }
          if (postre == 0) {
            npostres = "no ha pedido ninguna postre";
          } else {
            npostres = `ha pedido ${postre} postres`;
          }
          cadena_final = `Uste ha pedido el plato ${plato}, ${nentrantes}, ${nbebidas}, ${npostres}`;

          let total =
            6 * 1.1 + entrante * 1.1 + bebida * 1.21 + postre * 1.1;
          let total_descuento =
            (6 + bebida + entrante + postre) * 0.95 +
            6 * 1.1 +
            entrante * 0.1 +
            bebida * 0.21 +
            postre * 0.1;

          if (vip.toLowerCase("si")) {
            cadena_final += `, como usted es VIP se le aplica un 5% de descuento y le sale un precio final de ${total_descuento} €`;
          } else {
            cadena_final += `, y la cuenta total es de ${total} €`;
          }

          document.getElementById("comanda").innerHTML = cadena_final;
        }
      }
    }
  }
}

function validPlato(plato) {
  const validation = /^(Nº)[0-5]$/;
  return validation.test(plato);
}

$FORM.addEventListener("submit", handleSubmit);
