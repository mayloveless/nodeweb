/*
 * GET home page.
 */

var crypto = require('crypto');
var Books = require('../models/books.js');
var User = require('../models/user.js');
var Msg = require('../models/tips.js');

exports.index = function(req, res){
	//check db from model then execute callback below

	Books.get(null, function(err, books,cata) {
		if (err) {
			canShow = [];
		}
		var canShow=[];
		for(var i=0;i<books.length;i++){
			if(books[i].status == 1){
				canShow.push(books[i]);
			}
		}
		res.render('index', {
			title: '首页',
			books : canShow,
			cata :cata,
			user : req.session.user,
			curPage :"index",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};

exports.cata = function(req, res){
	//check db from model then execute callback below
	var cname = req.params.cata;
	//console.log(cname);
	if(cname === 'all'){
		cname = null
	}
	Books.getCata(cname,function(err, books,cata) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}
		
		res.render('bookCata', {
			title: '首页',
			books : books,
			cata :cata,
			user : req.session.user,
			curPage :"index",
			curCata : req.params.cata,
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};

exports.searchBook = function(req, res){
	//check db from model then execute callback below
	Books.getContent(req.query.key,function(err, books,cata) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}
		
		res.render('bookSearch', {
			title: '搜索',
			books : books,
			user : req.session.user,
			curPage :"index",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};

exports.single = function(req, res){
	//check db from model then execute callback below
	Books.getSingle(req.params.bookid,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}

		if(!book[0]){
			res.render('404', {  
		        title: '404',
		        user : req.session.user,
		        curPage :"index",
		        success : req.flash('success').toString(),
		        error : req.flash('error').toString()
		    });
		}else{
			res.render('single', {
				title: book[0].bookName,
				book : book[0],
				user : req.session.user,
				curPage :"index",
				success : req.flash('success').toString(),
				error : req.flash('error').toString()
			});	
		}
		
	});
};

exports.user = function(req, res){
	//check db from model then execute callback below
	User.getSingle(req.params.userid,function(err, user) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}

		if(!user){
			res.render('404', {  
		        title: '404',
		        user : req.session.user,
		        curPage :"index",
		        success : req.flash('success').toString(),
		        error : req.flash('error').toString()
		    });
		}else{
			if(req.session.user.id ===user._id.toString() ){
				var isMine = true;
			}else{
				var isMine = false;
			}

			Books.getUser(user.name,function(err, list) {
				if (err) {
					req.flash('error', err);
					return res.redirect('/');
				}

				res.render('user', {
					title: user.name,
					curUser : user,
					user : req.session.user,
					makeList : list['makeList'],
					readList : list['readList'],
					isMine : isMine,
					curPage :"index",
					success : req.flash('success').toString(),
					error : req.flash('error').toString()
				});	
			});
			
		}
		
	});
};

exports.userDelRead = function(req, res){
	//check db from model then execute callback below

	Books.delRead(req.body.bid,req.session.user.name,function(err, user) {
		if (err) {
			req.flash('error', err);
			return res.json({'success':0});
		}
		return res.json({'success':1});
		
	});
};

exports.getSalons = function(req, res){
	//check db from model then execute callback below

	Books.getSalons(req.params.bookid,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/book'+req.params.bookid);
		}

		var temp;
		for(var i=0;i<book.salons.length-1;i++){
			for(var j=1;j<book.salons.length;j++){
				if(book.salons[j].like.num > book.salons[i].like.num){
					temp = book.salons[j];
					book.salons[j] = book.salons[i];
					book.salons[i] =temp;
				}
			}
			book.salons[i].time_format = (new Date(book.salons[i].time)).toString().substring(10,25);
		}
		res.render('salons', {
			title: '读者沙龙:'+book.bookName,
			user : req.session.user,
			book:book,
			salons : book.salons,
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});	
	});
};

exports.getOneSalon = function(req, res){
	//check db from model then execute callback below

	Books.getOneSalon(req.params.bookid,req.params.salonid,function(err, book,salon) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/book'+req.params.bookid);
		}
		if(req.session.user.name ===salon.user.name.toString() ){
			var isMine = true;
		}else{
			var isMine = false;
		}

		var canLike = 1;
		for(var i=0;i<salon.like.users.length;i++){
			if(salon.like.users[i] == req.session.user.name){
				canLike = 0;
				break;
			} 
		}
		salon.time_format = (new Date(salon.time)).toString().substring(10,25);
		//console.log(canLike);
		res.render('oneSalon', {
			title: '读者沙龙:'+book.bookName,
			user : req.session.user,
			book:book,
			isMine: isMine,
			canLike: canLike,
			salon : salon,
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});	
	});
};

exports.addSalonPage = function(req, res){
	//check db from model then execute callback below

	Books.getSingle(req.params.bookid,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/book'+req.params.bookid);
		}
		res.render('addSalon', {
			title: '读者沙龙:'+book[0].bookName,
			user : req.session.user,
			book:book[0],
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});	
	});
};

exports.addSalon = function(req, res){
	//check db from model then execute callback below

	if (req.body['salonTitle'] === '' || req.body['salonContent'] === ''){
		req.flash('error', '请检查输入');
		return res.redirect('/book/'+req.body.bookid+'/newSalon');
	}
	req.body['user'] ={
		name :req.session.user.name,
		avatar :req.session.user.avatar
	} ;
	Books.addSalon(req.body,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/book/'+req.body.bookid);
		}
		return res.redirect('/book/'+req.body.bookid+'/salon');	
	});
};

exports.salonEdit = function(req, res){
	//check db from model then execute callback below

	Books.getOneSalon(req.params.bookid,req.params.salonid,function(err, book,salon) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/book'+req.params.bookid);
		}
		if(req.session.user.name !==salon.user.name.toString() ){
			return res.redirect('/book'+req.params.bookid);
		}

		res.render('oneSalonEdit', {
			title: '读者沙龙:'+book.bookName,
			user : req.session.user,
			book:book,
			salon : salon,
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});	
	});
	
};

exports.editSalon = function(req, res){
	//check db from model then execute callback below

	if (req.body['salonTitle'] === '' || req.body['salonContent'] === ''){
		req.flash('error', '请检查输入');
		return res.redirect('/book/'+req.body.bookid+'/newSalon');
	}
	req.body['user'] ={
		name :req.session.user.name,
		avatar :req.session.user.avatar
	} ;
	req.body['newtime'] = new Date().valueOf();
	Books.editSalon(req.body,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/book/'+req.body.bookid);
		}
		return res.redirect('/book/'+req.body.bookid+'/salon/salon_'+req.body['newtime']);	
	});
};

exports.salonDel = function(req, res){
	//check db from model then execute callback below
	Books.delSalon(req.body,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.json({'success':0});
		}
		return res.json({'success':1});
	});
};


exports.salonLike = function(req, res,socket){
	//check db from model then execute callback below

	Books.likeSalon(req.body,req.session.user.name,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.json({'success':0});
		}
		//return res.json({'success':1});
		//发表评论之后发布一条消息
		Msg.addLike(req.body,socket,function() {
			return res.json({'success':1});
		});	
	});
};

exports.pubCmt = function(req, res,socket){
	//check db from model then execute callback below
	if (req.body['content'] === ''){
		req.flash('error', '请检查输入');
		return res.redirect('/book/'+req.body.bookid+'/salon/salon_'+req.body['time']);	
	}
	req.body['user'] ={
		name :req.session.user.name,
		avatar :req.session.user.avatar
	} ;
	Books.pubCmt(req.body,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/book/'+req.body.bookid);
		}
		//发表评论之后发布一条消息
		Msg.addSalon(book,socket,function() {
			return res.redirect('/book/'+req.body.bookid+'/salon/salon_'+req.body['time']);	
		});	
	});
};

exports.delCmt = function(req, res){
	//check db from model then execute callback below
	
	Books.delCmt(req.body,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.json({'success':0});
		}
		return res.json({'success':1});
	});
};

exports.getMsg = function(req, res){
	//check db from model then execute callback below
	Msg.getAll(req.session.user.name,function(err, msg) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}

		res.render('msg', {
			title: '提醒',
			user : req.session.user,
			msg:msg,
			curPage :"msg",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});	
	});
};

exports.readMsg = function(req, res){
	//check db from model then execute callback below
	Msg.read(req.body.mid,function(err, msg) {
		if (err) {
			req.flash('error', err);
			return res.json({'success':0});
		}
		return res.json({'success':1});
	});
};

exports.getUnread = function(socket){
	//check db from model then execute callback below
	Msg.unRead(socket);
};
