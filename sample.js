// const callbackFunction = (callback)=>{

//     setTimeout(()=>{
//         callback("Error" , "RESULT")
//     },2000)

// }

// callbackFunction((error , result)=>{

//     if(error){
//         return  console.log(error)
//     }

//     console.log(result)
// })


const promisesFunction = new Promise((resolve , reject)=>{

    setTimeout(()=>{

        resolve("SUCCESS")
        reject("ERROR")

    } , 2000)
})


promisesFunction.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})