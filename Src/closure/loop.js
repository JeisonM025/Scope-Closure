const anortherFunction =()=>{//para hacer iteraciones de numeros diferentes ej. 1,2,3,4
    for( let i =0; i<10; i++){//se recomienda dentro del for poner let
        setTimeout(()=>{
        console.log(i);  
        }, 1000)
    }
};
anortherFunction();