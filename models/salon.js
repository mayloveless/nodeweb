var mongodb = require('./db');
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

var Salon = function(){
	
};
module.exports = Salon;


/*


Salon.update = function (user,callback) {

	mongodb.open(function(err, db) {
		if (err) {
		  return callback(err);
		}

		//获取users集合
		db.collection('user', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}

			//为name属性添加索引
			//collection.ensureIndex('name', {unique: true});

			//update
			var newUser = {	};
			if(user.avatar){
				newUser['avatar'] = user.avatar;
			}
			if(user.password){
				newUser['password']= user.password;
			}
			if(user.newName){
				newUser['name']= user.newName;
			}
			if(user.ifAdmin){
				newUser['admin']= user.ifAdmin;
			}
			collection.update({"name":user.name}, { $set :newUser}, function(err, doc) {
				mongodb.close();
				callback(err, doc);
			});
		});
	});
};
*/


Salon.getAll = function (callback) {
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


			collection.find({}).toArray(function(err, docs) {
				mongodb.close();
				if (docs) {
					var sl = [ ];
					for(var i=0;i<docs.length;i++){
						if(docs[i].salons){
							for(var j=0;j<docs[i].salons.length;j++){
								sl.push(docs[i].salons[j]);
							}
						}
					}
					callback(err, sl);
				} else {
					callback(err, null);
				}
			});
		});
	});
};


Salon.delete = function (sid,callback) {
	mongodb.open(function(err, db) {
		if (err) {
		  return callback(err);
		}

		//获取users集合
		db.collection('salon', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			var salon = new ObjectID(sid)
			
			collection.remove({'_id':salon},function(err, doc) {
				mongodb.close();
				callback(err, doc);
			});
		});
	});
};

Salon.search = function (content,callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('salon', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}

			var searchContent = eval("/"+content+"/i");
			collection.find({'$or':[{'content':searchContent},{'title':searchContent}]}).toArray(function(err, docs) {
				mongodb.close();
				if (docs) {
					callback(err, docs);
				} else {
					callback(err, null);
				}
			});
		});
	});
};


/*Salon.delComment = function (sid,callback) {
	mongodb.open(function(err, db) {
		if (err) {
		  return callback(err);
		}

		//获取users集合
		db.collection('salon', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			var salon = new ObjectID(sid)
			
			collection.update({"_id":sid}, { $set :{'comment':[]}}, function(err, doc) {
				mongodb.close();
				callback(err, doc);
			});
		});
	});
};*/