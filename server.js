const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

var patientDB = require('./database/patientdb');
//link to patient database

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended: true}));
//need this for bodyparser
var json_body_parser = bodyParser.json();

//listen to server on port 3000
app.listen(port, function () {
    console.log('Example app listening on port');
});

app.get('/', function (req, res) {
    //res.send('Hello World');
    res.send("server open");

    //testing-remove later
    var sessionid = 'projects/epione-test/agent/2';
    console.log(sessionid);
    patientDB.getPatientThruID('2');
    //getPatientThru(sessionid);

});

//webhook post function
app.post('/webhook', json_body_parser, function (req, res) {

    console.log('webhook');
    //get session id to determine patient

    //get intent,params

    //get contexts 


});

app.get('/getPatientThruID', function (req, res) {

    var patientId = req.query.patientId.toString();

    console.log(patientId);

    console.log("!@3");
    patientDB.getPatientThruID("1", function (err, result) {
        console.log(result);

        res.send(result)

    });


});


//TODO CONNECT TO DATABASE
//AND DO RELAVENT CALLS TO OTHER API IF NEEDED

/**
 * Get patient through the session id
 * @param sessionid
 */

function getPatientIDThru(sessionid) {
    //projects/epione-test/agent/intents/facd16aa-e3db-4de0-b26e-74f9c771e9b6
    //uncomment later
    //var str = req.body.session;
    var sessions = sessionid.split("/");
    //console.log("Patient ID: " + sessions[sessions.length - 1 ] );
    var patientid = sessions[sessions.length - 1];
    patientDB.getPatientThruID(patientid);
}

// git commit add . 
// git commit -m "message"
// git push remote origin