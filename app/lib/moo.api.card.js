var appConfig = require('./moo.api.conf.js').conf;

exports.create = function(packId, conf, callback){
    conf = conf || {};
    conf.method = 'moo.image.uploadImage';
    conf.packId = packId;

    console.log('Create card API call', appConfig.baseUrl, conf);

    appConfig.oa.post(
        appConfig.baseUrl,
        "",
        "",
        conf,
        function (error, data, response) {
            callback(error, JSON.parse(data));
        });
}