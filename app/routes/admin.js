var mooPackApi = require('../lib/moo.api.pack.js');
var mooCardApi = require('../lib/moo.api.card.js');

exports.index = function(req, res){
    res.render('admin/index', {
        title: 'Admin Panel',
    });
};
