var express = require('express'),
    router = express.Router(),
    mysql = require('mysql'),
    conn = require('../connection/connection.js')(mysql);

router.get('/de', function(req, res) {
    res.render('detil')
})
module.exports = router;