var dbcontroller = require('./database-config');



module.exports =
{   //function name:function(){...}
    getAllMedicine: function(callback) {
        
        dbcontroller.query('SELECT * from medicine', function(err, rows) {

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

    getAllMedicineById: function(medId,callback) {
        var query = "SELECT * from medicine where medId = ?";
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