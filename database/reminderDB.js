var dbcontroller = require('./database-config');



module.exports =
{   //function name:function(){...}
    getAllReminder: function(callback) {
        
        dbcontroller.query('SELECT * from reminder', function(err, rows) {

            if (!err){
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
                callback(null, result);
            }
            else
              console.log('Error while performing Query.');
          });
          

    },

    getAllReminderById: function(reminderId,callback) {
        var query = "SELECT * from reminder where reminderId = ?";
        dbcontroller.query(query,[reminderId], function(err, rows) {

            if (!err){
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
                callback(null, result);
            }
            else
                console.log('Error while performing Query.');
        });


    },
    getAllReminderByPatientId: function(patientId,callback) {
        var query = "SELECT * from reminder where patientId = ?";
        dbcontroller.query(query,[patientId], function(err, rows) {

            if (!err){
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
                callback(null, result);
            }
            else
                console.log('Error while performing Query.');
        });


    },
    getAllReminderByDate: function(dateTake,callback) {
        var query = "SELECT * from reminder where dateTake = ?";
        dbcontroller.query(query,[dateTake], function(err, rows) {

            if (!err){
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
                callback(null, result);
            }
            else
                console.log('Error while performing Query.');
        });


    },
    getAllReminderNoAdherence: function(callback) {
        var query = "SELECT * from reminder where adhered = false";
        dbcontroller.query(query, function(err, rows) {

            if (!err){
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
                callback(null, result);
            }
            else
                console.log('Error while performing Query.');
        });


    },
    updateReminderPrescriptionTaken: function(adhered,reminderId,callback) {
        var query = "UPDATE reminder SET adhered = ? WHERE reminderId = ?";
        dbcontroller.query(query,[adhered,reminderId], function(err, rows) {

            if (!err){
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
                callback(null, result);
            }
            else
                console.log('Error while performing Query.');
        });


    },

    insertDataIntoReminder: function(reminderId,dateTake,timeTake,patientId,prescriptionId,adhered,callback) {
        var query = "insert into reminder (reminderId,dateTake,timeTake,patientId,prescriptionId,adhered) values (?,?,?,?,?,?)";
        dbcontroller.query(query,[reminderId,dateTake,timeTake,patientId,prescriptionId,adhered], function(err, rows) {

            if (!err){
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
                callback(null, result);
            }
            else
                console.log('Error while performing Query.');
        });


    }

};