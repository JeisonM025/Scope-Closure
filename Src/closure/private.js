const person =()=>{
    var saveNmae ='name';
    return{
        getname: () =>{
            return saveNmae;
        },
        setName: (name)=>{
            saveNmae=name;
        },
    };
};

newPerson = person();
console.log(newPerson.getname());
newPerson.setName('Thomas');
console.log(newPerson.getname());