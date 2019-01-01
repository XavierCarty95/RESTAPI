const express = require('express');
const router = express.Router();
const Ninja = require('./ninjas');
//get a list of ninjas from the db
router.get('/ninjas', function(req,res){
  res.send({type:'GET'})

})

// add new ninja to database
router.post('/ninjas', function(req,res){
 Ninja.create(req.body).then(function(ninja){
     res.send(ninja);
     
 });
  var ninja = new Ninja(req.body);
  ninja.save();
  
  
});

//update a ninja in db
router.put('/ninjas/:id', function(req,res){
  res.send({type:'PUT'})

});
//delete a ninja from db
router.get('/ninjas/:id', function(req,res){
  res.send({type:'DELETE'})

});

module.exports = router;