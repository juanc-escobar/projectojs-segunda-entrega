window.localStorage.clear()

function login () {
    const getUser = document.getElementById("user").value;
    const getPassword = document.getElementById("password").value;
    console.log(getUser,getPassword);

    if(getUser === "admin" && getPassword === "1234"){
        window.location.assign("index.html")
        alert("Bienvenido")
    } else {
        alert("Error al ingresar usuario y contrasena")
    }
}



