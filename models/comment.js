var mongodb = require('./db');
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

var Comments = function(){
	
};
module.exports = Comments;




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
				db.collection('book', function(err, collection) {
					if (err) {
						mongodb.close();
						return callback(err);
					}


					collection.find({}).toArray(function(err, docs) {
						mongodb.close();
						var sl = [ ];
						for(var i=0;i<docs.length;i++){
							if(docs[i].salons){
								for(var j=0;j<docs[i].salons.length;j++){
									docs[i].salons[j]['bookid']  = docs[i]._id;
									docs[i].salons[j]['bookName']  = docs[i].bookName;
									docs[i].salons[j]['sid']  = j;
									sl.push(docs[i].salons[j]);
								}
							}
						}

						var cts = arr.concat(sl);
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