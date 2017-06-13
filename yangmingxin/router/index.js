var express = require('express'),
    router = express.Router(),
    mysql = require('mysql'),
    conn = require('../connection/connection.js')(mysql);

router.get('/index', function(req, res) {
    conn.query('select * from txtInfo', function(err, result) {
        // console.log(result)
        res.render('index', {
            num: result
        })
    })
});
module.exports = router;