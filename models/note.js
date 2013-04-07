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
			var one = {};
			one['content'] = req.content;
			one['pcontent'] = req.pcontent;
			one['comment'] = [];
			one['time'] = new Date().valueOf();;
			one['user']={}
			one['user']['name'] = req.user.name;
			one['user']['avatar'] = req.user.avatar;
			
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
				doc.note[req.pid].push(one);
				
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
					if(curNote[i].time == Number(req.tid)&& req.user.name == curNote[i].user.name){
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
					if(curNote[i].time == Number(note.tid)&& note.name == curNote[i].user.name){
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

