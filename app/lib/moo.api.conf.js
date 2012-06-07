var OAuth= require('oauth').OAuth;

var liveOAuthKey = '2d10843248b8f0c94a8e41535413e2d904fd07699';
var liveOAuthSecret = '5bb897bee43d1c9127223cf35d4561a2';

var devOAuthKey = '1e750d389da67315f7f1fda41430820e04fd091a7';
var devOAuthSecret = 'd5c52a4f9fb0a16e23844a935dfa9d90';

var oAuthClient = new OAuth(
    null,
    null,
    devOAuthKey,
    devOAuthSecret,
    "1.0",
    "http://localhost:3000/",
    "HMAC-SHA1"
);

exports.conf = {
    baseUrl : 'http://uk.testing1.office.moo.com/api/service/',
    oa: oAuthClient
}