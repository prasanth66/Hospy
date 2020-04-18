const express=require('express');
const port=8000;
const app=express();
const session=require('express-session');
const db=require('./config/mongoose');
const passport=require('passport');
const passportJwt=require('./config/passport-jwt-strategy');

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','./views');









app.use(passport.initialize());
app.use(passport.session());




app.use('/',require('./routes'));

//settng up the server
app.listen(port,(err)=>{
    if(err){console.log("error in runnng the server");return;}
    console.log("server is up and running",port);
})