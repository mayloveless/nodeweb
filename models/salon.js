var mongodb = require('./db');
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

var Salon = function(){
	
};
module.exports = Salon;



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
								docs[i].salons[j]['bookid']  = docs[i]._id;
								docs[i].salons[j]['bookName']  = docs[i].bookName;
								docs[i].salons[j]['sid']  = j;
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




Salon.search = function (content,callback) {
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

			var searchContent = eval("/"+content+"/i");
//{'salons': { $elemMatch: {'$or':[{'content':searchContent},{'title':searchContent}]} } }
			collection.find({'salons': { '$elemMatch': { 'title': '22' }}}).toArray(function(err, docs) {
				mongodb.close();
				if (docs) {
					console.log(docs);
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