const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


var patientDB = require('../database/patientdb');
var medicineDB = require('../database/medicinedb');
var prescriptionDB = require('../database/prescriptiondb');
var reminderDB = require('../database/reminderDB');

const router = express.Router();

// DATABASE


// Patients

router.get('/getAllPatient', function (req, res) {


    patientDB.getAllPatient(function (err, result) {
        console.log(result);

        res.send(result)

    });


});


router.get('/getPatientThruID', function (req, res) {

    var patientId = req.query.patientid.toString();

    console.log(patientId);
    patientDB.getPatientThruID(patientId, function (err, result) {
        console.log(result);

        res.send(result)

    });


});


// Patients End

//Medicine

router.get('/getAllMedicine', function (req, res) {


    medicineDB.getAllMedicine(function (err, result) {
        console.log(result);

        res.send(result)

    });


});


router.get('/getAllMedicineById', function (req, res) {


    medicineDB.getAllMedicineById(req.query.medId.toString(), function (err, result) {
        console.log(result);

        res.send(result)

    });


});

//Medicine End

// Prescription
router.get('/getAllPrescription', function (req, res) {


    prescriptionDB.getAllPrescription(function (err, result) {
        console.log(result);

        res.send(result)

    });


});

router.get('/getAllPrescriptionById', function (req, res) {


    prescriptionDB.getAllPrescriptionById(req.query.prescriptionId.toString(), function (err, result) {
        console.log(result);

        res.send(result)

    });


});

router.get('/getAllPrescriptionByPatientId', function (req, res) {


    prescriptionDB.getAllPrescriptionByPatientId(req.query.patientId.toString(), function (err, result) {
        console.log(result);

        res.send(result)

    });


});

router.get('/getAllPrescriptionByMedId', function (req, res) {


    prescriptionDB.getAllPrescriptionByMedId(req.query.medId.toString(), function (err, result) {
        console.log(result);

        res.send(result)

    });


});


// Prescription ENd


// Reminder

router.get('/getAllReminder', function (req, res) {


    reminderDB.getAllReminder(function (err, result) {
        console.log(result);

        res.send(result)

    });


});

router.get('/getAllReminderById', function (req, res) {


    reminderDB.getAllReminderById(req.query.reminderId.toString(), function (err, result) {
        console.log(result);

        res.send(result)

    });


});
router.get('/getAllReminderByPatientId', function (req, res) {


    reminderDB.getAllReminderByPatientId(req.query.patientId.toString(), function (err, result) {
        console.log(result);

        res.send(result)

    });


});
router.get('/getAllReminderByDate', function (req, res) {


    reminderDB.getAllReminderByDate(req.query.dateTake.toString(), function (err, result) {
        console.log(result);

        res.send(result)

    });


});

router.get('/getAllReminderNoAdherence', function (req, res) {


    reminderDB.getAllReminderNoAdherence(function (err, result) {
        console.log(result);

        res.send(result)

    });


});

// Reminder END


// MODIFICATION / UPDATE Statements



router.get('/updateReminderPrescriptionTaken', function (req, res) {


    reminderDB.updateReminderPrescriptionTaken(req.query.setAdhered.toString(),req.query.reminderId.toString() ,function (err, result) {
        console.log(result);

        res.send(result)

    });


});
// Insert
// reminder insert statement
router.get('/insertDataIntoReminder', function (req, res) {


    reminderDB.insertDataIntoReminder(req.query.reminderId.toString(),req.query.dateTake.toString(),req.query.timeTake.toString(),req.query.patientId.toString(),req.query.prescriptionId.toString(),req.query.adhered.toString() ,function (err, result) {
        console.log(result);

        res.send(result)

    });


});



// END OF DATABASE
module.exports = router;