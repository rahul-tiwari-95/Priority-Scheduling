const express = require("express");
const router = new express.Router();

const Tasks = require("../models/tasks")


//Endpoint for Creating Tasks
router.post('/tasks' , async (request , response)=>{

    try{

        const tasks = await new Tasks(request.body).save();
        response.send(tasks).status(200);
    }
    catch(error){
        response.send("ERROR").status(404)
    }
})

//Endpoint for Reading Tasks

router.get('/tasks' , async (request , response)=>{
    
    try{

        const tasks = await Tasks.find({});
        response.send(tasks).status(200);
    }
    catch(error){
        response.send("ERROR").status(404)
    }
})


//Endpoint for Reading Tasks by ID

router.get('/tasks/:id' ,async  (request , response)=>{
    
    _id = request.params.id;

    try{

        const tasks = await Tasks.find({_id});
        response.send(tasks).status(200);

    }
    catch(error){

        response.send("ERROR").statusCode(404)

    }
})


//Endpoint for Updating Task by ID

router.patch('/tasks/:id' , async (request , response)=>{

    try{
        const tasks = await Tasks.findByIdAndUpdate(request.params.id , request.body , {new:true})

        if(!tasks){
            return response.send("Task not found")
        }

        response.send(tasks).status(200)
    }
    
    catch(error){   

        response.send("ERROR").status(404)

    }
})

router.delete('tasks/:id' , async(request, response)=>{

    try{

        const tasks = await Tasks.findByIdAndDelete(request.params.id);

        if(!tasks){
            return response.status(404).send("Task not Found")
        }

        response.status(200).send(tasks)
    }
    catch(error){

        response.status(404).send("ERROR")
    }
})

module.exports = router;