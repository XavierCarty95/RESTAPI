const express = require('express');
const router = express.Router();
const Ninja = require('./ninjas');
//get a list of ninjas from the db
router.get('/ninjas', function(req, res, next) {
    /*Ninja.find({}).then(function(ninjas){
        res.send(ninjas); 
    })
    */
    
    Ninja.geoNear(
        {type:'Point',coordinates:[parseFloat(req.query.Ing), parseFloat(req.query.lat)]},
        {maxDistance:100000, sphereical: true}
        
    
    
    ).then(function(ninjas){
      res.send(ninjas)  
    });
        

})

// add new ninja to database
router.post('/ninjas', function(req, res, next) {
    Ninja.create(req.body).then(function(ninja) {
        res.send(ninja);

    }).catch(next)

});

//update a ninja in db
router.put('/ninjas/:id', function(req, res, next) {
    Ninja.findByIDAndUpdate({ _id: req.params.id }, req.body).then(function(ninja) {
        Ninja.findOne({ _id: req.params.id }).then(function(ninja) {
            res.send(ninja);
        });

    });

});
//delete a ninja from db
router.delete('/ninjas/:id', function(req, res) {
    Ninja.findByIDAndRemove({ _id: req.params.id }).then(function(ninja) {
        res.send(ninja);
    })
    res.send({ type: 'DELETE' })

});

module.exports = router;
