

const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://Rahul-Test:MK%40043074@sample-db-ud8rv.mongodb.net/test?retryWrites=true&w=majority" , {
    useNewUrlParser: true,
    useCreateIndex: true

});





















//defining model structure
// const Tasks = mongoose.model('Tasks' , {

//     description:{
//         type: String,
//         required: true
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     }
// })


// //sample data

// new Tasks({
//     description: "Going to India",
//     completed: false
// })
// .save()
// .then((resolve)=>{
//     console.log("SUCCESS")
// })
// .catch((error)=>{
//     console.log("ERROR")
// })