//destructuring de objetos (sacar de una estructura)

//objeto
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

// console.log(producto.precio);
// console.log(nombreProducto);

//Destructuring
const{precio} = producto;
console.log(precio);