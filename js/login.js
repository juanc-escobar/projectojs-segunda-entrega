
// se realiza un clear en el storage por si existe informacion previa acumulada. 

window.localStorage.clear()

// se crea una funcion login que se encarga de obtener los datos ingresados por el usuario, compararlos para ver si coinciden y autorizar el ingreso. 

function login () {
    const getUser = document.getElementById("user").value;
    const getPassword = document.getElementById("password").value;

    if(getUser === "admin" && getPassword === "1234"){
        window.location.assign("pages/home.html")
        alert("🎊Bienvenido a la tienda de ropa online🎊")
    } else {
        alert("Error al ingresar usuario y contrasena❌")
    }
}

const loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener("click", () => {
    login();
})



