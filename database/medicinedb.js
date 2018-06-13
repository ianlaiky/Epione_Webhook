var dbcontroller = require('./database-config');



module.exports =
{   //function name:function(){...}
    getMedicine: function() {
        
        dbcontroller.query('SELECT * from medicine', function(err, rows, fields) {
            if (!err){
                //convert to JSON format
                var r = JSON.stringify(rows);
                var result = JSON.parse(r);
                console.log(result);
              //console.log('The solution is: ', result[0].name);
            }
            else
              console.log('Error while performing Query.');
          });
          
          dbcontroller.end();
    }
}