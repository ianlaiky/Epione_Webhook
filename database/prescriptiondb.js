var dbcontroller = require('./database-config');



module.exports =
{   //function name:function(){...}
    getAllPrescription: function(callback) {
        
        dbcontroller.query('SELECT * from prescription', function(err, rows) {

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

    getAllPrescriptionById: function(prescriptionId,callback) {
        var query = "SELECT * from prescription where prescriptionId = ?";
        dbcontroller.query(query,[prescriptionId], function(err, rows) {

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

    getAllPrescriptionByPatientId: function(patientId,callback) {
        var query = "SELECT * from prescription where patientId = ?";
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

    getAllPrescriptionByMedId: function(medId,callback) {
        var query = "SELECT * from prescription where medId = ?";
        dbcontroller.query(query,[medId], function(err, rows) {

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