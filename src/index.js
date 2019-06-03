const express = require ("express");
require('./db/mongoose');
const Users = require("./models/users")
const Tasks = require("./models/tasks");
const app = express();
const port = process.env.PORT || 3000;


//Parse the incoming data as JSON
app.use(express.json()) //This code parses incoming JSON into an Object. So that we can use that data as an object


//Endpoint of Creating Users
app.post('/users' , (request , response)=>{
    
    //Here the code is added for Users.
    const users = new Users(request.body)
    //The code below pushed the data to the DB
    users.save()
    .then((resolve)=>{
        response.send(users)
    }).catch((error)=>{

        response.status(404)
        response.send(error)

    })
    
    
})

//Endpoint of Reading Users

app.get('/users' , (request , response)=>{

    Users.find({})
    .then((resolve)=>{
        response.send(resolve)
    })
    .catch((error)=>{
        response.status(404),
        response.send("ERROR")
    })
})

//Endpoint for Reading Users via ID

app.get('/users/:id' , (request , response)=>{

    _id = request.params.id;
    Users.find({
        _id: _id
    })
    .then((resolve)=>{
        response.send(resolve)
    })
    .catch((error)=>{
        response.statusCode(404);
        response.send("ERROR")
    })
})





//Endpoint for Creating Tasks
app.post('/tasks' , (request , response)=>{

    const tasks = new Tasks(request.body);

    tasks
    .save()
    .then((resolve)=>{
        response.send(request.body)
    })
    .catch((error)=>{
        response.status(404);
        response.send("ERROR")
    })
})

//Endpoint for Reading Tasks

app.get('/tasks' , (request , response)=>{
    Tasks.find({})
    .then((resolve)=>{
        response.send(resolve)

    })
    .catch((error)=>{
        response.status(404);
        response.send("ERROR")
    })
})


//Endpoint for Reading Tasks by ID

app.get('/tasks/:id' , (request , response)=>{
    _id = request.params.id;
    Tasks.find({
        _id: _id
    })
    .then((resolve)=>{
        response.send(resolve)
    })
    .catch((error)=>{
        response.status(404);
        response.send("ERROR")
    })
})

app.listen(port , ()=>{

    console.log("Server Running on " + port)
})