//Object Methods

// "use strict" = correr js en modo estricto

//.seal = permite modificar las propiedades exitentes

//.freeze = no deja modificar las propiedades existentes

const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true

}

Object.freeze(producto); //congelar para no agregar mas valores

producto.imagen = 'imagen.jpg';

console.log(producto);

