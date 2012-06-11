var appConfig = require('./moo.api.conf.js').conf;

exports.create = function(conf, callback){
    conf = conf || {};
    conf.method = 'moo.pack.createPack';
    conf.product = 'businesscard';

    console.log('Create pack API call', appConfig.baseUrl, conf);

    appConfig.oa.post(
        appConfig.baseUrl,
        "",
        "",
        conf,
        function (error, data, response) {
            callback(error, JSON.parse(data));
        });
}

exports.update = function(packId, packObj, callback){
    conf = {};
    conf.method = 'moo.pack.updatePack';
    conf.packId = packId;
    conf.pack = JSON.stringify(packObj);

    console.log('Update pack API call', appConfig.baseUrl, conf);

    appConfig.oa.post(
        appConfig.baseUrl,
        "",
        "",
        conf,
        function (error, data, response) {
            callback(error, JSON.parse(data));
        });
}

exports.get = function(id, callback){
    var url = appConfig.baseUrl + "?method=moo.pack.getPack&packId=" + id;

    console.log('Get pack API call', url);

    appConfig.oa.get(
        url,
        "",
        "",
        function (error, data, response) {
            callback(error, JSON.parse(data));
        });
}