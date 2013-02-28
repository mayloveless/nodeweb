
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var MongoStore = require('connect-mongo')(express);
var partials = require('express-partials');
var flash = require('connect-flash');
var settings = require('./settings');
var sessionStore = new MongoStore({
  db : settings.db
}, function() {
    console.log('connect mongodb success...');
});

var routes = require('./routes');
var account = require('./routes/account');
var admin = require('./routes/admin');

var app = express();
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  app.use(partials());
  app.use(flash());

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser({uploadDir:'./tmp/'}));
  app.use(express.methodOverride());

  app.use(express.cookieParser());
  
  app.use(express.session({
    secret : settings.cookie_secret,
    cookie : {
      maxAge : 60000 * 200  //20 minutes
    },
    store : sessionStore
  }));

  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//route
app.get('/', routes.index);
app.get('/login', account.login);
app.post('/login', account.doLogin);
app.get('/logout', account.logout);
app.get('/reg', account.reg);
app.post('/reg', account.doReg);

app.get('/setting', account.setting);
app.post('/changePwd', account.changePwd);
app.post('/changeAvatar', account.changeAvatar);
app.get('/forgetPwd', account.forgetPwd);
app.post('/forgetPwd', account.pwdMail);

app.get('/admin', admin.index);
app.post('/admin/editUser', admin.editUser);
app.post('/admin/delUser', admin.delUser);
app.get('/admin/book', admin.book);
app.get('/admin/salon', admin.salon);
app.post('/admin/delSalon', admin.delSalon);
app.get('/admin/note', admin.note);
app.post('/admin/delNote', admin.delNote);
app.get('/admin/comment', admin.comment);
app.get('/admin/tip', admin.tip);
app.post('/admin/editBook', admin.editBook);
app.post('/admin/delBook', admin.delBook);

app.get('/admin/search', admin.searchUser);
app.get('/admin/comment/salon', admin.cataSalon);
app.get('/admin/comment/note', admin.cataNote);
app.get('/admin/note/search', admin.searchNote);
app.get('/admin/salon/search', admin.searchSalon);
app.get('/admin/book/cata/:cata', admin.cataBook);
app.get('/admin/book/status/:status', admin.statusBook);
app.get('/admin/book/search', admin.searchBook);

app.get('/create', admin.createBookPage);
//app.post('/create', admin.createBook);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


/**
* node-mongodb-native   https://github.com/christkv/node-mongodb-native
* 
* ejs https://github.com/visionmedia/ejs
* 
* express-Migrating from 2.x to 3.x   https://github.com/visionmedia/express/wiki/Migrating-from-2.x-to-3.x
* 
* Express 3.x + Socket.IO   http://blog.lyhdev.com/2012/07/nodejs-express-3x-socketio.html
* 
* express-partials    https://github.com/publicclass/express-partials
* 
* connect-flash   https://github.com/jaredhanson/connect-flash
*
* connect-mongodb   https://github.com/masylum/connect-mongodb
*
* 
*/
