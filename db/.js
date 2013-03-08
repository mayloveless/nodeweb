
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
  "salons": [
    
  ],
  "status": "1",
  "time": "d",
  "uploader": "wolf"
});
db.getCollection("book").insert({
  "_id": ObjectId("5135be9dd048f8197a96b8c6"),
  "bookName": "test",
  "cata": "小说",
  "descption": "小说",
  "reader": [
    "wolf",
    "test"
  ],
  "salons": [
    
  ],
  "status": NumberInt(0),
  "time": ISODate("2013-03-04T08:22:46.526Z"),
  "uploader": "wolf"
});
db.getCollection("book").insert({
  "_id": ObjectId("513459d6f6382f2c27000001"),
  "bookName": "test",
  "cata": "小说",
  "descption": "小说",
  "salons": [
    {
      "comment": [
        
      ],
      "content": "sdf",
      "like": {
        "num": NumberInt(1),
        "users": [
          "wolf"
        ]
      },
      "time": 1362751240072,
      "title": "ds",
      "user": {
        "name": "test",
        "avatar": "default.png"
      }
    }
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
  "_id": ObjectId("512f6b5f0c64442849000003"),
  "cname": "计算机"
});

/** msg records **/
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/5135be9dd048f8197a96b8c6\/salon\/salon_1362741052536",
  "urlTitle": "dfs",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362747109106,
  "_id": ObjectId("5139dee50fc427b521000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/5135be9dd048f8197a96b8c6\/salon\/salon_1362741052536",
  "urlTitle": "dfs",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362747138256,
  "_id": ObjectId("5139df020fc427b521000002")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/5135be9dd048f8197a96b8c6\/salon\/salon_1362741052536",
  "urlTitle": "dfs",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362747343172,
  "_id": ObjectId("5139dfcf62be54db22000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/5135be9dd048f8197a96b8c6\/salon\/salon_1362741052536",
  "urlTitle": "dfs",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362747380584,
  "_id": ObjectId("5139dff46870031823000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/5135be9dd048f8197a96b8c6\/salon\/salon_1362741052536",
  "urlTitle": "dfs",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362747394326,
  "_id": ObjectId("5139e0026870031823000002")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/5135be9dd048f8197a96b8c6\/salon\/salon_1362741052536",
  "urlTitle": "dfs",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362747567805,
  "_id": ObjectId("5139e0af037f10cc23000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/5135be9dd048f8197a96b8c6\/salon\/salon_1362741052536",
  "urlTitle": "dfs",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362747605776,
  "_id": ObjectId("5139e0d58b852c0024000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/5135be9dd048f8197a96b8c6\/salon\/salon_1362741052536",
  "urlTitle": "dfs",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362747752701,
  "_id": ObjectId("5139e1686aafebea24000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/5135be9dd048f8197a96b8c6\/salon\/salon_1362741052536",
  "urlTitle": "dfs",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362747763963,
  "_id": ObjectId("5139e1736aafebea24000002")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/5135be9dd048f8197a96b8c6\/salon\/salon_1362741052536",
  "urlTitle": "dfs",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362747772922,
  "_id": ObjectId("5139e17c6aafebea24000003")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/513459d6f6382f2c27000001\/salon\/salon_1362749688792",
  "urlTitle": "sfdaadsf",
  "content": "您的书评有了新评论:",
  "type": "salons",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1362749823636,
  "_id": ObjectId("5139e97f7ffa9b6b2e000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/513459d6f6382f2c27000001\/salon\/salon_1362751240072",
  "urlTitle": "ds",
  "content": "您的评论有了新喜欢",
  "type": "salons",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1362751245372,
  "_id": ObjectId("5139ef0daf9d0f0e33000001")
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
  "_id": "I5jG1VSm8OZY+hl+ElNsKVlA",
  "session": "{\"cookie\":{\"originalMaxAge\":12000000,\"expires\":\"2013-03-08T15:22:55.613Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"test2\",\"password\":\"aY1RoZ2KEhzlgUmde3AWaA==\",\"id\":\"5139d1e1d048f8523206c5c0\",\"avatar\":\"default.png\"}}",
  "expires": ISODate("2013-03-08T15:22:55.613Z")
});
db.getCollection("sessions").insert({
  "_id": "SGaenifggpsroEQUo3W6jPYg",
  "session": "{\"cookie\":{\"originalMaxAge\":11999983,\"expires\":\"2013-03-08T17:26:49.320Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"id\":\"512c8d51e7d3c3a00f000001\",\"avatar\":\"wolf.jpg\",\"admin\":1}}",
  "expires": ISODate("2013-03-08T17:26:49.320Z")
});
db.getCollection("sessions").insert({
  "_id": "7SN8oQxSc5G4lDyU+LIqTsrN",
  "session": "{\"cookie\":{\"originalMaxAge\":11999995,\"expires\":\"2013-03-08T17:24:07.374Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"test\",\"password\":\"aY1RoZ2KEhzlgUmde3AWaA==\",\"id\":\"512dbc6d4fc2a09d4c000001\",\"avatar\":\"default.png\"}}",
  "expires": ISODate("2013-03-08T17:24:07.374Z")
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
