var dbcontroller = require('./databaseConfig');



module.exports =
{   //function name:function(){...}
    getPatients: function() {
        
        dbcontroller.query('SELECT * from patient', function(err, rows, fields) {
            if (!err){
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
              console.log('The solution is: ', result[0].name);
            }
            else
              console.log('Error while performing Query.');
          });
          
          dbcontroller.end();
    },
    getPatientThruID: function(patientid)
    {
        console.log(patientid);
        var query = "SELECT * from patient where patientid = ?"; 
        dbcontroller.query(query,[patientid] ,function(err, rows) {
            if (!err){
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);

                console.log(result);
              return result;
            }
            else
              console.log('Patient ID not found');
          });
    }
}