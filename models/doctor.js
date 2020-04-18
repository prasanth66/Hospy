const mongoose=require('mongoose');

//creating doctors register schema
const registerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    }
   
},{timestamps:true});

//storing data collectionn in register
const Register=mongoose.model('doctor',registerSchema);
//exporting schema
module.exports=Register;