var mooPackApi = require('../lib/moo.api.pack.js');

var titleMap = {
    businesscard : "Making Business Cards"
};

exports.index = function(req, res){
    res.render('index', {
        title: 'Add a card',
        task: titleMap[req.session.task] || 'Starting Out'
    });
};

exports.createCardForm = function(req, res){
    res.render('create_card', { title: 'Create a card' });
};

exports.createPackForm = function(req, res){
    res.render('create_pack', { title: 'Create a pack' });
};

exports.createPack = function(req, res){
    mooPackApi.create(req.body, function(err, data){
        if(err){
            return res.send(err, 500);
        }
        req.session.pack = data.packId;
        req.session.task = data.pack.productCode;
        res.redirect('/pack/' + data.packId);
    })
};

exports.getPack = function(req, res){
    packId = req.params.packId;
    mooPackApi.get(packId, function(err, data){
        if(err){
            return res.send(err, 500);
        }
        res.render('pack', {
            title: "Pack Details",
            pack: data
        });
    })
};