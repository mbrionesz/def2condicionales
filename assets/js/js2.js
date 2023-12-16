function calcularCantidad() {
    // Obtener los valores ingresados por el usuario
    var cantidad1 = parseInt(document.getElementById("cantidad1").value);
    var cantidad2 = parseInt(document.getElementById("cantidad2").value);
    var cantidad3 = parseInt(document.getElementById("cantidad3").value);

    // Calcular la suma total de stickers
    var totalStickers = cantidad1 + cantidad2 + cantidad3;

    // Verificar si la suma es menor o igual a 10
    if (totalStickers <= 10) {
        document.getElementById("resultado").innerHTML = "Llevas " + totalStickers + " stickers.";
    } else {
        document.getElementById("resultado").innerHTML = "Llevas demasiados stickers.";
    }
}
