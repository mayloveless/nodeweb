var mongodb = require('./db');
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

var Note = function(){
	
};
module.exports = Note;


Note.getNoteNum = function(socket,data){
	//check db
	if(socket){
		mongodb.open(function(err, db) {
		
			mongodb.collection('book', function(err, collection) {
				if (err) {
					mongodb.close();
					return callback(err);
				}
				var id = new ObjectID(data.id);
				collection.findOne({'_id':id}, function(err, doc) {
					mongodb.close();
					if (err) {
						callback(err, null);
					}
					if(!doc.note){
						doc.note ={}
					}
					socket.emit('reNoteNum', { note: doc.note});
				});
			});
		});
	}
};

Note.getNotes = function (req,callback) {
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
			var id = new ObjectID(req.id);
			collection.findOne({'_id':id},function(err, doc) {
				mongodb.close();
				if(!doc.note){
					doc.note ={};
				}
				return callback(err, doc.note[req.pid]);
			})
		});
	});
};

Note.addNote = function (req,callback) {
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
			var id = new ObjectID(req.id);			
			collection.findOne({'_id':id},function(err, doc) {
				if(err){
					callback(err, 'fail');
				}
				mongodb.close();
				
				if(!doc.note){
					doc.note = {};
				}
				if(!doc.note[req.pid]){
					doc.note[req.pid] = [];
				}
				//手动把新note放进去
				var hasMine = false;
				var curNote = doc.note[req.pid];
				var newTime = new Date().valueOf();
				var one;
				var makeOne = function(){
					one = {};
					one['content'] = req.content;
					one['pcontent'] = req.pcontent;
					one['comment'] = [];
					one['time'] = new Date().valueOf();
					one['pic'] ='';
					one['user']={};
					one['user']['name'] = req.user.name;
					one['user']['avatar'] = req.user.avatar;
					doc.note[req.pid] = [];
					doc.note[req.pid].push(one);
				};
				
				if(!curNote[0]){
					makeOne();
				}else{
					for(var i=0;i<curNote.length;i++){
						if(req.user.name == curNote[i].user.name){
							curNote[i]['content']=req.content;
							curNote[i]['pcontent']=req.pcontent;
							curNote[i]['time'] = newTime;
							hasMine = true;
							one = curNote[i];
							break;
						}
					}
					if(!hasMine){
						makeOne();
					}
				}
				
				collection.update({'_id':id},{"$set":{'note':doc.note}},function(err, doc) {

					return callback(err, one);
				});
				
			})
		});
	});
};

Note.editNote = function (req,callback) {
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
			var id = new ObjectID(req.id);
			collection.findOne({'_id':id},function(err, doc) {
				if(err){
					callback(err, 'fail');
				}
				mongodb.close();
				
				//手动把新note放进去
				var curNote = doc.note[req.pid];
				var newTime = new Date().valueOf()
				for(var i=0;i<curNote.length;i++){
					if(curNote[i].time == Number(req.tid)&& req.user.name == curNote[i].user.name){
						curNote[i]['content']=req.content;
						curNote[i]['time'] = newTime;
						break;
					}
				}
				
				collection.update({'_id':id},{"$set":{'note':doc.note}},function(err, doc) {
					return callback(err, newTime);
				});
				
			})
		});
	});
};

Note.delNote = function (req,callback) {
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
			var id = new ObjectID(req.id);
			
			
			collection.findOne({'_id':id},function(err, doc) {
				if(err){
					return callback(err, 'fail');
				}
				mongodb.close();
				
				if(!doc.note){
					doc.note = {};
				}
				if(!doc.note[req.pid]){
					doc.note[req.pid] = [];
				}
				//手动把新note放进去
				var curNote = doc.note[req.pid];
				for(var i=0;i<curNote.length;i++){
					if(curNote[i].time == Number(req.tid)){
						curNote.splice(i,1);
						break;
					}
				}
				collection.update({'_id':id},{"$set":{'note':doc.note}},function(err, doc) {

					return callback(err, 'success');
				});
				
			})
		});
	});
};

Note.getOneNote = function (req,callback) {
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

			var id = new ObjectID(req.bookid);
			collection.findOne({'_id':id}, function(err, doc) {
				mongodb.close();
				if (err) {
					return callback(err, null);
				}
				if(!doc.note){
					return callback(err, {});
				}

				//手动把note找出来
				var notes = doc.note;
				var hasOne = false;
				for(var key in notes){
					if(hasOne){
						break;
					}
					var curNote = notes[key];
					for(var i=0;i<curNote.length;i++){
						if(curNote[i].time == Number(req.noteid)){
							hasOne = true;
							return callback(err,curNote[i],key,doc);
							break;
						}
					}
				}
				return callback(err, {});
			});
		});
	});
};

Note.pubCmt = function (note,callback) {
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
			var id = new ObjectID(note.bookid);
			var one = {};
			one['content'] = note['content'];
			one['user'] = note['user'];
			one['time'] = new Date().valueOf();

			collection.findOne({'_id':id},function(err, doc) {
				if(err){
					callback(err, 'fail');
				}
				mongodb.close();
				
				//手动把新note放进去
				var curNote = doc.note[note.pid];
				var newTime = new Date().valueOf()
				for(var i=0;i<curNote.length;i++){
					if(curNote[i].time == Number(note.time)){
						curNote[i]['comment'].push(one);
						break;
					}
				}
				
				collection.update({'_id':id},{"$set":{'note':doc.note}},function(err, doc) {
					one['bid'] = note.bookid;
					one['pid'] = note.pid;
					one['tid'] = note.time;
					callback(err, one);
				});
				
			});
		});
		
	});
};

Note.delCmt = function (note,callback) {
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
			var id = new ObjectID(note.bookid);
			collection.findOne({'_id':id},function(err, doc) {
				if(err){
					callback(err, 'fail');
				}
				mongodb.close();
				
				//手动把新note放进去
				var curNote = doc.note[note.pid];
				for(var i=0;i<curNote.length;i++){
					if(curNote[i].time == Number(note.tid)){
						var comments = curNote[i]['comment'];
						for(var j=0;j<comments.length;j++){
							if(comments[j]['time'] == note['ctime']){
								curNote[i]['comment'].splice(j,1);
								break;
							}
						}
						break;
					}
				}
				collection.update({'_id':id},{"$set":{'note':doc.note}},function(err, doc) {
					mongodb.close();
					return callback(err, doc);
				});
				return callback(err,doc)
			});
		});
	});
};


Note.getAll = function (callback) {
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

				var notesList = [];
				for(var i=0;i<docs.length;i++){
					if(docs[i].note){
						for(var key in docs[i].note){
							var notes = docs[i]['note'][key];
							for(var j=0;j<notes.length;j++){
								notes[j]['bookName'] = docs[i]['bookName'];
								notes[j]['bookId'] = docs[i]['_id'];
								notes[j]['pid'] = key;
								notesList.push(notes[j]);
							}
						}
					}
				}
				return callback(err, notesList);
			});
		});
	});
};

Note.saveNoteImg = function (req,callback) {
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
			var id = new ObjectID(req.id);
			collection.findOne({'_id':id},function(err, doc) {
				if(err){
					callback(err, 'fail');
				}
				mongodb.close();
				
				//手动把新pic放进去
				var hasMine = false;
				var curNote = doc.note[req.pid];
				var newTime = new Date().valueOf();
				var makeOne = function(){
					var one = {};
					one['content'] = '';
					one['pcontent'] = req.pcontent;
					one['comment'] = [];
					one['time'] = new Date().valueOf();
					one['pic'] = req.pic;
					one['user']={};
					one['user']['name'] = req.user.name;
					one['user']['avatar'] = req.user.avatar;
					doc.note[req.pid] = [];
					doc.note[req.pid].push(one);
				};
				
				if(!curNote){
					makeOne();
				}else{
					for(var i=0;i<curNote.length;i++){
						if(req.user.name == curNote[i].user.name){
							curNote[i]['pic']=req.pic;
							curNote[i]['time'] = newTime;
							hasMine = true;
							break;
						}
					}
					if(!hasMine){
						makeOne();
					}
				}
				
				collection.update({'_id':id},{"$set":{'note':doc.note}},function(err, doc) {
					return callback(err, newTime);
				});
				
			})
		});
	});
};