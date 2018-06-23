var dbcontroller = require("./database-config");

module.exports = {
  //function name:function(){...}
  /**
   * Get patient through patient id
   * @param patientid
   */
  getPatientThruID: function(patientid, callback) {
    console.log(patientid);
    var query = "SELECT * from patient where patientid = ?";
    dbcontroller.query(query, [patientid], function(err, rows) {
      if (!err) {
        //convert to JSON format
        var r = JSON.stringify(rows);
        var result = JSON.parse(r);
        console.log(result);
        callback(null, result);
        // return result;
      } else console.log("Patient ID not found");
    });
  },
  getAllPatient: function(callback) {
    var query = "SELECT * from patient";
    dbcontroller.query(query, function(err, rows) {
      if (!err) {
        //convert to JSON format
        var r = JSON.stringify(rows);
        var result = JSON.parse(r);
        console.log(result);
        callback(null, result);
        // return result;
      } else console.log("Patient ID not found");
    });
  }
};
