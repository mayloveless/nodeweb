
/** book indexes **/
db.getCollection("book").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** cata indexes **/
db.getCollection("cata").ensureIndex({
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
  "_id": ObjectId("513ee50bf72947756e000001"),
  "bookName": "wolf",
  "bookType": "txt",
  "cata": "小说",
  "content": "<h1 label=\"标题居中\" style=\"font-size:32px;font-weight:bold;border-bottom-color:#CCCCCC;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;\">第三方<a name=\"1\" anchorname=\"1\"><\/a>&lt;p&gt;&lt;a name=&quot; anchorname=&quot;1&quot;&gt;&lt;\/a&gt;&lt;p&gt;2&lt;\/p&gt;&lt;\/p&gt;<\/h1>",
  "descption": "小说 editor test",
  "status": NumberInt(0),
  "time": ISODate("2013-03-12T08:19:23.834Z"),
  "uploader": "wolf"
});

/** cata records **/
db.getCollection("cata").insert({
  "_id": ObjectId("512e6cf9d048f8f327000001"),
  "cname": "小说"
});
db.getCollection("cata").insert({
  "_id": ObjectId("512e6d06d048f8655b000000"),
  "cname": "文学名著"
});
db.getCollection("cata").insert({
  "_id": ObjectId("512f6b5f0c64442849000003"),
  "cname": "计算机"
});

/** msg records **/
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/513459d6f6382f2c27000001\/salon\/salon_1362913554783",
  "urlTitle": "sdfsfd",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1362913739107,
  "_id": ObjectId("513c69cb107ba7b75a000001")
});
db.getCollection("msg").insert({
  "_id": ObjectId("513c69f6d048f8c553986472"),
  "status": NumberInt(1),
  "url": "\/book\/513459d6f6382f2c27000001\/salon\/salon_1362913554783",
  "urlTitle": "sdfsfd",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.png"
  },
  "time": 1362913739108
});
db.getCollection("msg").insert({
  "_id": ObjectId("513c69fed048f8cf5355d756"),
  "status": NumberInt(1),
  "url": "\/book\/513459d6f6382f2c27000001\/salon\/salon_1362913554783",
  "urlTitle": "sdfsfd",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.png"
  },
  "time": 1362913739118
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/512e742ed048f86b65000007\/salon\/salon_1362831482735",
  "urlTitle": "asfd",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1362913962063,
  "_id": ObjectId("513c6aaa37cfdb4e5e000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/512e742ed048f86b65000007\/salon\/salon_1362831482735",
  "urlTitle": "asfd",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1362913999093,
  "_id": ObjectId("513c6acf7c3f6aca5e000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/512e742ed048f86b65000007\/salon\/salon_1362831482735",
  "urlTitle": "asfd",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1362914026444,
  "_id": ObjectId("513c6aeaa2dbd6fa5e000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/512e742ed048f86b65000007\/salon\/salon_1362831482735",
  "urlTitle": "asfd",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1362914037824,
  "_id": ObjectId("513c6af593f8b24a5f000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/512e742ed048f86b65000007\/salon\/salon_1362831482735",
  "urlTitle": "asfd",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1362914158238,
  "_id": ObjectId("513c6b6e6f2fe7f75f000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/512e742ed048f86b65000007\/salon\/salon_1362831482735",
  "urlTitle": "asfd",
  "content": "您的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362914174476,
  "_id": ObjectId("513c6b7e6f2fe7f75f000002")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/512e742ed048f86b65000007\/salon\/salon_1362831482735",
  "urlTitle": "asfd",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1362914207208,
  "_id": ObjectId("513c6b9f6f2fe7f75f000003")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/512e742ed048f86b65000007\/salon\/salon_1362831482735",
  "urlTitle": "asfd",
  "content": "您的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362914216877,
  "_id": ObjectId("513c6ba86f2fe7f75f000004")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/512e742ed048f86b65000007\/salon\/salon_1362914248696",
  "urlTitle": "asfd3",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1362914252007,
  "_id": ObjectId("513c6bcc6f2fe7f75f000005")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/513459d6f6382f2c27000001\/salon\/salon_1362914310799",
  "urlTitle": "ddd",
  "content": "您的书评有了新喜欢 : ",
  "type": "salonsLike",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362914317810,
  "_id": ObjectId("513c6c0d190057f162000001")
});

/** note records **/
db.getCollection("note").insert({
  "_id": ObjectId("512e4086d048f86b65000004"),
  "bookId": {
    "bookName": "dd"
  },
  "comment": [
    {
      "user": "uid",
      "time": "dd",
      "content": "",
      "from": "512c8d51e7d3c3a00f000001",
      "type": "note"
    },
    {
      "user": "uid",
      "time": "dd",
      "content": "",
      "from": "512c8d51e7d3c3a00f000001",
      "type": "note"
    }
  ],
  "content": "我的发生地方",
  "pageNum": NumberInt(0),
  "pic": "",
  "time": "dd",
  "user": {
    "name": "wolf"
  }
});
db.getCollection("note").insert({
  "_id": ObjectId("512e42d7d048f8f327000000"),
  "bookId": {
    "bookName": "dd"
  },
  "comment": [
    {
      "user": "uid",
      "time": "dd",
      "content": "",
      "from": "512c8d51e7d3c3a00f000001",
      "type": "note"
    },
    {
      "user": "uid",
      "time": "dd",
      "content": "",
      "from": "512c8d51e7d3c3a00f000001",
      "type": "note"
    }
  ],
  "content": "asdfasdfasdfa",
  "pageNum": NumberInt(0),
  "pic": "",
  "time": "dd",
  "user": {
    "name": "wolf"
  }
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": "ycg7rmzys09nrG2n\/LveciC3",
  "session": "{\"cookie\":{\"originalMaxAge\":11999990,\"expires\":\"2013-03-12T12:47:20.857Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"id\":\"512c8d51e7d3c3a00f000001\",\"avatar\":\"wolf.jpg\",\"admin\":1}}",
  "expires": ISODate("2013-03-12T12:47:20.857Z")
});

/** system.indexes records **/
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
  "ns": "readin.cata",
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

/** user records **/
db.getCollection("user").insert({
  "_id": ObjectId("512c8d51e7d3c3a00f000001"),
  "admin": NumberInt(1),
  "avatar": "wolf.jpg",
  "name": "wolf",
  "password": "v0OX2LTcBh4bbRkaNS6RNA=="
});
db.getCollection("user").insert({
  "_id": ObjectId("512dbc6d4fc2a09d4c000001"),
  "name": "test",
  "password": "aY1RoZ2KEhzlgUmde3AWaA==",
  "avatar": "default.png"
});
db.getCollection("user").insert({
  "_id": ObjectId("5139d1e1d048f8523206c5c0"),
  "name": "test2",
  "password": "aY1RoZ2KEhzlgUmde3AWaA==",
  "avatar": "default.png"
});
