class Producto{
    constructor(id, nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
    }

    descripcion(){
        return "id: "+this.id+ "nombre: "+this.nombre+ " precio: $"+this.precio+"\n"  
    }

    descripcionCarrito(){
        return "id: "+this.id+ "nombre: "+this.nombre+ " precio: $"+this.precio+ "cantidad: "+this.cantidad+"\n" 
    }
}

class Carrito{
    constructor(){
        this.listaCarrito = []
    }

    agregar(producto){
        this.listaCarrito.push(producto)
    }

    mostrar(){
        let descripcionListaCompra = "Carrito: \n\n"
        this.listaCarrito.forEach(producto => {
            //descriptionListaProductos = descriptionListaProductos + " id: "+producto.id+ "nombre: "+producto.nombre+ " precio: "+producto.precio+"\n"//
            descripcionListaCompra = descripcionListaCompra + producto.descripcionCarrito()
        })
        return descripcionListaCompra
    }

    calcularTotal(){
        return this.listaCarrito.reduce( (total,producto) => total + producto.precio * producto.cantidad ,0)
    }
}

class ProductoControler{
    constructor(){
        this.listaProductos = []
    }

    agregar(producto){
        this.listaProductos.push(producto)
    }

    mostrar(){
        let descripcionListaProductos = "Recuerde el ID del producto que desea comprar\n\n"
        this.listaProductos.forEach( producto => {
            //descriptionListaProductos = descriptionListaProductos + " id: "+producto.id+ "nombre: "+producto.nombre+ " precio: "+producto.precio+"\n"//
            descripcionListaProductos = descripcionListaProductos + producto.descripcionCarrito()
        })
        return descripcionListaProductos
    }

    buscarId(id){
        return this.listaProductos.find(producto => producto.id == id)
    }
}

const p1 = new Producto(1, "shampoo", 850)
const p2 = new Producto(2, "acondicionador", 1050)
const p3 = new Producto(3, "desodorante", 720)
const p4 = new Producto(4, "jabón", 560)
const p5 = new Producto(5, "dentífrico", 1250)

const carrito = new Carrito()
const controladorp = new ProductoControler()

controladorp.agregar(p1)
controladorp.agregar(p2)
controladorp.agregar(p3)
controladorp.agregar(p4)
controladorp.agregar(p5)

alert( controladorp.mostrar() )

let id = Number(prompt("Ingrese el ID del producto que desea comprar!"))

const producto = controladorp.buscarId(id)

let cantidadDeseada = Number(prompt("Ingrese la cantidad que desea"))

producto.cantidad = cantidadDeseada

carrito.agregar(producto)

alert( carrito.mostrar() )

alert( "El total es de: $"+carrito.calcularTotal() )

