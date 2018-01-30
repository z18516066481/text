let mysql = require('mysql');
/*****配置mysql*****/

module.exports= function dbConfig () {
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'zxj',
        port: '3306'
    });
};