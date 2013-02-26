/*
 * GET home page.
 */

var crypto = require('crypto');
//var Book = require('../models/books.js');

exports.login = function(req, res){
	//login
	res.render('login', {
		title: '登陆',
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
	});
};

