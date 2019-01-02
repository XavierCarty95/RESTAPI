const express = require('express');
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
// set up express app
const app = express();


//connect to mangodb

mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes')); 
//initialize routes 

app.use(function(err,req,res,next){
    //console.log(err)
   res.status(422).send({error:err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});


