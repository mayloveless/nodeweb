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

exports.loadBook = function(req, res){
	
	//check db from model then execute callback below
	if(!req.session.user || !req.session.user.admin){
		return res.redirect('/');
	}
	Books.getSingle(req.query.bookid, function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/admin');
		}
		fs.readFile('./bookFiles/'+book[0].bookName+'.'+book[0].bookType, "binary", function(err, file) {    
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
