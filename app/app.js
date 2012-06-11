
/**
 * Module dependencies.
 */

var express = require('express');
var generalRoutes = require('./routes/index');
var adminRoutes = require('./routes/admin');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser({ uploadDir: '/tmp/' }));
  app.use(express.cookieParser());
  app.use(express.session({ secret: "Mooving target" }));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

function checkHasPack(req, res, next){
    if(!req.session.pack){
        return res.redirect('/pack/create');
    }
    next();
}

app.get('/admin', adminRoutes.index);

app.get('/image/imported', generalRoutes.imported);
app.get('/image/import', generalRoutes.importImageForm);
app.post('/image/import', generalRoutes.importImage);

app.get('/image/upload', generalRoutes.uploadImageForm);
app.post('/image/upload', generalRoutes.uploadImage);

app.get('/', generalRoutes.index);

app.get('/pack/create', generalRoutes.createPackForm);
app.get('/pack/:packId', generalRoutes.getPack);
app.post('/pack/create', generalRoutes.createPack);

app.get('/card/create', checkHasPack, generalRoutes.createCardForm);
app.post('/card/create', checkHasPack, generalRoutes.createCard);

app.listen(3000, function(){
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
