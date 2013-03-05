var mongodb = require('./db');
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
//Book is a function container
var User = function(){
	
};
module.exports = User;

User.get = function (username, callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('user', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}

			collection.findOne({name: username}, function(err, doc) {
				mongodb.close();
				if (doc) {
					var user = {
						name : doc.name,
						password : doc.password,
						id : doc._id
					};
					if(doc['admin']){
						user['admin'] = doc['admin'];
					}
					callback(err, user);
				} else {
					callback(err, null);
				}
			});
		});
	});
};

User.getAll = function (username, callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('user', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}

			collection.find({}).toArray(function(err, docs) {
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

User.save = function (user,callback) {

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

			//save
			collection.insert(user, {safe: true}, function(err, user) {
				mongodb.close();
				callback(err, user);
			});
		});
	});
};

User.update = function (user,callback) {

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

User.delete = function (name,callback) {
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
			collection.remove({"name":name},function(err, doc) {
				mongodb.close();
				callback(err, doc);
			});
		});
	});

};

User.search = function (username, callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('user', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			var searchName = eval("/"+username+"/i");
			collection.find({name:searchName}).toArray(function(err, docs) {
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

User.getSingle = function (uid, callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('user', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			var query = {};
			if (uid) {
				var id = new ObjectID(uid)
				query._id = id;
			}

			collection.findOne(query, function(err, doc) {
				mongodb.close();

				if (doc) {
					callback(err, doc);
				} else {
					callback(err, null);
				}
			});
		});
	});
};