var mooPackApi = require('../lib/moo.api.pack.js');
var mooCardApi = require('../lib/moo.api.card.js');
var mooImageApi = require('../lib/moo.api.image.js');

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

exports.createCard = function(req, res){
    mooCardApi.create(req.session.pack, req.body, function(err, data){
        if(err){
            return res.send(err, 500);
        }
        console.log('data', data);
        res.redirect('/pack/' + req.session.pack);
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

exports.importImageForm = function(req, res){
    res.render('image/import', {
        title: "Image Importer"
    })
};

exports.uploadImageForm = function(req, res){
    res.render('image/upload', {
        title: "Image Uploader"
    });
};

exports.uploadImage = function(req, res){
    var imageFile = req.body.imageFile;

    mooImageApi.upload(imageFile, function(err, data){
        if(err){
            return res.send(err, 500);
        }
        res.send(data);
    })
};


exports.importImage = function(req, res){
    var imageUrl = req.body.imageUrl;
    mooImageApi.import(imageUrl, function(err, data){
        if(err){
            return res.send(err, 500);
        }
        console.log('data', data);
        res.send(data);
    })
};