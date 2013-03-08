var mongodb = require('./db');
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
var Book = require('../models/books.js');
var Wind = require("wind");

var Tips = function(){
	
};
module.exports = Tips;

Tips.adminGetAll = function (callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('msg', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			collection.find({}).sort({'time':-1}).toArray(function(err, docs) {
				mongodb.close();
				if (docs) {
					callback(err,docs);
				} else {
					callback(err, null);
				}
			});
		});
	});
};

Tips.getAll = function (username,callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		var arr = [];
		db.collection('msg', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			collection.find({}).sort({'time':-1}).toArray(function(err, docs) {
				mongodb.close();
				if (docs) {
					var msg = [];
					for(var i=0;i<docs.length;i++){
						if(docs[i]['relate']['name'] === username){
							msg.push(docs[i]);
						}
					}
					callback(err, msg);
				} else {
					callback(err, null);
				}
			});
		});
	});
};

Tips.addSalon = function (pubComment,callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('book', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}

			var id = new ObjectID(pubComment.bookid);
			collection.find({'_id':id},{'salons':{'$elemMatch':{'comment.time':Number(pubComment['time'])}}}).toArray(function(err, doc) {
				var curSalon = doc[0].salons[0];
				var comments = curSalon.comment;
				comments.push(curSalon);
				var salonUrl = "/book/"+pubComment.bookid+'/salon/salon_'+curSalon.time;
				var salonTitle = curSalon['title'];
				//插入消息方法
				var insert = eval(Wind.compile("async", function (user) {
					if(curSalon['user']['name'] == user['name']){
						var msgTip = '您的书评有了新评论 : ';
					}else{
						var msgTip = '您关注的书评有了新评论 : ';
					}
					var msg ={
						status : 0,
						url : salonUrl,
						urlTitle : salonTitle,
						content : msgTip,
						type : 'salons',
						relate :user,
						time : new Date().valueOf()
					};
					db.collection('msg', function(err, collection) {
						if (err) {
							mongodb.close();
							return callback(err);
						}
						collection.insert(msg, {safe: true}, function(err, msg) {
							
							
						})
					});
				}));
				//插入消息外层的循环方法
				var insertEachMsg = eval(Wind.compile("async", function (cleanUser) {
				    for (var i = 0; i < cleanUser.length; i++) {
				    	if(i == cleanUser.length -1){
								mongodb.close();
								callback();
						}
						//是自己发的评论,就不用发消息了
						if(cleanUser[i]['name'] !== pubComment['user']['name']){
							 $await(insert(cleanUser[i])); 
						}
				    }
				}));
				//用户去重
				var cleanUser = [comments[0]['user']];
				for (var i = 1; i < comments.length; i++) {
					var flag = 1;
			    	for(var j = 0; j < cleanUser.length; j++){
				    	if(comments[i]['user']['name'] == cleanUser[j]['name']){
				    		flag =0;
				    		break;
				    	}
			    	}
			    	if(flag){
			    		cleanUser.push(comments[i]['user']);
			    	}
			    }
			    //wind.js启动
				var task = insertEachMsg(cleanUser);
				task.start();
				
			});
		});
	});
};



Tips.addLike = function (like,callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('book', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}

			var id = new ObjectID(like.bookid);
			console.log(like);
			collection.find({'_id':id},{'salons':{'$elemMatch':{'time':Number(like['salonTime'])}}}).toArray(function(err, doc) {
				var curSalon = doc[0].salons[0];
				var msg ={
					status : 0,
					url : '/book/'+like.bookid+'/salon/salon_'+curSalon.time,
					urlTitle : curSalon.title,
					content : '您的书评有了新喜欢 : ',
					type : 'salons',
					relate :curSalon.user,
					time : new Date().valueOf()
				};
				db.collection('msg', function(err, collection) {
					if (err) {
						mongodb.close();
						return callback(err);
					}
					collection.insert(msg, {safe: true}, function(err, msg) {
						mongodb.close();
						callback();
					})
				});
			});
		});
	});
};





Tips.read = function (mid,callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('msg', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			var id = new ObjectID(mid);
			collection.update({'_id':id},{'$set':{'status':1}},function(err, docs) {
				mongodb.close();
				callback(err, docs);
			});
		});
	});
};