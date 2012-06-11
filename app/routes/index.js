var mooPackApi = require('../lib/moo.api.pack.js');
var mooImageApi = require('../lib/moo.api.image.js');

var clone = require('clone');

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
    res.render('create_card', {
        title: 'Create a card',
        images: req.session.images || []
    });
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
    var frontImageResource = req.session.images[req.body.frontImage];
    var backImageResource = clone(req.session.images[req.body.backImage]);
    backImageResource.imageBasketItem.type = 'back';

    var businessCardImageBox = {
        "height" : 59,
        "angle" : 0,
        "width" : 88,
        "center" : {
            "x" : 44,
            "y" : 29.5
        }
    };

    var frontImageData = [
        {
            "linkId" : "variable_image_front",
            "type" : "imageData",
            "resourceUri" : frontImageResource.imageBasketItem.resourceUri,
            "imageBox" : businessCardImageBox
        }
    ];

    var backImageData = [
        {
            "linkId" : "variable_image_front",
            "type" : "imageData",
            "resourceUri" : backImageResource.imageBasketItem.resourceUri,
            "imageBox" : businessCardImageBox
        }
    ];

    var packObj = {
        productVersion: 1,
        numCards: 50,
        productCode: 'businesscard' ,
        sides: [
            {
                "templateCode" : "businesscard_full_image_landscape",
                "type" : "image",
                "sideNum" : 1,
                "data" : frontImageData
            },
            {
                "templateCode" : "businesscard_full_image_landscape",
                "type" : "details",
                "sideNum" : 2,
                "data" : backImageData
            }
        ],
        imageBasket : {
            items : [req.session.images[0].imageBasketItem]
        }
    };

    console.log('frontImageResource', frontImageResource);
    console.log('backImageResource', backImageResource);
    console.log('packObj', packObj);

    mooPackApi.update(req.session.pack, packObj, function(err, data){
        if(err){
            return res.send(err, 500);
        }
        console.error('err', err);
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
        req.session.images = req.session.images || [];
        req.session.images.push(data);
        res.redirect('/image/imported');
    })
};

exports.imported = function(req, res){
    var imageUrl = req.body.imageUrl;
    res.render('image/imported', {
        title: "Imported Images",
        images: req.session.images
    })
};