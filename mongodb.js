//This is a Skeleton code of how to set up a basic MongoDB Connection
//Command for connecting DB
// /User/rahultiwari/mongodb --dbpath=/User/rahultiwari/mongodb-data

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;


const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager"


MongoClient.connect(connectionURL , {useNewUrlParser: true} , (error, client)=>{

    if(error){
        return console.log("Error" , error)
    }

    const db = client.db(databaseName) //This command simply makes a new DB 

    setTimeout(()=>{
        db.collection('tasks').deleteMany({

            completed: false
        })
        .then((resolve)=>{
            console.log(resolve)
        })
        .catch((error)=>{
            console.log("ERROR")
        })
    },3000)
   

    db.collection('tasks').insertMany([
        {
            description: "Haircut",
            completed: false
        },
        {
            description: "Play Piano",
            completed: false
        },
        {
            description: "SEX",
            completed:false
        }
    ])
    .then((resolve)=>{
        console.log("SUCCESS")
    })
    .catch((error)=>{
        console.log("ERROR")
    })

    
  

})


