function verificarPassword() {
    let select1 = document.getElementById("select1")
    let select2 = document.getElementById("select2")
    let select3 = document.getElementById("select3")

    let password1 = select1.options[select1.selectedIndex].text.trim();
    let password2 = select2.options[select2.selectedIndex].text.trim();
    let password3 = select3.options[select3.selectedIndex].text.trim();
  
    let passwordConcatenado = password1 + password2 + password3;
  
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

  


