// arreglos

const numeros = [10,20, 30, 40,50];

console.table(numeros);

const meses = new Array('Enero','Febrero', 'Marzo', 'Abril', 'Mayo');

console.table(meses);

const arreglo = ['Hola', 10, true, 'si', null, {nombre: 'Juan',trabajo: 'programador'}, [1,2,3]];

console.table(arreglo);

console.log(numeros[4]);

meses.forEach(function(mes){
    console.log(mes);
})