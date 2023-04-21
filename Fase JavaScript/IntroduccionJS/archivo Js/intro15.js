//array methods

const meses = ['Enero','Febrero','Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500 },
    {nombre: 'Television 50 pulgadas 20', precio: 700 },
];

//foreach

meses.forEach(function(mes){
    // console.log(mes);
    if(mes =='Marzo'){
        console.log('Marzo si existe');
    }
});

//includes
let resultado = meses.includes('Diciembre');

//some ideal para arraglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular Pro'
});

//Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio;
},0);


//filter

resultado = carrito.filter(function(producto){
    return producto.precio = 400;
});

console.log(resultado);







