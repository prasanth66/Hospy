const Patient=require('../../../models/patient');




//regestrng a new patient
module.exports.patientRegister=async function(req,res){

    try {
    
        let data = await Patient.find({number: req.body.number});
        
          //if new patient register
        if(data.length==0){
            

            Patient.create({
                number:req.body.number,
                id:req.body.number+"COVID"
            })

            return res.json(200, {
                message: 'succesfully patient registered & the patent id will be like (patientnumber + COVID)'
               
            })
        }
        //patient already exists
        else{
            
            return res.json(422, {
                message: "patient already exists",
                patient:data
            });
        }

        
    } catch (error) {
        console.log('Error', error);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}


//creating report to the patient
module.exports.createReport=async function(req,res){
   try {
       
    let data = await Patient.find({id: req.params.id});
    //if id is invald
      if(data.length==0){
        console.log('Error', error);
        return res.json(500, {
            message: "invalid patient id"
        });
      }
      //creating report
      else{
         
       
        Patient.create({
            id:req.params.id,
            doctor:req.body.doctor,
            status:req.body.status
           
        })
       

        return res.json(200, {
            message: 'succesfully patient report created/updated'
           
        })
      }


   } catch (error) {
    console.log('Error', error);
    return res.json(500, {
        message: "Internal Server Error"
    });
   }
}


//to retrive specifc patent reports
module.exports.patientReports=async function(req,res){
    try {
        //sortng accordng to latest date
        var mysort = {updatedAt: -1};
        let data = await Patient.find({id: req.params.id}).sort(mysort);;
      //if no reports found
        if(data.length==0){

            return res.json(500, {
                message: "No reports"
            });


        }
        //if reports found
        else{
            return res.json(200, {
                reports:data
               
            })
        }

    } catch (error) {
        console.log('Error', error);
    return res.json(500, {
        message: "Internal Server Error"
    });
    }
}

//dsplaying all reports
module.exports.allReports=async function(req,res){
   
    try {
       
        let data = await Patient.find({status: req.params.status});
         
        
        if(data.length==0){

            return res.json(500, {
                message: "No reports"
            });


        }else{
            return res.json(200, {
                reports:data
               
            })
        }


        
    } catch (error) {
        console.log('Error', error);
    return res.json(500, {
        message: "Internal Server Error"
    });
    }
}