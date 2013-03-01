var mongodb = require('./db');
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
//Book is a function container
var Book = function(){
	
};
module.exports = Book;

Book.get = function (bookName, callback) {
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
			if (bookName) {
				query.bookName = bookName;
			}
			collection.find(query).toArray(function(err, docs) {
				mongodb.close();
				if (err) {
					callback(err, null);
				}
				db.collection('cata', function(err, collection) {
					if (err) {
						mongodb.close();
						return callback(err);
					}
					collection.find({}).toArray(function(err, cata) {
						mongodb.close();
						if (err) {
							callback(err, null);
						}

						callback(null, docs,cata);
					});
				});

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

		//获取Book集合
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

Book.getCata = function (cata, callback) {
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
			console.log(cata);
			collection.find({'cata':cata}).toArray(function(err, docs) {
				mongodb.close();
				if (err) {
					callback(err, null);
				}
				db.collection('cata', function(err, collection) {
					if (err) {
						mongodb.close();
						return callback(err);
					}
					collection.find({}).toArray(function(err, cata) {
						mongodb.close();
						if (err) {
							callback(err, null);
						}

						callback(null, docs,cata);
					});
				});

			});
		});
	});
};

Book.getStatus= function (status, callback) {
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
			if(status === 'online'){
				var statusId = 1;
			}else if(status === 'check'){
				var statusId = 0;
			}else{
				var statusId = 2;
			}
			collection.find({'status':statusId}).toArray(function(err, docs) {
				mongodb.close();
				if (err) {
					callback(err, null);
				}

				db.collection('cata', function(err, collection) {
					if (err) {
						mongodb.close();
						return callback(err);
					}
					collection.find({}).toArray(function(err, cata) {
						mongodb.close();
						if (err) {
							callback(err, null);
						}

						callback(null, docs,cata);
					});
				});

			});
		});
	});
};

Book.getContent= function (key, callback) {
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
			var searchContent = eval("/"+key+"/i");
			collection.find({'$or':[{'content':searchContent},{'bookName':searchContent}]}).toArray(function(err, docs) {
				mongodb.close();
				if (err) {
					callback(err, null);
				}
				
				db.collection('cata', function(err, collection) {
					if (err) {
						mongodb.close();
						return callback(err);
					}
					collection.find({}).toArray(function(err, cata) {
						mongodb.close();
						if (err) {
							callback(err, null);
						}

						callback(null, docs,cata);
					});
				});

			});
		});
	});
};

Book.create = function (bookName,cata,uploader,callback) {
	mongodb.open(function(err, db) {
		if (err) {
		  return callback(err);
		}

		//获取books集合
		db.collection('book', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			//save
			var book ={};
			book['bookName'] = bookName;
			book['cata'] = cata;
			book['time'] = new Date();
			book['uploader'] = uploader;
			book['status'] = 1;
			collection.insert(book, {safe: true}, function(err, book) {
				db.collection('cata', function(err, collection) {
					if (err) {
						mongodb.close();
						return callback(err);
					}
					
					collection.find({'cname':cata}).toArray(function(err, docs) {
						console.log(docs);
						if(!docs[0]){
							collection.insert({'cname':cata}, {safe: true}, function(err, docs) {
								if (err) {
									mongodb.close();
									return callback(err);
								}
								mongodb.close();
								callback(err, book);
							});
						}
						mongodb.close();
						callback(err, book);
					});
				});
			});
		});
	});

};