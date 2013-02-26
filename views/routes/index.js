/*
 * GET home page.
 */

var crypto = require('crypto');
var Book = require('../models/books.js');

exports.index = function(req, res){
	//check db from model then execute callback below
	Book.get(null, function(err, books) {
		if (err) {
			posts = [];
		}
		res.render('index', {
			title: '首页',
			books : books,
			//user : req.session.user,
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};

