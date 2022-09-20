// Declaracion de la clase constructora Jean, con el atributo id para identificar cada producto y el atributo cart para sumar cantidades anadidas al carrito. 

class Jean {
    constructor (id,categoria, titulo, descripcion, precio,cart,img) {
        this.id = id
        this.categoria = categoria
        this.titulo = titulo
        this.descripcion = descripcion
        this.precio = precio
        this.cart = cart
        this.img = img
    }
}

// Declaracion de variables 

const productos = []
let carrito = []
let totalCompra = 0
let itemsCarrito = 0


window.localStorage.removeItem("carritoStorage")
window.localStorage.removeItem("totalCompraStorage")


// Creacion de objetos y envio de objetos a el arreglo de productos. 

const jeanSlimfit = new Jean (1,"jeans","Jean Slimfit","Jean elastico slimfit color azul",100,1,"../assets/slimfit.webp"); 
const jeanRegularfit = new Jean (2,"jeans","Jean Regularfit","Jean resistente regularfit negro",120,1,"../assets/regularfit.webp");
const jeanWidefit = new Jean (3,"jeans","Jean Widefit","Jean comodo widefit color azul",150,1,"../assets/widefit.webp");

productos.push(jeanSlimfit, jeanRegularfit, jeanWidefit)

// Creacion de contenedores principales 

const cardConntenedor = document.getElementById("card-contenedor")
const facturaConntenedor = document.getElementById("factura-contenedor")
const cart = document.getElementById("cart")

// se crean un algoritmo para mostrar los productos y un event listener con click sobre el boton agregar. 

productos.forEach((producto) => {
    const mostrarProductos = document.createElement("div")
    mostrarProductos.classList.add("card")
    mostrarProductos.innerHTML = `
    <img class="card__img" src="${producto.img}" alt="" />
    <h3 class="card__titulo">${producto.titulo}</h3>
    <p class="card__descripcion">${producto.descripcion}</p>
    <p class="card__precio">$ ${producto.precio}</p>
    <button id="${producto.id}" class="card__btn">Agregar</button>
    `
    cardConntenedor.appendChild(mostrarProductos)

    const agregar = document.getElementById(producto.id)

    agregar.addEventListener("click", () => {
    agregarCarrito(producto.id)
    })
})


// se crea una funcion para mostrat el contador de productos en el carrito. 

const actualizarCarrito = () => {
    cart.innerHTML = ""
        const span = document.createElement("span")
        span.classList.add("counter")
        span.innerHTML = `${itemsCarrito}`
        cart.appendChild(span)
    }

// se crea una funcion para agregar los productos al carrito y evitar duplicados. 

const agregarCarrito = (productoId) => {
    let productoSeleccionado = productos.find((p) => p.id === productoId)
    if (carrito.find((p)=> p.id === productoSeleccionado.id)){
        productoSeleccionado.cart = productoSeleccionado.cart + 1
        totalCompra = totalCompra + productoSeleccionado.precio
        itemsCarrito= carrito.reduce((acumulator, actual) => {
            return acumulator + actual.cart;
        }, 0)
        // se envian los productos del carrito y el valor total de compra al storage para poder utilizarlos en la pagina del checkout
        localStorage.setItem('carritoStorage', JSON.stringify(carrito))
        localStorage.setItem('totalCompraStorage', JSON.stringify(totalCompra))
        actualizarCarrito()
    } else {
        carrito.push(productoSeleccionado)
        totalCompra = totalCompra + productoSeleccionado.precio
        itemsCarrito= carrito.reduce((acumulator, actual) => {
            return acumulator + actual.cart;
        }, 0)
        // se envian los productos del carrito y el valor total de compra al storage para poder utilizarlos en la pagina del checkout
        localStorage.setItem('carritoStorage', JSON.stringify(carrito))
        localStorage.setItem('totalCompraStorage', JSON.stringify(totalCompra))
        actualizarCarrito( )
    }

    console.log(itemsCarrito)
}

// se agrega un event listener para cuando den click en el carrito este los lleve a la pagina de checkout. 

const checkOut = document.getElementById("check-out")

checkOut.addEventListener("click", () => {
    window.location.assign("checkout.html")
    alert("💖Gracias por tu compra💖")
})

