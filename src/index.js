const express = require ("express");
require('./db/mongoose');
const Users = require("./models/users")
const Tasks = require("./models/tasks");
const userRouter = require("./routers/users")
const taskRouter = require("./routers/tasks");
const app = express();
const port = process.env.PORT || 3000;


//Parse the incoming data as JSON
app.use(express.json()) //This code parses incoming JSON into an Object. So that we can use that data as an object
app.use(userRouter)
app.use(taskRouter)

app.listen(port , ()=>{

    console.log("Server Running on " + port)
})