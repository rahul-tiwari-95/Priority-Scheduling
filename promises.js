const add = (a,b)=>{

    return new Promise((response , reject)=>{
        //When you return a new Promise 
        // You get access to then and catch functions. 
        //which in return use response and reject parameters.
        response(a+b)
    })
}
const sum=0;
add(100,200)
.then((resolve)=>{
    console.log(resolve);
    return add(resolve , 200)
    sum=resolve;

    //the return statement is important 
    //as it returns the call to the next then clause.

})
.then((resolve2)=>{
    console.log(resolve2);
    return add(resolve2 , sum)
    sum=resolve2;
})
.then((resolve3)=>{
    console.log(resolve3)
})
.catch((error)=>{
    console.log("ERROR")
})







// add(1,2)
// .then((response)=>{
    
//     console.log(response)

//     add(response , 100)
//     .then((response2)=>{
//         console.log(response2)
//     })
//     .catch((reject)=>{
//         console.log("ERROR")
//     })
// })
// .catch((reject)=>{
//     console.log("ERROR" , reject)
// })


