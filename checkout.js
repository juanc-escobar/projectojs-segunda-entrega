
const facturaConntenedor = document.getElementById("factura-contenedor")

let carrito = JSON.parse(window.localStorage.getItem("carritoStorage"))
let totalCompra = JSON.parse(window.localStorage.getItem("totalCompraStorage"))

console.log(carrito)
console.log(totalCompra)

// se crea una funcion para mostrar los productos seleccionados con las cantidades y evitar que se repitan cada vez que se agrega un nuevo producto. 

const actualizar = () => {
    facturaConntenedor.innerHTML = ""
    const articulosCarrito = document.createElement("h2")
    articulosCarrito.classList.add("titulos-seccion")
    articulosCarrito.innerHTML = `Articulos Seleccionados`
    facturaConntenedor.appendChild(articulosCarrito)
    carrito.forEach((producto) => {
        const div = document.createElement("div")
        div.classList.add("factura")
        div.innerHTML = `
            <h3 class="factura-titulo padd-min">${producto.titulo}</h3>
            <p id="contador" class="txt-center"> Cantidad: ${producto.cart}</p>
            <p class="txt-center">Precio: $ ${producto.precio}</p>
            `
        facturaConntenedor.appendChild(div)
    })
    
    // se calcula y muestra el total de la compra. 
    
    let impuestos = totalCompra * 0.19
    let envio = Math.floor(Math.random()*20)
    let granTotal = totalCompra + impuestos + envio
    const divtotal = document.createElement("div")
    divtotal.classList.add("total")
    divtotal.innerHTML = `
    <section class="total">
    <h2 class="titulos-seccion"> Total Compra </h2>
    <p class="txt-center padd-min"> Compra total: $ ${totalCompra} USD </p>
    <p class="txt-center padd-min"> Impuestos: $ ${impuestos} USD </p>
    <p class="txt-center padd-min"> Envio: $ ${envio} USD </p>
    <p class="txt-center padd-min bold"> Total a Pagar: $ ${granTotal} USD </p>
    </section>
    `
    facturaConntenedor.appendChild(divtotal)
}

actualizar();
