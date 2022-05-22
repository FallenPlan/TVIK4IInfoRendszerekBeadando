const express = require('express');
const patientRoutes = express.Router();

let Patient = require('../model/Patient');

patientRoutes.route('/patientAdd').post(function (req, res) {
  let patient = new Patient(req.body);
  console.log(patient.date_of_birth);
  patient.date_of_birth = patient.date_of_birth;
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

patientRoutes.route('/getPatients/:visit').get(function (req, res) {
  let visit = req.params.visit;

  if(visit === "urologia") {
    Patient.find({gender: "male"},function (err, patient){
      if(err){
        res.json(err); 
        return;
      } 
      res.json(patient);
    });
  } else if(visit === "mam") {
    Patient.find({gender: "female"},function (err, patient){
      if(err){
        res.json(err); 
        return;
      } 
      res.json(patient);
    });
  } else if(visit === "vac") {
    Patient.find({medical_history: "Nembeteg"},function (err, patient){
      if(err){
        res.json(err); 
        return;
      } 
      res.json(patient);
    });
  }

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
        patient.gender = req.body.gender;
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