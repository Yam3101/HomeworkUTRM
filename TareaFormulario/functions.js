
function confirmPass() {
    if (userPassword.value === "") {
        event.preventDefault()
        alert("llena los campos necesarios")   
    } else if (userPassword.value === confirmPassword.value) {
        alert("Hola "+userName.value)
    } 
    else {
        alert("Contraseñas incorrectas")
    }
}
