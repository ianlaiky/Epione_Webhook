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


    }

};