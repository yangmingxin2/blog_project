var express = require('express'),
    router = express.Router(),
    mysql = require('mysql'),
    conn = require('../connection/connection.js')(mysql);

router.post('/addCon', function(req, res) {
    var sql = "insert into txtinfo(name,content,date) values(?,?,?)";
    conn.query(sql, [req.body.inVal, req.body.textVal, new Date()], function(err, result) {
        if (err) throw err;
        res.render("add");
    })
})

module.exports = router;