//scope local
const helloworld = ()=>{
    const hello = 'hello world';
    console.log(hello);
};
helloworld();//funcional
//como es local si queremos llamar la varible sola no nos deja.
//ejemplo.
console.log(hello);
var scope = 'im global';
const functionScope =() =>{
    var scope = 'im just a local';
    const func = ()=>{
        return scope
    }
    console.log(func());
}
 functionScope();