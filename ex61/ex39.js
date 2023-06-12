let isLogged = true;

function logIn(param) {
    return new Promise((resolve, reject) => { 
    if(param) {
        resolve(Math.random());
    } else {
        reject(new Error("Not Logged In!"))
    }
})
};

function secondPromise(number) {
    return new Promise((resolve,reject) =>{
    if(number > 0.5) {
        resolve(`{name: "John", age: 24}`)
    } else {
        reject( new Error("Error!"))
    }
})
};




logIn(isLogged)
    .then(secondPromise)
    .then((val)=>console.log(val))
    .catch((err)=>console.log(err))
    .finally(()=>console.log("finally!"))