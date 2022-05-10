const express = require('express');
const { parentPort } = require('worker_threads');
const app = express();
const patientRoutes = express.Router();

let Patient = require('../model/Patient');

patientRoutes.route('/patientAdd').post(function (req, res) {
  let patient = new Patient(req.body);
  patient.save().then(patient => {
      res.status(200).json({'patient': 'patient in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
patientRoutes.route('/getPatient').get(function (req, res) {
  Patient.find(function (err, patient){
    if(err){
      console.log(err);
    }
    else {
      res.json(patient);
    }
  });
});

//Get Patient by ID
patientRoutes.route('/getPatient/:id').get(function (req, res) {
  let id = req.params.id;
  Patient.findById(id,function (err, patient){
    if(err) res.json(err);
    else
      res.json(patient);
  });
});


patientRoutes.route('/editPatient/:id').get(function (req, res) {
  let id = req.params.id;
  Patient.findById(id,function (err, patient){
    if(err) res.json(err);
    else
    res.json(patient);
  });
});

patientRoutes.route('/getPatient/delete/:id').get(function (req, res) {
  Patient.findByIdAndRemove({_id: req.params.id}, function(err, patient){
    if(err) res.json(err);
    else res.json('Successfully removed' +patient);
  });
});

/*parentRoutes.delete('/getPatient/delete/:id', function(req, res) {
  Patient.findByIdAndRemove(req.params.id, function(err, patient) {
    if(err) {
      res.send("Error deleting patient!");
    } else {
      res.json(patient);
    }
  });
});*/

patientRoutes.route('/patientUpdate/:id').post(function (req, res, next) {
  Patient.findById(req.params.id, function(err, patient) {
    if (!patient)
      return next(new Error('Could not load Document'));
    else {
        patient.pname = req.body.pname;
        patient.date_of_birth = req.body.date_of_birth;
        patient.taj_number = req.body.taj_number;
        patient.medical_history = req.body.medical_history;
        patient.save().then(patient => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

module.exports = patientRoutes;