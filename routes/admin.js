/*
 * GET home page.
 */

var crypto = require('crypto');
var fs = require('fs');
var User = require('../models/user.js');
var Books = require('../models/books.js');
var Salon = require('../models/salon.js');
var Note = require('../models/note.js');
var Comment = require('../models/comment.js');
var Tips = require('../models/tips.js');

exports.index = function(req, res){
	//check db from model then execute callback below
	if(!req.session.user || !req.session.user.admin){
		return res.redirect('/');
	}
	User.getAll(null, function(err, users) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/admin');
		}
		res.render('admin', {
			title: '管理中心',
			users : users,
			user : req.session.user,
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};

exports.delUser = function(req, res){
	User.delete(req.body.name, function(err, doc) {
		if (err) {
			return  res.json({'success':0});
		}
		return  res.json({'success':1});
	});
};

exports.editUser = function(req, res){
	var user = {
		name : req.body.oldName,
		password : req.body.password,
		newName :req.body.username,
		ifAdmin : req.body.ifAdmin
	}
	//上传头像
	if (req.files.avatar.name){
		var avatar = req.files.avatar.name.split('.');
		var avatarType = avatar[avatar.length-1].toLowerCase();
		console.log(avatarType);
		if(avatarType !=='png' && avatarType !=='jpg' && avatarType !=='jpge' ){
			req.flash('error', '请上传png或jpg格式图片');
			return res.redirect('/reg');
		}

	  	var tmp_path = req.files.avatar.path;
	    // 指定文件上传后的目录 
	    var target_path = './public/images/avatar/' + user.name + '.' +avatarType;
	    // 移动文件
	    fs.rename(tmp_path, target_path, function(err) {
	        if (err) throw err;
	      // 删除临时文件夹文件, 
	        fs.unlink(tmp_path, function() {
	           if (err) throw err;
	        });
	    });
	    user['avatar'] = user.newName + '.' +avatarType;
	}
	User.update(user, function(err, doc) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}
		//req.session.user = doc;
   		return res.redirect('/admin');
	});
};

exports.salon = function(req, res){
	if(!req.session.user || !req.session.user.admin){
		return res.redirect('/');
	}
	//check db from model then execute callback below
	Salon.getAll(function(err, salons) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/admin');
		}
	
		res.render('salon', {
			title: '管理中心',
			salon : salons,
			user : req.session.user,
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};


exports.delSalon = function(req, res){
	Salon.delete(req.body.sid, function(err, doc) {
		if (err) {
			return  res.json({'success':0});
		}
		return  res.json({'success':1});
	});
};

exports.note = function(req, res){
	if(!req.session.user || !req.session.user.admin){
		return res.redirect('/');
	}
	//check db from model then execute callback below
	Note.getAll(function(err, notes) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/admin');
		}
	
		res.render('note', {
			title: '管理中心',
			notes : notes,
			user : req.session.user,
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};

exports.delNote= function(req, res){
	Note.delete(req.body.nid, function(err, doc) {
		if (err) {
			return  res.json({'success':0});
		}
		return  res.json({'success':1});
	});
};

exports.comment = function(req, res){
	if(!req.session.user || !req.session.user.admin){
		return res.redirect('/');
	}
	//check db from model then execute callback below
	Comment.getAll(function(err, comments) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/admin');
		}
		
		res.render('comment', {
			title: '管理中心',
			comments : comments,
			user : req.session.user,
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};

/*exports.delComment= function(req, res){
	if(req.body.type == 'salon'){
		Salon.delComment(req.body.cid, function(err, doc) {
			if (err) {
				return  res.json({'success':0});
			}
			return  res.json({'success':1});
		});
	}else{
		Note.delComment(req.body.cid, function(err, doc) {
			if (err) {
				return  res.json({'success':0});
			}
			return  res.json({'success':1});
		});
	}
};*/

exports.tip = function(req, res){
	if(!req.session.user || !req.session.user.admin){
		return res.redirect('/');
	}
	//check db from model then execute callback below
	Tips.getAll(function(err, tips) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/admin');
		}
		
		res.render('tips', {
			title: '管理中心',
			tips : tips,
			user : req.session.user,
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};


exports.book = function(req, res){
	if(!req.session.user || !req.session.user.admin){
		return res.redirect('/');
	}
	//check db from model then execute callback below
	Books.get({},function(err, books) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/admin');
		}
		
		res.render('books', {
			title: '管理中心',
			books : books,
			user : req.session.user,
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};

exports.editBook = function(req, res){
	var book = {
		content : req.body.content,
		bookName : req.body.bookName,
		cata :req.body.cata,
		status : req.body.status,
		bookId : req.body.bookId
	}
	Books.update(book, function(err, doc) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}
   		return res.redirect('/admin/book');
	});
};

exports.delBook = function(req, res){
	Books.delete(req.body.id, function(err, doc) {
		if (err) {
			return  res.json({'success':0});
		}
		return  res.json({'success':1});
	});
};