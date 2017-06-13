module.exports = function(mysql) {
    var Connection = mysql.createConnection({ // createConnection
        host: "localhost",
        // host: '127.0.0.1',
        // port: "8888",
        user: "root",
        password: "123",
        database: "city"
    })
    Connection.connect();
    return Connection;
}