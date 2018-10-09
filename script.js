var submit = document.getElementById("submit")
var number1 = document.getElementById("firstNumber")
var number2 = document.getElementById("secondNumber")
//Regex pour les chiffre//
var reg = /^[0-9,.]+$/;
submit.addEventListener('click', validation)
function validation(){
  if(number1.value !== "" && number2.value !== ""){
    if(reg.test(number1.value) && reg.test(number2.value)){
      alert(Math.trunc(number1.value.replace(',','.')) / number2.value.replace(',','.'))
    } else {
      alert("il faut un chiffres")
    }
} else {
 alert("il manque un chiffre")
}
}
