
//unir dos productos en uno solo 

const producto = {
    nombreProducto : 'Monitor 20 puladas',
    precio : 300,
    disponible : true
}

const medidas = {
    peso: '1kg',
    medida : '1m'
}

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);