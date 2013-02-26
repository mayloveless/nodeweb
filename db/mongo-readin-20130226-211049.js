
/** book indexes **/
db.getCollection("book").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** msg indexes **/
db.getCollection("msg").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** note indexes **/
db.getCollection("note").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** salon indexes **/
db.getCollection("salon").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** sessions indexes **/
db.getCollection("sessions").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** sessions indexes **/
db.getCollection("sessions").ensureIndex({
  "expires": NumberInt(1)
},[
  
]);

/** user indexes **/
db.getCollection("user").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** book records **/
db.getCollection("book").insert({
  "_id": ObjectId("512b7171d048f83232000001"),
  "bookId": "1",
  "bookName": "aaa",
  "cata": "小说",
  "contents": "",
  "page": {
    "num1": "nid1",
    "num2": "nid2"
  },
  "salon": "sid",
  "status": NumberInt(0),
  "time": "",
  "uploader": "uid"
});

/** msg records **/
db.getCollection("msg").insert({
  "_id": ObjectId("512b719fd048f89f32000000"),
  "url": "",
  "nid": "",
  "sid": ""
});

/** note records **/
db.getCollection("note").insert({
  "_id": ObjectId("512b71ead048f83132000001"),
  "bookId": NumberInt(0),
  "comment": [
    {
      "user": "uid",
      "time": "dd",
      "content": ""
    },
    {
      "user": "uid",
      "time": "dd",
      "content": ""
    }
  ],
  "content": "",
  "pageNum": NumberInt(0),
  "pic": "",
  "time": "dd",
  "user": "uid"
});

/** salon records **/
db.getCollection("salon").insert({
  "_id": ObjectId("512b720ed048f8a232000000"),
  "bookId": NumberInt(0),
  "comment": [
    {
      "user": "uid",
      "time": "dd",
      "content": ""
    },
    {
      "user": "uid",
      "time": "dd",
      "content": ""
    }
  ],
  "content": "",
  "likeNum": NumberInt(0),
  "time": "dd",
  "title": "",
  "user": "uid"
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": "dDnKSi43S3Lh5IZX+7KyWgRo",
  "session": "{\"cookie\":{\"originalMaxAge\":11999999,\"expires\":\"2013-02-25T17:59:22.920Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{}}",
  "expires": ISODate("2013-02-25T17:59:22.920Z")
});
db.getCollection("sessions").insert({
  "_id": "vmI3nrAVX5scKaWsaDIRxs9L",
  "session": "{\"cookie\":{\"originalMaxAge\":11999999,\"expires\":\"2013-02-26T04:26:36.151Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"_id\":\"512c093944ece9072c445c59\",\"name\":\"wlf\",\"pwd\":\"wlf\"}}",
  "expires": ISODate("2013-02-26T04:26:36.151Z")
});
db.getCollection("sessions").insert({
  "_id": "zzEuAL5pnzv0NOtgyBfaxQg4",
  "session": "{\"cookie\":{\"originalMaxAge\":12000000,\"expires\":\"2013-02-26T04:26:48.865Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"_id\":\"512c093944ece9072c445c59\",\"name\":\"wlf\",\"pwd\":\"wlf\"}}",
  "expires": ISODate("2013-02-26T04:26:48.865Z")
});
db.getCollection("sessions").insert({
  "_id": "uYoJftASpvxQ+N9hY0EsY\/qS",
  "session": "{\"cookie\":{\"originalMaxAge\":12000000,\"expires\":\"2013-02-26T04:28:26.975Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"_id\":\"512c0ad344ece9072c445c5a\",\"name\":\"wolf\",\"pwd\":\"wolf\"}}",
  "expires": ISODate("2013-02-26T04:28:26.975Z")
});
db.getCollection("sessions").insert({
  "_id": "XyhHXonhQ0z1kX5fFyTMpMAe",
  "session": "{\"cookie\":{\"originalMaxAge\":12000000,\"expires\":\"2013-02-26T04:31:10.959Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{}}",
  "expires": ISODate("2013-02-26T04:31:10.959Z")
});
db.getCollection("sessions").insert({
  "_id": "kuh9\/1GSVz488FoJD77mRYIv",
  "session": "{\"cookie\":{\"originalMaxAge\":11999999,\"expires\":\"2013-02-26T04:55:38.583Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"wolf\"}}",
  "expires": ISODate("2013-02-26T04:55:38.583Z")
});
db.getCollection("sessions").insert({
  "_id": "fqM\/d+hYdFa62XJMeHlhDMak",
  "session": "{\"cookie\":{\"originalMaxAge\":11999992,\"expires\":\"2013-02-26T16:27:18.720Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"WBJtwAt3sDAugwOVBcsbAA==\"}}",
  "expires": ISODate("2013-02-26T16:27:18.720Z")
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "readin.book",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "readin.msg",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "readin.salon",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "readin.note",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "readin.user",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "readin.sessions",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "expires": NumberInt(1)
  },
  "ns": "readin.sessions",
  "name": "expires_1",
  "expireAfterSeconds": NumberInt(0)
});

/** user records **/
db.getCollection("user").insert({
  "_id": ObjectId("512c8d51e7d3c3a00f000001"),
  "avatar": "wolf.jpg",
  "name": "wolf",
  "password": "v0OX2LTcBh4bbRkaNS6RNA=="
});
db.getCollection("user").insert({
  "name": "test",
  "password": "CY9rzUYh03PK3k6DJie09g==",
  "avatar": "test.jpg",
  "_id": ObjectId("512c8d81e7d3c3a00f000002")
});
