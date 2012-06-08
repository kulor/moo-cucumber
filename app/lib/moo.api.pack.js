var appConfig = require('./moo.api.conf.js').conf;

exports.create = function(conf, callback){
    conf = conf || {};
    conf.method = 'moo.pack.createPack';
    conf.product = 'businesscard';
    var packObj = {
        numCards: 50,
        productCode: 'businesscard' ,
        sides: [
            {
                "templateCode" : "businesscard_full_image_landscape",
                "type" : "image",
                "sideNum" : 1,
                "data" : [
                    {
                        "linkId" : "variable_image_front",
                        "imageStoreFileId" : "7a20d4a4-1518-4ca3-8171-7cb3b4171100",
                        "type" : "imageData",
                        "resourceUri" : "filestore://image_original/7a20d4a4-1518-4ca3-8171-7cb3b4171100.png",
                        "enhance" : false,
                        "imageBox" : {
                            "height" : 66,
                            "angle" : 0,
                            "width" : 88,
                            "center" : {
                                "x" : 44,
                                "y" : 29.5
                            }
                        }
                    }
                ]
            },

            {
                "templateCode" : "businesscard_full_image_landscape",
                "type" : "image",
                "sideNum" : 2,
                "data" : [
                    {
                        "linkId" : "variable_image_front",
                        "imageStoreFileId" : "7a20d4a4-1518-4ca3-8171-7cb3b4171100",
                        "type" : "imageData",
                        "resourceUri" : "filestore://image_original/7a20d4a4-1518-4ca3-8171-7cb3b4171100.png",
                        "enhance" : false,
                        "imageBox" : {
                            "height" : 66,
                            "angle" : 0,
                            "width" : 88,
                            "center" : {
                                "x" : 44,
                                "y" : 29.5
                            }
                        }
                    }
                ]
            }
        ]
    };
    conf.pack = JSON.stringify(packObj);

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