const mongoose=require('mongoose');


//creating doctors Patient schema
const patientSchema=new mongoose.Schema({
    number:{
        type:String,
       
    },
    doctor:{
        type:String,
        default:""
       
    },
    status:{
        type:String,
        default:""
       
    },
    id:{
        type:String,
        
    }
  
   
},{timestamps:true});



//storing data collectionn in patient
const Patient=mongoose.model('patient',patientSchema);

//exporting schema
module.exports=Patient;