var mongodb = require('./db');
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

var Comments = function(){
	
};
module.exports = Comments;


/*
Salon.get = function (username, callback) {
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
						password : doc.password
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

Salon.save = function (user,callback) {

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


Comments.getAll = function (callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		var arr = [];
		db.collection('note', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}


			collection.find({}).toArray(function(err, docs) {
				mongodb.close();

				arr = docs;
				db.collection('salon', function(err, collection) {
					if (err) {
						mongodb.close();
						return callback(err);
					}


					collection.find({}).toArray(function(err, docs) {
						mongodb.close();

						var cts = arr.concat(docs);
						var res = [];
						for(var i=0;i<cts.length;i++){
							var one = cts[i]['comment'];
							for(var j=0;j<one.length;j++){
								res.push(one[j]);
							}
						}

						if (res) {
							callback(err, res);
						} else {
							callback(err, null);
						}
					});
				});
			});
		});
	});
};

Comments.getNote = function (callback) {
	//check db
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('note', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}

			collection.find({}).toArray(function(err, cts) {
				mongodb.close();
				var res = [];
				for(var i=0;i<cts.length;i++){
					var one = cts[i]['comment'];
					for(var j=0;j<one.length;j++){
						res.push(one[j]);
					}
				}

				if (res) {
					callback(err, res);
				} else {
					callback(err, null);
				}

			});
		});
	});
};

Comments.getSalon = function (callback) {
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

			collection.find({}).toArray(function(err, cts) {
				mongodb.close();
				var res = [];
				for(var i=0;i<cts.length;i++){
					var one = cts[i]['comment'];
					for(var j=0;j<one.length;j++){
						res.push(one[j]);
					}
				}

				if (res) {
					callback(err, res);
				} else {
					callback(err, null);
				}

			});
		});
	});
};