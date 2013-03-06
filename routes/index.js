/*
 * GET home page.
 */

var crypto = require('crypto');
var Books = require('../models/books.js');
var User = require('../models/user.js');

exports.index = function(req, res){
	//check db from model then execute callback below
	Books.get(null, function(err, books,cata) {
		if (err) {
			posts = [];
		}

		res.render('index', {
			title: '首页',
			books : books,
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
	console.log(cname);
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
		res.render('oneSalon', {
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