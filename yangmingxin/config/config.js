var index = require('../router/index.js');
var add = require('../router/add.js');
var addCon = require('../router/addCon.js');
var detil = require('../router/detil.js');
var de = require('../router/de.js');
module.exports = function(app) {
    app.get('/index', index);
    app.get('/add', add);
    app.post('/addCon', addCon);
    app.get('/detil', detil);
    app.get('/de', de);
}