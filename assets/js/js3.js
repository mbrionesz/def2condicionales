function verificarPassword() {
    let select1 = document.getElementById("select1")
    let select2 = document.getElementById("select2")
    let select3 = document.getElementById("select3")

    let password1 = select1.value // El value saca el número seleccionado del select que va del 1 - 9
    let password2 = select2.value
    let password3 = select3.value
  
    let passwordConcatenado = password1 + password2 + password3; // Suma tipo string
  
    if (passwordConcatenado === "911") {  // Si la combinación de passwords es 911, es correcto
      document.getElementById("resultado").innerHTML = "Password 1 correcto";
      console.log("Contraseña correcta 1")
    } else if (passwordConcatenado === "714") {  // Tambien es correcto si se ingresa 714
      document.getElementById("resultado").innerHTML = "Password 2 es correcto";
    } else {  // Cualquier otro número es incorrecto
      document.getElementById("resultado").innerHTML = "Password incorrecto";
    }
    console.log(passwordConcatenado) // Verificar si es correcta la pass
  }

  


