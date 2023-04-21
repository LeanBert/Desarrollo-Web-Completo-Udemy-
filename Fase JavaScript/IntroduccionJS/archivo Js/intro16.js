
//Declaracion de funcion
function sumar(){
    //cuerpo de una funcion
    console.log(10 + 10);
}

//llamar a ala funcion
sumar(); // se ve el resultado en consola

//expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3);
}

sumar2();

//IIFEE (ifi)
(function(){
    console.log('Esto es una funcion');
})();