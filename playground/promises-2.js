require("../src/db/mongoose");
const Tasks = require("../src/models/tasks")


// Tasks.findByIdAndDelete("5cf5a087f3ab4b64acd5f38c")
// .then((resolve)=>{
//     if(resolve === null){
//         console.log("Unable to find Task")
//     }
//     else{
//         console.log("ID Task Removed " );

//     }
//     return Tasks.countDocuments({completed: true})
// })
// .then((resolve2)=>{
//     console.log(resolve2);
//     console.log("Printed Docs with Incomplete Status")
// })
// .catch((reject)=>{
//     console.log("ERROR")
// })

//Implementing Async & Await function

const deleteByIDAndCountByCompleted = async (id , completedValue)=>{

    const tasks = await Tasks.findByIdAndDelete(id)
    if(tasks === null){
        console.log("ID not found")
    }
    else{
        console.log("ID Found & Deleting")
    }
    const count = await Tasks.countDocuments({completed: completedValue});
    return count;
}

deleteByIDAndCountByCompleted("5cf59faa6f985e646ad9f1c7" , false)
.then((resolve)=>{
    console.log(resolve)
})
.catch((reject)=>{
    console.log(reject)
})