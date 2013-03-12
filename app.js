
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var MongoStore = require('connect-mongo')(express);
var partials = require('express-partials');
var flash = require('connect-flash');
var settings = require('./settings');
var express_cookie = require('express/node_modules/cookie');
var parseCookie = require('express/node_modules/connect/lib/utils').parseSignedCookie;

var sessionStore = new MongoStore({
  db : settings.db,
  reapInterval: 60000 * 10
}, function() {
    console.log('connect mongodb success...');
});

var routes = require('./routes');
var account = require('./routes/account');
var admin = require('./routes/admin');
var read = require('./routes/read');

var app = express();
app.configure(function(){
  app.set('port', 3000);
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
//account
app.get('/', routes.index);
app.get('/login', account.login);
app.post('/login', account.doLogin);
app.get('/logout', account.logout);
app.get('/reg', account.reg);
app.post('/reg', account.doReg);
//setting
app.get('/setting', account.setting);
app.post('/changePwd', account.changePwd);
app.post('/changeAvatar', account.changeAvatar);
app.get('/forgetPwd', account.forgetPwd);
app.post('/forgetPwd', account.pwdMail);
//admin 
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
app.get('/create', admin.createBook);
app.post('/create',admin.uploadBook);

//pages:salons
app.get('/cata/:cata',routes.cata);
app.get('/book/search',routes.searchBook);
app.get('/book/:bookid',routes.single);
app.get('/user/:userid',routes.user);
app.post('/user/delRead',routes.userDelRead);

app.get('/book/:bookid/salon',routes.getSalons);
app.get('/book/:bookid/salon/:salonid',routes.getOneSalon);
app.get('/book/:bookid/newSalon',routes.addSalonPage);
app.post('/addSalon',routes.addSalon);
app.post('/editSalon',routes.editSalon);
app.get('/book/:bookid/salon/:salonid/edit',routes.salonEdit);
app.post('/book/:bookid/salon/:salonid/del',routes.salonDel);
app.post('/book/:bookid/salon/:salonid/delCmt',routes.delCmt);

//message
app.get('/msg',routes.getMsg);
app.post('/readMsg',routes.readMsg);

//editor
app.get('/editor/:bookid',read.loadBook);
app.post('/editor/:bookid',read.saveEdited);

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

//socketio 
var socketio = require('socket.io').listen(server );
socketio.set('authorization', function(handshakeData, callback){
  // 通过客户端的cookie字符串来获取其session数据
  if (!handshakeData.headers.cookie) {
    return callback('socket.io: no found cookie.', false);
  }
  var signedCookies = express_cookie.parse(handshakeData.headers.cookie);
  handshakeData.cookies = parseCookie(signedCookies['connect.sid'],settings['cookie_secret']);
  //把session值传到socketio里去
  sessionStore.get(handshakeData.cookies, function(err,session){
    if(err || !session) return callback('socket.io: no found session.', false);
    handshakeData.session = session;
    if(handshakeData.session.user){ 
      return callback(null, true);
    }else{
      return callback('socket.io: no found session.user', false);
    }
  })
});

//socketio connect
var usersWS = {};
//多个socket connect
socketio.sockets.on('connection', function (socket) {
  //一个用户一个socket连接,用usersWS记录下来
    var session = socket.handshake.session;
    var name = session.user.name;
    usersWS[name] = socket;

   //连接上socketio之后，获取未读信息条数
   routes.getUnread(socket);
   //在发评论之后，给在线的相关人员提醒
   app.post('/book/:bookid/salon/:salonid/pubCmt',function(req,res){
      routes.pubCmt(req,res,usersWS);
   });
   //在发like之后，给在线的相关人员提醒
   app.post('/book/:bookid/salon/:salonid/like',function(req,res){
      routes.salonLike(req,res,usersWS);
   });
});








