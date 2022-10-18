const $FORM = document.getElementById("formulario");
const $DATE = document.getElementById("date");
const $COOK = document.getElementById("cook");
const $RECIEVER = document.getElementById("reciever");
const $WEIGHT = document.getElementById("weight");
const $FORMULA = document.getElementById("formula");
const $BANK = document.getElementById("bank");

function handleSubmit(e){
    e.preventDefault()
    const date=$DATE.value
    const cook=$COOK.value
    const reciever=$RECIEVER.value
    const weight=$WEIGHT.value
    const formula=$FORMULA.value
    const bank=$BANK.value


}


function checkCook(cook){
    const validation =/^[A-Z]{2}[\W][0-9]{4}$/
    
    return validation.test(cook)
}
function checkReciever(reciever){
    const validation = /^([A-Z]{2,3})(_alburquerque:)[0-9]{4}$/

    return validation.test(reciever)
}

function checkFormula(formula){
    let check
    const validation = /^[0-9]+(g)([A-Z]{1,2}[0-9]+)+$/
    let counter
    for (let i = 0; i < $WEIGHT.value; i++) {
        if (i > 1000){
            counter=4
        }else{
            counter=3
        }
    }
    if($WEIGHT.value === formula.subString(1,counter)){
        check=true
    }else{
        check=false
    }
    
    return validation.test(formula)+check


}
function checkDateBank(bank){
    const validation = x
}

$FORM.addEventListener("submit",handleSubmit)
