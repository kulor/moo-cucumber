var appConfig = require('./moo.api.conf.js').conf;
var fs = require('fs');

exports.import = function(imageUrl, callback){
    conf = {};
    conf.method = 'moo.image.importImage';
    conf.imageUrl = imageUrl;

    console.log('Import image API call', appConfig.baseUrl, conf);

    appConfig.oa.post(
        appConfig.baseUrl,
        "",
        "",
        conf,
        function (error, data, response) {
            callback(error, JSON.parse(data));
        });
}

exports.upload = function(imageFile, callback){
    conf = {};
    conf.method = 'moo.image.uploadImage';
    conf.imageFile = imageFile;

    console.log('Upload image API call', appConfig.baseUrl, conf);

    appConfig.oa.post(
        appConfig.baseUrl,
        "",
        "",
        conf,
        'multipart/form-data',
        function (error, data, response) {
            callback(error, JSON.parse(data));
        });
}