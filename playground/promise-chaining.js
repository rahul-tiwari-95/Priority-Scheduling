require('../src/db/mongoose');
const Users = require('../src/models/users')


//5cf58e258f9cec637e41ef16

// Users.findByIdAndUpdate("5cf5f0caa469da659f54f6fd" , { age: 100})
// .then((resolve)=>{
//     console.log("SUCCESS")
//     return Users.countDocuments({ age: 100}) 
//     //This is Chaining Promises in action
// })
// .then((resolve2)=>{
//     console.log(resolve2)
// })
// .catch((reject)=>{
//     console.log("ERROR")
// })

//Using Async and Await

// First develop an Async Function

const updateAgeAndCount = async(id, age)=>{

    //Declare await
    //await basically stops aysnc until its executed
    //this is what I think
    //As stated earlier one advantage of using async and await is that
    //you dont have to chain multiple "then" statements into one

    const user = await Users.findByIdAndUpdate(id , {age:age})
    const count = await Users.countDocuments({age:age})

    return {
        count,
        age
    }

}

updateAgeAndCount("5cf5ae313377d964f4993350" , 9900)
.then((resolve)=>{
    console.log("RESULT " , resolve)
})
.catch((reject)=>{
    console.log("ERROR " , reject)
})