
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
    {
      "comment": [
        {
          "content": "fasfd",
          "user": {
            "name": "test",
            "avatar": "default.png"
          },
          "time": 1362831507112
        },
        {
          "content": "fasfd",
          "user": {
            "name": "test",
            "avatar": "default.png"
          },
          "time": 1362831520166
        },
        {
          "content": "d",
          "user": {
            "name": "test",
            "avatar": "default.png"
          },
          "time": 1362831548297
        }
      ],
      "content": "afsd",
      "like": {
        "num": NumberInt(1),
        "users": [
          "test"
        ]
      },
      "time": 1362831482735,
      "title": "asfd",
      "user": {
        "name": "wolf",
        "avatar": "wolf.jpg"
      }
    }
  ],
  "status": "1",
  "time": "d",
  "uploader": "wolf"
});
db.getCollection("book").insert({
  "_id": ObjectId("513459d6f6382f2c27000001"),
  "bookName": "test",
  "cata": "小说",
  "descption": "小说",
  "salons": [
    
  ],
  "status": NumberInt(0),
  "time": ISODate("2013-03-04T08:22:46.526Z"),
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
    {
      "comment": [
        {
          "content": "1",
          "user": {
            "name": "test",
            "avatar": "default.png"
          },
          "time": 1362829364474
        },
        {
          "content": "1",
          "user": {
            "name": "test",
            "avatar": "default.png"
          },
          "time": 1362829408500
        },
        {
          "content": "a",
          "user": {
            "name": "wolf",
            "avatar": "wolf.jpg"
          },
          "time": 1362829414635
        },
        {
          "content": "a",
          "user": {
            "name": "wolf",
            "avatar": "wolf.jpg"
          },
          "time": 1362829429967
        }
      ],
      "content": "1",
      "like": {
        "num": NumberInt(2),
        "users": [
          "test",
          "test"
        ]
      },
      "time": 1362828978900,
      "title": "1",
      "user": {
        "name": "wolf",
        "avatar": "wolf.jpg"
      }
    },
    {
      "comment": [
        
      ],
      "content": "fd",
      "like": {
        "num": NumberInt(1),
        "users": [
          "wolf"
        ]
      },
      "time": 1362829755928,
      "title": "df",
      "user": {
        "name": "test",
        "avatar": "default.png"
      }
    },
    {
      "comment": [
        {
          "content": "d",
          "user": {
            "name": "test",
            "avatar": "default.png"
          },
          "time": 1362833084894
        },
        {
          "content": "d",
          "user": {
            "name": "test",
            "avatar": "default.png"
          },
          "time": 1362833088147
        }
      ],
      "content": "afsd",
      "like": {
        "num": NumberInt(1),
        "users": [
          "test"
        ]
      },
      "time": 1362832968250,
      "title": "fasd",
      "user": {
        "name": "wolf",
        "avatar": "wolf.jpg"
      }
    },
    {
      "comment": [
        
      ],
      "content": "fdas",
      "like": {
        "num": NumberInt(1),
        "users": [
          "wolf"
        ]
      },
      "time": 1362833125709,
      "title": "fads",
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
  "_id": "axOgCYHsUV3mFsAtgBldG+IE",
  "session": "{\"cookie\":{\"originalMaxAge\":11999992,\"expires\":\"2013-03-09T16:05:32.114Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"id\":\"512c8d51e7d3c3a00f000001\",\"avatar\":\"wolf.jpg\",\"admin\":1,\"unread\":2}}",
  "expires": ISODate("2013-03-09T16:05:32.114Z")
});
db.getCollection("sessions").insert({
  "_id": "tbKPero16jSA4BeL\/qiRHyzJ",
  "session": "{\"cookie\":{\"originalMaxAge\":11999995,\"expires\":\"2013-03-09T16:05:38.548Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"test\",\"password\":\"aY1RoZ2KEhzlgUmde3AWaA==\",\"id\":\"512dbc6d4fc2a09d4c000001\",\"avatar\":\"default.png\",\"unread\":0}}",
  "expires": ISODate("2013-03-09T16:05:38.548Z")
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
