function operaciones() {
   
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion").value;

    var resultado;

   
    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicación":
            resultado = numero1 * numero2;
            break;
        case "división":
            resultado = numero1 / numero2;
            break;
        default:
            resultado = "Operación no válida";
    }

   
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
