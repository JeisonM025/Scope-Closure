const fruits = ()=>{
    if (true){
        var fruits1= 'apple';// al momento de mostrarla solo funciona con var para console
        let fruits2= 'banana';//para llamar estas tenemos que llamar la funcion
        const fruits3 ='kiwi';//o poner los console dentro del if el ambito donde se encuentra
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
  
}

fruits();


let x =1;{//global
    let x =2;
    console.log(x);//local
}
console.log(x);
// con let nos muestra valores locales y globales definidos 
//cambiando por var siempre me va amostrar el ultimo definido en este caso 2

const anortherFunction =()=>{//para hacer iteraciones de numeros diferentes ej. 1,2,3,4
    for( let i =0; i<10; i++){//se recomienda dentro del for poner let
        setTimeout(()=>{
        console.log(i);  
        }, 1000)
    }
};
anortherFunction();