var express = require('express'),
    router = express.Router(),
    mysql = require('mysql'),
    conn = require('../connection/connection.js')(mysql);

router.get('/add', function(req, res) {
    res.render('add')
})
module.exports = router;