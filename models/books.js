var mongodb = require('./db');
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
//Book is a function container
var Book = function(){
	
};
module.exports = Book;

Book.get = function (bookId, callback) {
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

			var query = {};
			if (bookId) {
				query.bookId = bookId;
			}
			collection.find({}).toArray(function(err, docs) {
				mongodb.close();
				if (err) {
					callback(err, null);
				}

				var books = [];

				docs.forEach(function(doc, index) {
					var book = {
						'bookName' : doc.bookName,
						'author' : doc.uploader,
						'cata': doc.cata
					}
					books.push(book);
				});
				callback(null, docs);
			});
		});
	});
};

Book.update = function (book,callback) {

	mongodb.open(function(err, db) {
		if (err) {
		  return callback(err);
		}

		//获取users集合
		db.collection('book', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}

			var id = new ObjectID(book.bookId)
			collection.update({"_id":id}, { $set :book}, function(err, doc) {
				mongodb.close();
				callback(err, doc);
			});
		});
	});
};

Book.delete = function (bid,callback) {
	mongodb.open(function(err, db) {
		if (err) {
		  return callback(err);
		}

		//获取users集合
		db.collection('book', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			var id = new ObjectID(bid)
			collection.remove({"_id":id},function(err, doc) {
				mongodb.close();
				callback(err, doc);
			});
		});
	});

};