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

		fs.readFile('./bookFiles/'+book[0].bookName+'.txt', function(err, file) {    
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

exports.imageUp = function(req, res){
	var random = new Date().valueOf();
	var image = req.files.upfile.name.split('.');
	var imageName = image[0]+random+'.'+image[1];
	var tmp_path = req.files.upfile.path;
    // 指定文件上传后的目录 
    var target_path = './public/images/figure/' + imageName;
    // 移动文件
    fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
      // 删除临时文件夹文件, 
        fs.unlink(tmp_path, function() {
           if (err) throw err;

            var imageJson = {
		    	'url':'./images/figure/'+imageName,
		    	'title':imageName,
		    	'state':'SUCCESS'
		    };
		    return res.json(imageJson);
        });
    });
    
};

//管理员可访问源文件
exports.original = function(req, res){
	if(!req.session.user || !req.session.user.admin){
		return res.redirect('/');
	}
	Books.getSingle(req.params.bookid, function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}
		var fullName = book[0].bookName+'.'+book[0].bookType;
    	return res.download('./bookFiles/'+fullName);
	});
};

//实时获取笔记数量
exports.getNoteNum = function(socket,data){
	//check db from model then execute callback below
	Books.getNoteNum(socket,data);
};

//获取笔记
exports.getNotes = function(req,res){
	//check db from model then execute callback below
	Books.getNotes(req.body, function(err, notes) {
		if (err) {
			req.flash('error', err);
			return res.json({'fail':1});
		}
		return res.json({'success':{'data':notes}});
	});
};