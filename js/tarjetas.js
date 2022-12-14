function cardsHtml ( array ) {
    
    const contenedor = document.querySelector(".container")

    array.map( ( productos ) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class ="container-img">
                <img class="imgcard" src=${productos.img} alt=${productos.nombre}>
            </div>
            <h2 class="prd-nombre">
                ${productos.nombre}
            </h2>
            
            <h3 class="prd-precio">
                $${productos.precio}
            </h3>
            <div class="divbuttons">
                <button class="likebutton">
                    ♥
                </button>
                <button id="boton-${productos.id}" class="likebutton2">
                    🛒
                </button>
            </div>
        `
        contenedor.appendChild(card)
    })

}

cardsHtml(productos)


// CARRITO DE COMPRAS - AÑADIR + LOCALSTORAGE

let carrito = []

function aniadirAlCarrito (array) {
    const botonAniadir = document.querySelectorAll(".likebutton2")
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.find((elemento) => {
                return elemento.id === Number(id)
            })
            carrito.push(filtrarProducto)
            console.log(carrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
    })
}

aniadirAlCarrito(productos)

const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
