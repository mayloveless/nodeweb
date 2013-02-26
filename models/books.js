var mongodb = require('./db');

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
			collection.find(query, {limit:9}).sort({time: -1}).toArray(function(err, docs) {
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
				callback(null, books);
			});
		});
	});
};

