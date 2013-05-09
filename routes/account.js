/*
 * GET home page.
 */

var crypto = require('crypto');
var fs = require('fs');
var mail = require('nodemailer');  
var User = require('../models/user.js');
var Canvas = require('canvas');

exports.login = function(req, res){
	//login
	res.render('login', {
		title: '登陆',
		user : req.session.user,
		curPage :"login",
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
	});
};

exports.doLogin = function(req, res){
	//提交表单
	//生成口令的散列值
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

	User.get(req.body.username, function(err, user) {
		if (!user) {
			req.flash('error', '用户不存在');
			return res.redirect('/login');
		}
		
		if (user.password != password) {
			req.flash('error', '密码错误');
			return res.redirect('/login');
		} 
		req.session.user = user;
   		res.redirect('/');
	});
};

exports.logout = function(req, res){
	req.session.user = null;
    req.flash('success', '登出成功');
    res.redirect('/');
};

var makeCap = function(callback){
	var canvas = new Canvas(100, 30),
        ctx = canvas.getContext('2d'),
        items = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPRSTUVWXYZ23456789'.split(''),
        vcode = '',
        textColors = ['#FD0', '#6c0', '#09F', '#f30', '#aaa', '#3cc', '#cc0', '#A020F0', '#FFA500', '#A52A2A', '#8B6914', '#FFC0CB', '#90EE90'];

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 100, 30);
    ctx.font = 'bold 30px sans-serif';
    ctx.globalAlpha = .8;
    for (var i = 0; i < 4; i++) {
        var rnd = Math.random();
        var item = Math.round(rnd * (items.length - 1));
        var color = Math.round(rnd * (textColors.length - 1));
        ctx.fillStyle = textColors[color];
        ctx.fillText(items[item], 5 + i*23, 25);
        vcode += items[item];
    }
    canvas.toBuffer(function(err, buf){
    	var obj = {'buf':buf,'text':vcode.toLowerCase()}
        callback(obj);
    });
};

exports.reg = function(req, res){
	makeCap(function(obj){
		req.session.verifycode = obj.text;
		res.render('reg', {
			title: '注册',
			user : req.session.user,
			curPage :"reg",
			verifycode : obj.buf.toString('base64'),
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
};

exports.doReg = function(req, res) {
	//检查密码
	if (req.body['verify'] === ''|| req.body['password-repeat'] === '' || req.body['password'] === ''|| req.body['username'] ==='' ){
		req.flash('error', '请检查输入');
		return res.redirect('/reg');
	}
    if (req.body['password-repeat'] != req.body['password']) {
		req.flash('error', '两次输入的密码不一致');
		return res.redirect('/reg');
    }
    if(req.body['verify']!= req.session.verifycode){
    	req.flash('error', '验证码不正确');
		return res.redirect('/reg');
    }

    //生成md5的密码
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
    
    var newUser = {
		name: req.body.username,
		password: password,
    };
    
    //检查用户名是否已经存在
	User.get(newUser.name, function(err, user) {
		if (user)
			err = '用户名已存在，请更换';
		if (err) {
			req.flash('error', err);
			return res.redirect('/reg');
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
		    var target_path = './public/images/avatar/' + newUser.name + '.' +avatarType;
		    // 移动文件
		    fs.rename(tmp_path, target_path, function(err) {
		        if (err) throw err;
		      // 删除临时文件夹文件, 
		        fs.unlink(tmp_path, function() {
		           if (err) throw err;
		        });
		    });
		    newUser['avatar'] = newUser.name + '.' +avatarType;
		}else{
			newUser['avatar'] = 'default.png';
		}
		//如果不存在則新增用戶
		User.save(newUser,function(err) {
			if (err) {
				req.flash('error', err);
				return res.redirect('/reg');
			}
			req.session.user = newUser;
			req.flash('success', '注册成功');
			res.redirect('/');
		});
	});
};

//个人设置
exports.setting = function(req, res){
	res.render('setting', {
		title: '个人设置',
		user : req.session.user,
		curPage :"",
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
	});
};

//修改密码
exports.changePwd = function(req, res) {
	//检查密码
	if (req.body['old'] === '' || req.body['newPwd'] === ''){
		req.flash('error', '请检查输入');
		return res.redirect('/setting');
	}
	
    //生成md5的密码
    var md5 = crypto.createHash('md5');  
    var oldPwd = md5.update(req.body['old']).digest('base64'); 
    var curUser = {
		name: req.session.user.name,
		password: oldPwd
    };
    
    //检查原密码是否正确
	User.get(curUser.name, function(err, user) {
		if (user.password !== curUser['password'])
			err = '原密码错误';
		if (err) {
			req.flash('error', err);
			return res.redirect('/setting');
		}
		curUser['password'] =  crypto.createHash('md5').update(req.body['newPwd']).digest('base64'); 
		//更新用戶
		User.update(curUser,function(err) {
			if (err) {
				req.flash('error', err);
				return res.redirect('/setting');
			}
			req.flash('success', '保存成功');
			res.redirect('/setting');
		});
	});
};

exports.changeAvatar = function(req, res) {
	var curUser = {
		name: req.session.user.name
    };
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
	    var target_path = './public/images/avatar/' + curUser.name + '.' +avatarType;
	    // 移动文件
	    fs.rename(tmp_path, target_path, function(err) {
	        if (err) throw err;
	      // 删除临时文件夹文件, 
	        fs.unlink(tmp_path, function() {
	           if (err) throw err;
	        });
	    });
	    curUser['avatar'] = curUser.name + '.' +avatarType;
	
		//更新用戶
		User.update(curUser,function(err) {
			if (err) {
				req.flash('error', err);
				return res.redirect('/setting');
			}
			req.flash('success', '保存成功');
			res.redirect('/setting');
		});
	}else{
		req.flash('error', '请上传图片');
		return res.redirect('/setting');
	}
};

//忘记密码
exports.forgetPwd = function(req, res){
	res.render('pwdMail', {
		title: '重设密码',
		user : req.session.user,
		curPage :"",
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
	});
};

//发送重设密码邮件
exports.pwdMail = function(req, res){
	if (req.body['mail'] === '' ){
		req.flash('error', '请输入邮箱');
		return res.redirect('/forgetPwd');
	}
	//正则判断邮箱地址

	var newUser = {
		name: req.session.user.name
	};
	crypto.randomBytes(8, function(ex, buf) {
	  	var token = buf.toString('hex');
	  	//send
	  	mail.SMTP = {
		    use_authentication: true,
		    host: 'smtp.126.com',   //定义用来发送邮件的邮箱服务器
		    port:25,    //定义服务器端口，一般是25   ,如果是使用SSL端口一般为465,或者587
		    ssl:false,     //默认不适用SSL，可以省略不写
		    user: 'liuxiaoyuff@126.com',   //邮箱用户名
		    pass:'19910608718'   //输入邮箱密码
		}
		mail.send_mail({
		    sender:'liuxiaoyuff@126.com',   //发送邮件的地址
		    to:req.body['mail'],     //发给谁
		    subject:'来自readIn的邮件',              //主题
		    body:'Hello,这是新密码'+token+'，先用这个吧，然后去个人设置那里改一下就好～'
		},function(error,success){
		    if (error) {
				req.flash('error', '邮件发送失败,换个邮箱试试？');
				return res.redirect('/forgetPwd');
			}else{
			  	//update
			  	var md5 = crypto.createHash('md5');  
    			newUser['password']  = md5.update(token).digest('base64'); 
				User.update(newUser,function(err) {
					if (err) {
						req.flash('error', err);
						return res.redirect('/setting');
					}
					req.flash('success', '发送成功');
					res.redirect('/');
				});
			}
		});

	});
};