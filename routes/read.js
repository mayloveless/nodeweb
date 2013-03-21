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
var iconv = require('iconv-lite');

exports.loadBook = function(req, res){
	
	//check db from model then execute callback below
	if(!req.session.user || !req.session.user.admin){
		return res.redirect('/');
	}
	var isGBK = Number(req.query.isGBK);
	Books.getSingle(req.params.bookid, function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/admin');
		}

		fs.readFile('./bookFiles/'+book[0].bookName+'.'+book[0].bookType, function(err, file) {    
            if(isGBK ===1){
            	var file = iconv.decode(file, 'GBK'); 
            }
            res.render('editor', {
				title: '图书编辑',
				book:book[0],
				file:file,
				user : req.session.user,
				curPage :"",
				success : req.flash('success').toString(),
				error : req.flash('error').toString()
			}); 
          });    
	});
};

exports.saveEdited = function(req, res){
	Books.saveEdited(req.body,function(err,bookid){
		if(err){
			return res.redirect('/');
		}
		return res.redirect('/editor/'+bookid);

	});
};

exports.core = function(req, res){
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
			res.render('read', {
				title: book[0].bookName,
				book : book[0],
				user : req.session.user,
				curPage :"",
				success : req.flash('success').toString(),
				error : req.flash('error').toString()
			});	
		}
		
	});
};
