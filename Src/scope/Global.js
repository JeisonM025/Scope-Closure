//Scope GLOBAL
var hello = 'Hello';
let world = 'Hello world';
const helloword='Hello word !!';

const anortherFunction =() =>{
    console.log(hello);
    console.log(world);
    console.log(helloword);
}

anortherFunction();

//MALA PRACTICA PARA ASIGNAR VARIABLES GLOBALES

const hellowordF = () =>{
    globalVar = 'im global'
}

hellowordF();
console.log(globalVar);
