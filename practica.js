
const operaciones = function(e) {

    const numero1 = parseFloat(document.getElementById("1rstnumber").value);
    const numero2 = parseFloat(document.getElementById("2ndnumber").value);
    const result = document.getElementById("resultado");
    const operacion = e.target.id;
    let resultado;

    if (operacion == "suma") {

         resultado = numero1 + numero2;
    }
    else if (operacion == "resta") {

         resultado = numero1 - numero2;
    }
    else if (operacion == "multiplicacion") {

         resultado = numero1 * numero2;
    }
    else if (operacion == "division") {

        if (numero2 == 0) {
            alert("No se puede dividir entre 0");
            return;
        }
         resultado = numero1 / numero2;
    }

    result.innerHTML = resultado;



};

const boton = document.getElementById("botones");
boton.addEventListener("click", operaciones);



