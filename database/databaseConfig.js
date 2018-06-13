var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'lai-family.dyndns.org',
  user     : 'username',
  password : 'password',
  database : 'xiaobai'
});

module.exports = connection;