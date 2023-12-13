let imageClicked = false;  //Habla si se ha hecho click en la imagen, por defecto es false ya que no
                            // se ha tocado.

function newBorder() {
    const myImage = document.getElementById("myDog");

    // Verifica si la imagen ya tiene un borde al hacer click
    if (imageClicked) {
        myImage.style.border = "none";
    } else {
        // Agrega un borde rojo de 2px si no lo tiene
        myImage.style.border = "2px solid red";
    }

    // Invierte el estado del clic 
    imageClicked = !imageClicked;  //Usando ! para invertir, por ende esto es true, al 2do click
}
