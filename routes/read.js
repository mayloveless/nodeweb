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
var Msg = require('../models/tips.js');
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
			Books.addReadList(req.params.bookid,req.session.user.name,function(err) {
				var noteList = book[0].note;
				var pic=[];
				var picNum =[];
				for(var key in noteList){
					for(var i=0;i<noteList[key].length;i++){
						if(noteList[key][i].user.name == req.session.user.name){
							pic.push(noteList[key][i].pic+"&&&");
							picNum.push(key);
						}
					}
				}
			
				res.render('read', {
					title: book[0].bookName,
					book : book[0],
					user : req.session.user,
					images : pic,
					imgNum : picNum,
					curPage :"",
					success : req.flash('success').toString(),
					error : req.flash('error').toString()
				});	

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
	Note.getNoteNum(socket,data);
};

//获取笔记
exports.getNotes = function(req,res){
	//check db from model then execute callback below
	Note.getNotes(req.body, function(err, notes) {
		if (err) {
			req.flash('error', err);
			return res.json({'fail':1});
		}
		return res.json({'success':{'data':notes}});
	});
};

//增加笔记
exports.addNote = function(req,res,socket){
	//check db from model then execute callback below
	req.body.user = req.session.user;
	Note.addNote(req.body, function(err, one) {
		if (err) {
			req.flash('error', err);
			return res.json({'fail':1});
		}
		//发表笔记之后发布一条消息
		one['bid'] = req.body.id;
		one['pid'] = req.body.pid;
		for(user in socket){
			socket[ user ].emit('addNoteNum', { note: one});
		}
		return res.json({'success':{'data':one}});
	});
};

//删除笔记
exports.delNote = function(req,res){
	//check db from model then execute callback below
	req.body.user = req.session.user;
	Note.delNote(req.body, function(err, one) {
		if (err) {
			req.flash('error', err);
			return res.json({'fail':1});
		}
		return res.json({'success':1});
	});
};

//修改笔记
exports.editNote = function(req,res){
	//check db from model then execute callback below
	req.body.user = req.session.user;
	Note.editNote(req.body, function(err, newTime) {
		if (err) {
			req.flash('error', err);
			return res.json({'fail':1});
		}
		return res.json({'success':newTime});
	});
};

//上传涂鸦
exports.saveNoteImg = function(req,res){
	//check db from model then execute callback below
	req.body.user = req.session.user;
	Note.saveNoteImg(req.body, function(err, newTime) {
		if (err) {
			req.flash('error', err);
			return res.json({'fail':1});
		}
		return res.json({'success':1});
	});
};

//获取笔记
exports.getOneNote = function(req,res){
	//check db from model then execute callback below
	Note.getOneNote(req.params, function(err, note,key,book) {
		if (err || note=={}) {
			req.flash('error', err);
			return res.redirect('/book'+req.params.bookid);
		}
		res.render('oneNote', {
			title: '读者笔记:'+book.bookName,
			user : req.session.user,
			book:book,
			note : note,
			pid:key,
			curPage :"",
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});	
	});
};


//增加笔记评论
exports.pubCmt = function(req,res,socket){
	//check db from model then execute callback below
	if (req.body['content'] === ''){
		req.flash('error', '请检查输入');
		return res.redirect('/book/'+req.body.bookid+'/note/'+req.body['time']);	
	}
	req.body['user'] ={
		name :req.session.user.name,
		avatar :req.session.user.avatar
	} ;
	Note.pubCmt(req.body,function(err, noteCmt) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/book/'+req.body.bookid);
		}
		//发表评论之后发布一条消息
		Msg.addNoteCmt(noteCmt,socket,function() {
			return res.redirect('/book/'+req.body.bookid+'/note/'+req.body['time']);	
		});	
	});
};

exports.delCmt = function(req, res){
	//check db from model then execute callback below
	Note.delCmt(req.body,function(err, book) {
		if (err) {
			req.flash('error', err);
			return res.json({'success':0});
		}
		return res.json({'success':1});
	});
};

exports.sendIm = function(req, res,socket){
	//check db from model then execute callback below
	req.body['user'] ={
		name :req.session.user.name,
		avatar :req.session.user.avatar
	} ;
	var msg = {
		content:req.body.content,
		time : new Date().valueOf(),
		user : req.body.user
	}
	for( user in socket){
		socket[ user ].emit('im'+req.body.bid, { msg: msg});
	}
};