
var operaciones = function() {

    var numero1 = parseFloat(document.getElementById("1rstnumber").value);
    var numero2 = parseFloat(document.getElementById("2ndnumber").value);
    var result = document.getElementById("result");

    var ResultadoFinal = numero1 + numero2;

    result.innerHTML = "The result is:" + ResultadoFinal;

}

var boton = document.getElementById("boton");
boton.addEventListener("click", operaciones);



