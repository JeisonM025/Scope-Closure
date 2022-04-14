a = 2;
var a;// el compilador eleva primero esta instruccion, primero define y luego asigna y ejecuta
console.log(a);//2

console.log(a);//intentamos acceder a a pero no esta disponible
var a=2;//undefine

// solo utiliza el hoisting en las declaraciones y no en inicializaciones

function nameOfDog(name) {
    console.log(name);
}

nameOfDog('Elmo');// si pongo esto arriba de la funcion tambien sirve gracias al hoisting
//el motor de javascript antes de ser ejecutaddo lo pone en la memoria y luego ejecuta
//