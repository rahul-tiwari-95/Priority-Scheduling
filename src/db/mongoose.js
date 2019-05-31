const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api" , {
    useNewUrlParser: true,
    useCreateIndex: true

});
//Connecting estabilished with the database

//Now, lets create Model with set defined properties 

//Create Model Tasks 
// Create an instance of Tasks


//Creating a Model structure
const Tasks = mongoose.model('Tasks' , {

    description : {
        type: String,
        required: true,

    },
    completed:{
        type: Boolean,
        default: false, // Setting the default value of Boolean
    }
})

new Tasks({

        description: ' Eating Lunch ',
        completed: true
        
})
.save()
.then((resolve)=>{

    console.log("SUCCESS")
})
.catch((error)=>{

    console.log("ERROR")
})