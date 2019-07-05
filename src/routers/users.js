const express = require("express");
const router = new express.Router(); //Creating a new Router
const Users = require("../models/users")

router.post('/users' , async (request , response)=>{
    
    //Using Async and Await 
       // const users = new Users(request.body);
   
       try{
   
           // await users.save();
           const users = await new Users(request.body).save();
           response.status(200).send(users);
           
       }
       catch(error){
           response.status(404).send("ERROR")
       }
       
   })
   
   //Endpoint of Reading Users
   
   router.get('/users' , async (request , response)=>{
   
   
       try{
            const users = await  Users.find({});
            response.send(users).status(200)
          }
       catch(error){
   
           response.send("ERROR").status(404)
       }
   
   })
   
   //Endpoint for Reading Users via ID
   
   router.get('/users/:id' , async (request , response)=>{
   
       _id=request.params.id;
   
       try{
               const users = await Users.find({_id});  //This await function transfers the "resolve" data into const users. thats what await does simply
               response.send(users).status(200)
       }
       catch(error){
   
               response.send("ERROR").status(404)
       }
   })
   
   //Endpoint for Updating User
   
   
   router.patch('/users/:id' , async(request , response)=>{
   
       try{
   
           const user = await Users.findByIdAndUpdate(request.params.id , request.body , {new:true})
   
           if(!user){
               return response.status(404).send("USER NOT FOUND")
           }
   
           response.status(200).send(user)
   
       }
       catch(error){
   
           response.status(404).send("ERROR")
       }
   })
   
   router.delete('/users/:id' , async (request , response)=>{
       try{
               
           const users = await Users.findByIdAndDelete(request.params.id)
   
           if(!users){
               return response.status(404).send("USER NOT FOUND")
           }
   
           response.status(200).send(users)
       }
   
   
       catch(error){
           response.send("ERROR").status(404)
   
       }
   })
   
   


module.exports = router;


