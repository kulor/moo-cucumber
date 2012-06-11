var mooPackApi = require('../lib/moo.api.pack.js');

exports.index = function(req, res){
    res.render('admin/index', {
        title: 'Admin Panel',
    });
};
