const mongoose = require("mongoose");
const validator = require("validator");


const Users = mongoose.model('Users',{

    name:{
        type: String,
        required:true,
        
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                console.log("EMAIL INVALID")
            }
        }
    },
    password:{
            type: String,
            required: true,
            
    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if(value<0){
                console.log("AGE IS INVALID")
            }
        }
    }
})

module.exports = Users