const mysql = require('mysql')

module.exports.conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "Dobro",
    password: ""
});


