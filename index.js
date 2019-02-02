const express = require('express');
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
// set up express app
const app = express();
process.env['PORT'] = 8082


//connect to mangodb
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(express.static("public"))

app.use(bodyParser.json());

app.use('/index', require('./routes')); 
//initialize routes 

app.use(function(err,req,res,next){
    //console.log(err)
   res.status(422).send({error:err.message});
});

// listen for requests
app.listen(process.env.PORT , process.env.IP, function(){
    console.log('now listening for requests on ' , process.env.PORT);
});


