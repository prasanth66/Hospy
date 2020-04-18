const User = require('../../../models/doctor');
const jwt = require('jsonwebtoken');


//doctor logging in
module.exports.createSession = async function(req, res){

    try{
        
        let user = await User.findOne({name: req.body.name});
           //if password doesnt match
        if (!user || user.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }
         //if password is good generatin the token
        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign(user.toJSON(), 'hospy', {expiresIn:  '100000'})
            }
        })

    }catch(err){
        console.log('Error', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

//new doctor regstration
module.exports.doctorRregister=async function(req,res){
    try {
    
        let data = await User.find({name: req.body.name});
          //if the doctor doesnt exist create one
        if(data.length==0){
            

            User.create({
                name:req.body.name,
                password:req.body.password
            })

            return res.json(200, {
                message: 'succesfuuly doctor registered'
                
            })
        }
        //if doctor alredy exists
        else{
            return res.json(422, {
                message: "name already exists"
            });
        }

        
    } catch (error) {
        console.log('Error', error);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}