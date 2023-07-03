const number = 15;

let ourPromise = new Promise((resolve,reject)=>{
    if(number > 10) {
        resolve("Number is grater than 10")
    } else {
        reject("Number is lower than 10")
    }
})

ourPromise
    .then((val)=>console.log(val))
    .catch((err)=>console.log(err))