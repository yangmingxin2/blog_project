var express = require('express'),
    router = express.Router(),
    mysql = require('mysql'),
    conn = require('../connection/connection.js')(mysql);

router.get('/detil', function(req, res) {
    console.log(req.query.id)
    conn.query('select * from txtInfo', function(err, result) {
        var daa;
        for (var i = 0; i < result.length; i++) {
            if (result[i].id == req.query.id) {
                daa = result[i];
                break;
            }
        }
        // console.log(daa)
        res.render('detil', { daa: daa })
    })
})

module.exports = router;