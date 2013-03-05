
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
  "_id": ObjectId("512e742ed048f86b65000007"),
  "bookId": "512e742ed048f86b65000007",
  "bookName": "wlf",
  "cata": "小说",
  "content": "的了让人",
  "contents": "d",
  "index": "1243",
  "page": {
    "num1": "nid1",
    "num2": "nid2"
  },
  "reader": [
    
  ],
  "status": NumberInt(0),
  "time": "d",
  "uploader": "wolf"
});
db.getCollection("book").insert({
  "_id": ObjectId("513459d6f6382f2c27000001"),
  "bookName": "test",
  "cata": "发生地方",
  "descption": "爱上地方",
  "status": NumberInt(0),
  "time": ISODate("2013-03-04T08:22:46.526Z"),
  "uploader": "wolf"
});
db.getCollection("book").insert({
  "_id": ObjectId("5135be9dd048f8197a96b8c6"),
  "bookName": "test",
  "cata": "发生地方",
  "descption": "爱上地方",
  "reader": [
    "wolf",
    "test"
  ],
  "status": NumberInt(0),
  "time": ISODate("2013-03-04T08:22:46.526Z"),
  "uploader": "wolf"
});
db.getCollection("book").insert({
  "_id": ObjectId("5135bfa2d048f8566c1b2ddd"),
  "bookName": "test",
  "cata": "发生地方",
  "descption": "爱上地方",
  "reader": [
    "test"
  ],
  "status": NumberInt(0),
  "time": ISODate("2013-03-04T08:22:46.526Z"),
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
  "cname": "计算机",
  "_id": ObjectId("512f6b5f0c64442849000003")
});
db.getCollection("cata").insert({
  "cname": "发生地方",
  "_id": ObjectId("513459d6f6382f2c27000002")
});

/** msg records **/
db.getCollection("msg").insert({
  "_id": ObjectId("512b719fd048f89f32000000"),
  "content": "",
  "type": "nid\/sid\/system",
  "url": ""
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

/** salon records **/
db.getCollection("salon").insert({
  "_id": ObjectId("512e4280d048f8091c000001"),
  "bookId": {
    "bookName": "aaa",
    "_id": ObjectId("512c8d51e7d3c3a00f000001")
  },
  "comment": [
    {
      "user": "wolf",
      "time": "dd",
      "content": "dddd",
      "from": "512c8d51e7d3c3a00f000001",
      "type": "salon"
    },
    {
      "user": "wolf",
      "time": "d2d",
      "content": "",
      "from": "512c8d51e7d3c3a00f000001",
      "type": "salon"
    }
  ],
  "content": "22的",
  "like": {
    "num": NumberInt(2),
    "user": [
      "wolf",
      "wolf"
    ]
  },
  "time": "2222",
  "title": "啦",
  "user": {
    "name": "wolf",
    "_id": ObjectId("512c8d51e7d3c3a00f000001")
  }
});
db.getCollection("salon").insert({
  "_id": ObjectId("512e42ecd048f84d63000000"),
  "bookId": {
    "bookName": "aaa",
    "_id": ObjectId("512c8d51e7d3c3a00f000001")
  },
  "comment": [
    {
      "user": "wolf",
      "time": "dd",
      "content": "dddd",
      "from": "512c8d51e7d3c3a00f000001",
      "type": "salon"
    },
    {
      "user": "wolf",
      "time": "d2d",
      "content": "",
      "from": "512c8d51e7d3c3a00f000001",
      "type": "salon"
    }
  ],
  "content": "222",
  "like": {
    "num": NumberInt(2),
    "user": [
      "wolf",
      "wolf"
    ]
  },
  "time": "2222",
  "title": "biaoti",
  "user": {
    "name": "wolf",
    "_id": ObjectId("512c8d51e7d3c3a00f000001")
  }
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": "\/OE3JlgDox3MBdnqTttvu7G5",
  "session": "{\"cookie\":{\"originalMaxAge\":11999998,\"expires\":\"2013-02-27T07:08:52.206Z\",\"httpOnly\":true,\"path\":\"\/\"},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"admin\":1},\"flash\":{}}",
  "expires": ISODate("2013-02-27T07:08:52.206Z")
});
db.getCollection("sessions").insert({
  "_id": "HHm+TX9lgyHKzrjy+XThItuL",
  "session": "{\"cookie\":{\"originalMaxAge\":11999994,\"expires\":\"2013-02-27T14:37:23.679Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"admin\":1}}",
  "expires": ISODate("2013-02-27T14:37:23.679Z")
});
db.getCollection("sessions").insert({
  "_id": "Cw7Apr30hANQn2hYuhtSit0X",
  "session": "{\"cookie\":{\"originalMaxAge\":11999994,\"expires\":\"2013-02-27T17:34:33.616Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{}}",
  "expires": ISODate("2013-02-27T17:34:33.616Z")
});
db.getCollection("sessions").insert({
  "_id": "g5G7PqbOOIwIuLY2iCHT48fW",
  "session": "{\"cookie\":{\"originalMaxAge\":11999999,\"expires\":\"2013-02-27T21:47:40.862Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{}}",
  "expires": ISODate("2013-02-27T21:47:40.862Z")
});
db.getCollection("sessions").insert({
  "_id": "85\/eKTJFm1INtsh8qHRZjCF5",
  "session": "{\"cookie\":{\"originalMaxAge\":11999992,\"expires\":\"2013-02-28T00:44:42.100Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"admin\":1}}",
  "expires": ISODate("2013-02-28T00:44:42.100Z")
});
db.getCollection("sessions").insert({
  "_id": "Ano7emkcy1NHG5+yJHYuQqnD",
  "session": "{\"cookie\":{\"originalMaxAge\":11999996,\"expires\":\"2013-02-28T06:00:13.219Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"admin\":1}}",
  "expires": ISODate("2013-02-28T06:00:13.219Z")
});
db.getCollection("sessions").insert({
  "_id": "UpuG7mHGJ3M+Ff5Bw4M7Y53E",
  "session": "{\"cookie\":{\"originalMaxAge\":11999998,\"expires\":\"2013-02-28T10:20:22.384Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"admin\":1}}",
  "expires": ISODate("2013-02-28T10:20:22.384Z")
});
db.getCollection("sessions").insert({
  "_id": "21JdjOFDFuD+f4jLioRg2Hch",
  "session": "{\"cookie\":{\"originalMaxAge\":12000000,\"expires\":\"2013-02-28T17:56:37.616Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"admin\":1}}",
  "expires": ISODate("2013-02-28T17:56:37.616Z")
});
db.getCollection("sessions").insert({
  "_id": "ipEmom0QtzF+P+W56heqs\/6z",
  "session": "{\"cookie\":{\"originalMaxAge\":11999986,\"expires\":\"2013-03-04T12:21:19.347Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"id\":\"512c8d51e7d3c3a00f000001\",\"admin\":1}}",
  "expires": ISODate("2013-03-04T12:21:19.347Z")
});
db.getCollection("sessions").insert({
  "_id": "O\/Lva4HPsA4Mo0OZaZs3UjSk",
  "session": "{\"cookie\":{\"originalMaxAge\":12000000,\"expires\":\"2013-03-04T17:19:50.433Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{}}",
  "expires": ISODate("2013-03-04T17:19:50.433Z")
});
db.getCollection("sessions").insert({
  "_id": "DvDvHW91qv\/BSicK4WFswCig",
  "session": "{\"cookie\":{\"originalMaxAge\":12000000,\"expires\":\"2013-03-05T07:22:08.358Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"id\":\"512c8d51e7d3c3a00f000001\",\"admin\":1}}",
  "expires": ISODate("2013-03-05T07:22:08.358Z")
});
db.getCollection("sessions").insert({
  "_id": "7M39XdTgLmdDxFQbr7bvyU4L",
  "session": "{\"cookie\":{\"originalMaxAge\":12000000,\"expires\":\"2013-03-05T08:14:21.403Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{}}",
  "expires": ISODate("2013-03-05T08:14:21.403Z")
});
db.getCollection("sessions").insert({
  "_id": "Fb07J5Qe0T+DJf1bIkDSKWE0",
  "session": "{\"cookie\":{\"originalMaxAge\":11999999,\"expires\":\"2013-03-05T13:11:10.006Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"id\":\"512c8d51e7d3c3a00f000001\",\"admin\":1}}",
  "expires": ISODate("2013-03-05T13:11:10.6Z")
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
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "readin.cata",
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
  "name": "test",
  "password": "aY1RoZ2KEhzlgUmde3AWaA==",
  "avatar": "default.png",
  "_id": ObjectId("512dbc6d4fc2a09d4c000001")
});
