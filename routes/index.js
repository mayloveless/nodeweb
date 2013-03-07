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

		var temp;
		for(var i=0;i<book.salons.length-1;i++){
			for(var j=1;j<book.salons.length;j++){
				if(book.salons[j].like > book.salons[i].like){
					temp = book.salons[j];
					book.salons[j] = book.salons[i];
					book.salons[i] =temp;
				}
			}
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

		res.render('oneSalon', {
			title: '读者沙龙:'+book.bookName,
			user : req.session.user,
			book:book,
			isMine: isMine,
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


exports.salonLike = function(req, res){
	//check db from model then execute callback below

	Books.likeSalon(req.body,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.json({'success':0});
		}
		return res.json({'success':1});
	});
};

exports.pubCmt = function(req, res){
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
		return res.redirect('/book/'+req.body.bookid+'/salon/salon_'+req.body['time']);	
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