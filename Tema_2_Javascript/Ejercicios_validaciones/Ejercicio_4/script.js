const $FORM = document.getElementById("formulario");
const $DATE = document.getElementById("date");
const $COOK = document.getElementById("cook");
const $RECIEVER = document.getElementById("reciever");
const $WEIGHT = document.getElementById("weight");
const $FORMULA = document.getElementById("formula");
const $BANK = document.getElementById("bank");

function handleSubmit(e) {
  e.preventDefault();
  const date = $DATE.value;
  const cook = $COOK.value;
  const reciever = $RECIEVER.value;
  const weight = $WEIGHT.value;
  const formula = $FORMULA.value;
  const bank = $BANK.value;

  if (cook == false || checkCook(cook) == false) {
    alert(
      "El cook debe ser un valor válido : \n -Debe estar relleno \n - Debe tener el formato de XX$1234"
    );
  } else {
    if (date == false) {
      alert("El date debe ser un valor válido : \n -Debe estar relleno");
    } else {
      if (reciever == false || checkReciever(reciever) == false) {
        alert(
          "El reciever tiene que tener un formato válido : \n -Debe estar relleno \n - XXX_alburquerque:1234"
        );
      } else {
        if (weight == false) {
          alert(
            "El weight tiene que tener un formato válido : \n -Debe estar relleno \n - Debe estar entre 100 y 5000"
          );
        } else {
          if (formula == false || checkFormula(formula) == false) {
            alert(
              "La formulla tiene que tener un formato válido : \n -Debe estar relleno \n - Debe tener el formato XXXgXXL+"
            );
          } else {
            if (bank == false || checkBank("bank")) {
              alert("El bank tiene que tener un formato válido : \n -Debe estar relleno \n - Debe tener el formato LLXX-XXXXXXXXXXXX-XX");
            } else {
              let regUsuario = {
                Date: date,
                Cook: cook,
                Reciever: reciever,
                Weight: weight,
                Formula: formula,
                Bank: bank,
              };

              localStorage.setItem("date", regUsuario.date);
              localStorage.setItem("cook", regUsuario.cook);
              localStorage.setItem("reciever", regUsuario.reciever);
              localStorage.setItem("weight", regUsuario.cook);
              localStorage.setItem("formula", regUsuario.weight);
              localStorage.setItem("bank", regUsuario.bank);
            }
          }
        }
      }
    }
  }
}

function checkCook(cook) {
  const validation = /^[A-Z]{2}[\W][0-9]{4}$/;

  return validation.test(cook);
}
function checkReciever(reciever) {
  const validation = /^([A-Z]{2,3})(_alburquerque:)[0-9]{4}$/;

  return validation.test(reciever);
}

function checkFormula(formula) {
  const validation = /^[0-9]+(g)([A-Z]{1,2}[0-9]+)+$/;
  let counter;
  for (let i = 0; i < $WEIGHT.value; i++) {
    if (i > 1000) {
      counter = 4;
    } else {
      counter = 3;
    }
  }
  if ($WEIGHT.value === formula.subString(1, counter)) {
    check = true;
  } else {
    check = false;
  }

  if (validation.test(formula) && check) {
    return true;
  } else {
    return false;
  }
}
function checkBank(bank) {
  const validation = /[A-Z]{2}[0-9]{2}(-)[0-9]{12}(-)[0-9]{2}$/;




  if(validation.test(bank)){
    return true
  }else{
    return false
  }
}

function recargar() {
  $DATE.value = localStorage.getItem("date");
  $COOK.value = localStorage.getItem("cook");
  $RECIEVER.value = localStorage.getItem("reciever");
  $WEIGHT.value = localStorage.getItem("weight");
  $FORMULA.value = localStorage.getItem("formula");
  $BANK.value = localStorage.getItem("bank");
}

$FORM.addEventListener("submit", handleSubmit);
