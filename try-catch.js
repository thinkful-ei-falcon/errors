const obj= {
    a:{
        location:'USA'
    },
    b:{
        location:'Australia'
    }
}

console.log(obj['a']['location']);
console.log(obj['b']['location']);
console.log(obj['b']['locations']);
//console.log(obj['z']['locations']);


try {
    //let newLoc = obj['z']['locations'];   //Throws an error object
    //throw `I'm a error string!`;  //Throws an error string
    throw new Error("I am an error Object")
}
catch(e){
    if(typeof e==='string'){
        console.log(e);
    }else{
        console.log(e)
        console.log(`${e.name}: ${e.message}`);
    }
}

console.log('It didnt crash! Hooray!')