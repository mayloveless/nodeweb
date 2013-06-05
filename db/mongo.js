
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
  "_id": ObjectId("51aed603436ab7730b000001"),
  "bookName": "智能协调调度",
  "bookType": "txt",
  "cata": "计算机",
  "content": "<h1 label=\"标题居中\" style=\"font-size:32px;font-weight:bold;border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;\">  <span style=\"color:#00b0f0;\" class=\"psignal\"> |<\/span> <span style=\"font-size:36px;\">   <\/span><span style=\"font-family:arial, 宋体, sans-serif;font-size:36px;line-height:23.984375px;text-indent:30px;background-color:#ffffff;\">协调智能调度<\/span><\/h1><p><br \/><\/p><p><span style=\"color:#00b0f0;\" class=\"psignal\"> |<\/span>《协调智能调度》系统阐述了协调智能调度的研究内容、研究方法和关键实现技术；围绕协调智能论及协调调度两大分类（正常优化最经济协调调度、异常应急响应最及时协调调度），从协调智能调度的理论模型、实现算法，软件体系结构、移动及迁移计算、网络虚拟机器人、协作调度工作流、群体协调建模、协调调度可视化、基于人工生命的进化协调调度等多个角度，系统总结了近年来在该领域的研究工作。\r\n<\/p><div class=\"para\" style=\"text-indent:30px;font-family:arial, 宋体, sans-serif;font-size:14.44444465637207px;line-height:23.99305534362793px;background-color:#ffffff;margin-bottom:14px;\">   <span style=\"color:#00b0f0;\" class=\"psignal\"> |<\/span> 《协调智能调度》适合从事智能科学、计算机科学、管理科学、控制科学以及相关领域科学研究和工程应用人员参考，也可作为高等院校和科研院所自动化、计算机、智能科学技术、电子信息、电信工程、应用数学、管理等相关专业的博士生、硕士生、高年级本科生的教学参考书。\r\n<\/div><p>.<br \/><\/p>",
  "cover": "\/images\/figure\/zhineng.jpg",
  "descption": "王洪泊,  工学博士,北京科技大学计算机与通信工程学院计算机系副\r\n教授,北京市人工智能学会理事、ACM 会员;主要研究领域为物联网\r\n射频识别技术、\r\n物联网环境下的资源协调智能调度,\r\n迁移计算与分布式\r\n人工智能、\r\n现代软件工程与系统集成;\r\n在国内外重要学术刊物及国际重\r\n要学术会议上发表论文 30 多篇,\r\n获省科技进步二等奖 1 项,\r\n专著 6 部,\r\n国家授权发明专利 1 项、计算机软件著作权 6 项。 \r\n",
  "note": [
    
  ],
  "reader": [
    "wolf"
  ],
  "status": NumberInt(1),
  "time": ISODate("2013-06-05T06:09:07.426Z"),
  "uploader": "wolf"
});
db.getCollection("book").insert({
  "_id": ObjectId("514ae74d957f41df63000004"),
  "bookId": "514ae74d957f41df63000004",
  "bookName": "西西弗的神话",
  "bookType": "txt",
  "cata": "哲学",
  "content": "<p>.<\/p><p style=\"text-align:center;\"><span style=\"color:#00b0f0;\" class=\"psignal csignal\"> ||<\/span><span style=\"color:#f79646;font-size:36px;\"><span style=\"color:#f79646;font-size:18px;\"><西西弗的神话：荒谬与反抗论集><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><\/span><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><!--西西弗的神话：加缪荒谬与反抗论集--><\/span><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal csignal\"> ||<\/span><span style=\"font-size:18px;\">内容提要<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal csignal\"> ||<\/span><span style=\"font-size:18px;\">《西西弗的神话》<\/span><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">    被人称作是存在主<a href=\"#largeImg\" class=\"img\" data-toggle=\"modal\" role=\"button\"><img src=\"\/javascripts\/ueditor\/..\/..\/.\/images\/figure\/apache_ld1364114920863.JPG\" title=\"apache_ld1364114920863.JPG\" width=\"100\" height=\"81\" border=\"0\" hspace=\"0\" vspace=\"0\" style=\"width:100px;height:81px;\" \/><\/a>义的封篇之作，它以优美如诗<a href=\"#largeImg\" class=\"img\" data-toggle=\"modal\" role=\"button\"><img src=\"\/javascripts\/ueditor\/..\/..\/.\/images\/figure\/大话西游 - 谍报封面1364115356807.png\" title=\"大话西游 - 谍报封面1364115356807.png\" width=\"120\" height=\"154\" border=\"0\" hspace=\"0\" vspace=\"0\" style=\"width:120px;height:154px;\" \/><\/a>的语言，<\/span><span style=\"font-size:18px;\">提出了与人的生命息息相关的一个个命题。加缪曾在诺贝尔文学奖获奖演说中说他不信神，但他仍然崇拜一个圣徒，仍<span style=\"font-size:18px;\">然要跪在一个圣徒面前祈祷－这个圣徒就是加缪笔下的西西弗。<\/span><\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\"> 1957年，加缪由于“他重要的文学作品——它们透过明敏与挚忱阐明了我们这个时代人类良心的种种问题”荣获诺贝尔文学奖。<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\"> 本书由北京大学外国哲学研究所杜小真教授翻<\/span><span style=\"font-size:18px;\">译，中国社会科学院外国文学所柳鸣九教师作序介绍。杜小真老师长期从事法国哲学研究，对法国思想和文化有着通透的理解。<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">《西西弗的神话》 题　　记 《西西弗的神话》 编辑推荐<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal csignal\"> ||<\/span><span style=\"font-size:18px;\">编辑推荐<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">阿尔贝·加缪，法国著名的小说家，戏剧家和理论家，存在主义主要代表人物之一。本书集合了他的文集，从创意、到写作、定稿，是在1936年到1941年的<\/span><span style=\"font-size:18px;\">几年间断续写成的，但它仍具有哲理上内在的完整性与推理上的系统性，它从荒诞感的萌生到荒诞概念的界定出发，进而论述面对荒诞的态度与化解荒诞的方法并延伸到文学创作与荒诞的关系，这一系列论述构成了20世纪西方文学中最具有规模、最具有体系的荒诞哲理。加缪是向那些觉得世界是荒谬的人说话，是向那些觉得人类历史和存在没有任何意义或目的但仍然在这个荒谬世界中从事活动的人说话。<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">如果说陀思妥耶夫斯基的《地下室手记》可以称作是存在主义最好的序曲的话，那么加缪的《西西弗的神话》也就是存在主义的一篇最出色的结尾。<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">——[美]W.考夫曼<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">加缪向那一代的学生传播了一个简明扼要的思想：人与世界之间的关系是荒谬的，异化是人类生存条件的组成部分，必须抗拒死亡。<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">——[美]科特金<\/span><\/p><p>16:10:09<\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">二十多年来，加缪的作品始终与追求正义紧密相连。<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">——[法]马尔罗<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">他在本世纪顶住了历史潮流，独自继承着源远流长的警世文学。他怀着顽强、严格、纯洁、肃穆、热情的人道主义，向当今时代的种种粗俗丑陋发起胜负未卜的宣战。但是反过来，他以自己始终如一的拒绝，在我们的时代，再次重申反对摈弃道德的马基雅弗利主义，反对趋炎附势的现实主义，证实道德的存在。<\/span><\/p><p><br \/><\/p><p><span style=\"color:#00b0f0;font-size:18px;\" class=\"psignal\"> |<\/span><span style=\"font-size:18px;\">——[法]萨特<\/span><\/p><p><br \/><\/p><p>加缪是向那些觉得世界是荒谬的人说话，是向那些觉得人类历史和存在没有任何固定意义或目的，但仍然在这个荒谬世界中从事活动<\/p><p><br \/><\/p><p>.<\/p><p style=\"text-align:center;\"><span class=\"psignal csignal\" style=\"color:#00b0f0;\"> ||<\/span><span style=\"color:#f79646;font-size:36px;\"><span style=\"font-size:18px;\"><西西弗的神话：加缪荒谬与反抗论集><!--西西弗的神话：加缪荒谬与反抗论集--><\/span><\/span><\/p><p><span class=\"psignal csignal\" style=\"color:#00b0f0;font-size:18px;\"> ||<\/span><span style=\"font-size:18px;\">内容提要<\/span><\/p><p><br \/><\/p><p><span class=\"psignal csignal\" style=\"color:#00b0f0;font-size:18px;\"> ||<\/span><span style=\"font-size:18px;\">《西西弗的神话》<\/span><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">    被人称作是存在主<a href=\"http:\/\/127.0.0.1:3000\/editor\/514ae74d957f41df63000004#largeImg\" class=\"img\" data-toggle=\"modal\" role=\"button\"><img src=\"\/javascripts\/ueditor\/..\/..\/.\/images\/figure\/apache_ld1364114920863.JPG\" title=\"apache_ld1364114920863.JPG\" width=\"100\" height=\"81\" border=\"0\" hspace=\"0\" vspace=\"0\" style=\"width:100px;height:81px;\" \/><\/a>义的封篇之作，它以优美如诗<a href=\"http:\/\/127.0.0.1:3000\/editor\/514ae74d957f41df63000004#largeImg\" class=\"img\" data-toggle=\"modal\" role=\"button\"><img src=\"\/javascripts\/ueditor\/..\/..\/.\/images\/figure\/大话西游 - 谍报封面1364115356807.png\" title=\"大话西游 - 谍报封面1364115356807.png\" width=\"120\" height=\"154\" border=\"0\" hspace=\"0\" vspace=\"0\" style=\"width:120px;height:154px;\" \/><\/a>的语言，<\/span><span style=\"font-size:18px;\">提出了与人的生命息息相关的一个个命题。加缪曾在诺贝尔文学奖获奖演说中说他不信神，但他仍然崇拜一个圣徒，仍然要跪在一个圣徒面前祈祷－这个圣徒就是加缪笔下的西西弗。<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\"> 1957年，加缪由于“他重要的文学作品——它们透过明敏与挚忱阐明了我们这个时代人类良心的种种问题”荣获诺贝尔文学奖。<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\"> 本书由北京大学外国哲学研究所杜小真教授翻<\/span><span style=\"font-size:18px;\">译，中国社会科学院外国文学所柳鸣九教师作序介绍。杜小真老师长期从事法国哲学研究，对法国思想和文化有着通透的理解。<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">《西西弗的神话》 题　　记 《西西弗的神话》 编辑推荐<\/span><\/p><p><br \/><\/p><p><span class=\"psignal csignal\" style=\"color:#00b0f0;font-size:18px;\"> ||<\/span><span style=\"font-size:18px;\">编辑推荐<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">阿尔贝·加缪，法国著名的小说家，戏剧家和理论家，存在主义主要代表人物之一。本书集合了他的文集，从创意、到写作、定稿，是在1936年到1941年的<\/span><span style=\"font-size:18px;\">几年间断续写成的，但它仍具有哲理上内在的完整性与推理上的系统性，它从荒诞感的萌生到荒诞概念的界定出发，进而论述面对荒诞的态度与化解荒诞的方法并延伸到文学创作与荒诞的关系，这一系列论述构成了20世纪西方文学中最具有规模、最具有体系的荒诞哲理。加缪是向那些觉得世界是荒谬的人说话，是向那些觉得人类历史和存在没有任何意义或目的但仍然在这个荒谬世界中从事活动的人说话。<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">如果说陀思妥耶夫斯基的《地下室手记》可以称作是存在主义最好的序曲的话，那么加缪的《西西弗的神话》也就是存在主义的一篇最出色的结尾。<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">——[美]W.考夫曼<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">加缪向那一代的学生传播了一个简明扼要的思想：人与世界之间的关系是荒谬的，异化是人类生存条件的组成部分，必须抗拒死亡。<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">——[美]科特金<\/span><\/p><p>16:10:09<\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">二十多年来，加缪的作品始终与追求正义紧密相连。<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">——[法]马尔罗<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">他在本世纪顶住了历史潮流，独自继承着源远流长的警世文学。他怀着顽强、严格、纯洁、肃穆、热情的人道主义，向当今时代的种种粗俗丑陋发起胜负未卜的宣战。但是反过来，他以自己始终如一的拒绝，在我们的时代，再次重申反对摈弃道德的马基雅弗利主义，反对趋炎附势的现实主义，证实道德的存在。<\/span><\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;font-size:18px;\"> |<\/span><span style=\"font-size:18px;\">——[法]萨特<\/span><\/p><p><br \/><\/p><p>加缪是向那些觉得世界是荒谬的人说话，是向那些觉得人类历史和存在没有任何固定意义或目的，但仍然在这个荒谬世界中从事活动<\/p><p><br \/><\/p><p>.<\/p><p><br \/><\/p><p>.<br \/><\/p>",
  "cover": "\/images\/figure\/cover1.png",
  "descption": "加缪",
  "index": "undefined",
  "note": [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    [
      {
        "content": "作者介绍",
        "pcontent": "null",
        "comment": [
          
        ],
        "time": 1369812649043,
        "pic": "",
        "user": {
          "name": "wolf",
          "avatar": "wolf.jpg"
        }
      }
    ]
  ],
  "reader": [
    "test",
    "wolf"
  ],
  "salons": [
    
  ],
  "status": NumberInt(1),
  "time": ISODate("2013-03-21T10:56:13.245Z"),
  "uploader": "wolf"
});
db.getCollection("book").insert({
  "_id": ObjectId("51a56a5cf4d9f3a248000001"),
  "bookName": "高级编程技术",
  "bookType": "pdf",
  "cata": "计算机",
  "content": "<h1 label=\"标题居中\" style=\"font-size:32px;border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;\"><span class=\"psignal csignal\" style=\"color:#00b0f0;\"> ||<\/span>《高级编程技术》讲义\r\n<\/h1><p><br \/><\/p><p style=\"text-align:center;\"><span style=\"font-size:24px;\"><span class=\"psignal csignal\" style=\"color:#00b0f0;\"> ||<\/span> 作者：王洪泊（课程）系统设计说明书<\/span><\/p><p><span class=\"psignal csignal\" style=\"color:#00b0f0;\"> ||<\/span>样本系统需求分析\r\n<\/p><p><span class=\"psignal\" style=\"color:#00b0f0;\"> |<\/span>  功能需求\r\n<\/p><p><span class=\"psignal\" style=\"color:#00b0f0;\"> |<\/span>本管理系统需要满足监理公司在监理工程时，提供一个方便快捷的工程电子合同表格的管理平台。并提供了与之配套的人员管理，角色管理，和相关的权限管理。在后期还将完善统计功能。按照功能需求应该达到以下几点：实现监理公司以及与其有业务关系的建设单位，设计单位和各个施工单位人员的增删查改工作；实现监理公司按公司分类显示相关工程信息工作；实现监理公司所有业务合同信息的增删查改工作；实现监理公司以及与其有业务关系的建设单位，设计单位和各个施工单位的所有业务合同按人员职位的权限显示工作；完成监理公司以及与其有业务关系的建设单位，设计单位和各个施工单位的所有业务合同内容按人员职位的权限修改工作；实现监理公司工程新建和工程人员配置工作；实现监理公司以及与其有业务关系的建设单位，设计单位和各个施工单位人员的个人信息显示工作。实现监理公司管理者信息发布工作。实现监理公司以及与其有业务关系的建设单位，设计单位和各个施工单位人员的信息阅读与职位申请工作。实现监理公司对个公司人员属性统计工作。\r\n<\/p><p><br \/><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;\"> |<\/span>可行性分析\r\n<\/p><p><span class=\"psignal\" style=\"color:#00b0f0;\"> |<\/span>软件开发者面向企业开发出基于 Web 的管理信息系统对企业各方面信息进行全面的管理，在一定程度上满足了企业的现代化管理要求，具体体现在以下几个方面：\r\n<\/p><p><span style=\"color:#00b0f0;\" class=\"psignal\"> |   <\/span><strong>经济性<\/strong><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;\"> |       <\/span>当前许多中小型企业普遍采用的都是使用人工管理方式（即纸质材料以及笔类批复等）来管理企业的各类信息，这样的管理方式既管理困难，又浪费员工的时间和成本，并且容易出现对企业信息的疏漏，不利于企业发展的情况。具体到监理公司的业务特点，对于监理公司来说业务最重要的就是业务合同的各部门审核与批复，即如何实现合同的流程控制以及统计，在以往的工作过程中基本上采取就是人工管理方式，既费时又低效。因此开发出此 Web系统，通过借鉴大型企业的先进管理方式，提高企业的工作效率，降低企业的运营成本。\r\n<\/p><p><span style=\"color:#00b0f0;\" class=\"psignal\"> |   <\/span><strong>技术性<\/strong><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;\"> |       <\/span>正如上面所介绍的，在以往的企业业务合同流程以及权限管理过程中，采取的是传统的人工管理模式，容易被人钻漏洞，给公司造成一定的损失；而采取了 Web 管理系统之后，可以从技术层次杜绝这种现象，使公司各个等级的人员都必须按照规定的合同流程操作，消除了越级操作的可能性。\r\n<\/p><p><span style=\"color:#00b0f0;\" class=\"psignal\"> |   <\/span><strong>交互性<\/strong><\/p><p><span class=\"psignal\" style=\"color:#00b0f0;\"> |     <\/span>通过 Web 管理系统可以同时对企业日常办公进行管理,实现了企业员工之间的消息发送与接受功能,大大方便了企业内部人员的沟通,同时系统提供的公告栏管理,方便各级员工及时了解公司的动态以及相关信息,与系统的其他模块相互协助促进企业的管理进入科学系统的管理轨道。\r\n<\/p><p><br \/><\/p><p><br \/><\/p><p><br \/><\/p><h1 label=\"标题居中\" style=\"font-size:32px;border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;\"><span class=\"psignal csignal\" style=\"color:#00b0f0;\"> ||<\/span>实例分析:网上书店管理系统描述\r\n<\/h1><h2><p><span style=\"color:#00b0f0;\" class=\"psignal\"> |<\/span>系统功能描述<\/p><\/h2><p>网上书店的工作流程分析:网上书店总共分四大部分,包括:用户管理,图书管理,销售管理,仓库管理,配送管理,售后管理。最重要的部分是销售管理他五个部分是以销售为中心的。用户管理包括已注册用户和未注册用户(未注册的先免费注册)。销售管理包括用户浏览图书列表,\r\n<\/p><p>选择自己需要的图书,该图书要有详细介绍,包括作者,价格,内容简介,出版日期,出版社信息,ISBN 号等(这是图书管理所包括的内容),确认无误然后提交订单。顾客提交的订单直接送到进货部门处理,经核实信息准确有效后,交给仓库管理员配货,进货,打包,然后通知配送部门。在配送过中顾客可以实时看到自己的订单的处理情况,比如正在配货中或正在配送途中,预计送达时间。在进货部门处理过程中要注意,要将订单发给离货地最近的仓库,这样配送起来可以节约运输成本。配送部门将书送到顾客面前当面验货,满意后付款,配送部门要将书款交到财务并汇报订单已经完成。售后部门负责顾客退换货及投诉建议。\r\n<\/p><h2>  <p><span style=\"color:#00b0f0;\" class=\"psignal\"> |<\/span>系统流程图<\/p><\/h2><p><br \/><\/p><p style=\"text-align:center;\"><span class=\"psignal\" style=\"color:#00b0f0;\"> | <\/span> 如图：所示  <a href=\"#largeImg\" class=\"img\" data-toggle=\"modal\" role=\"button\"> <img src=\"\/javascripts\/ueditor\/..\/..\/.\/images\/figure\/2013-05-29 14:56:00的屏幕截图1369810596139.png\" title=\"2013-05-29 14:56:00的屏幕截图1369810596139.png\" \/><\/a><\/p>\r\n",
  "cover": "\/images\/figure\/cover.jpg",
  "descption": "王洪泊,  工学博士,北京科技大学计算机与通信工程学院计算机系副\n教授,北京市人工智能学会理事、ACM 会员;主要研究领域为物联网\n射频识别技术、\n物联网环境下的资源协调智能调度,\n迁移计算与分布式\n人工智能、\n现代软件工程与系统集成;\n在国内外重要学术刊物及国际重\n要学术会议上发表论文 30 多篇,\n获省科技进步二等奖 1 项,\n专著 6 部,\n国家授权发明专利 1 项、计算机软件著作权 6 项。 \n\n",
  "note": {
    "5": [
      {
        "content": "系统管理时一个方便快捷的平台非常重要",
        "pcontent": "<canvas class=\"pcanvas\" width=\"600\" height=\"220\"><\/canvas><span class=\"psignal\" style=\"color:#00b0f0;\">1<\/span>本管理系统需要满足监理公司在监理工程时，提供一个方便快捷的工程电子合同表格的管理平台。并提供了与之配套的人员管理，角色管理，和相关的权限管理。在后期还将完善统计功能。按照功能需求应该达到以下几点：实现监理公司以及与其有业务关系的建设单位，设计单位和各个施工单位人员的增删查改工作；实现监理公司按公司分类显示相关工程信息工作；实现监理公司所有业务合同信息的增删查改工作；实现监理公司以及与其有业务关系的建设单位，设计单位和各个施工单位的所有业务合同按人员职位的权限显示工作；完成监理公司以及与其有业务关系的建设单位，设计单位和各个施工单位的所有业务合同内容按人员职位的权限修改工作；实现监理公司工程新建和工程人员配置工作；实现监理公司以及与其有业务关系的建设单位，设计单位和各个施工单位人员的个人信息显示工作。实现监理公司管理者信息发布工作。实现监理公司以及与其有业务关系的建设单位，设计单位和各个施工单位人员的信息阅读与职位申请工作。实现监理公司对个公司人员属性统计工作。\n<img src=\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAADcCAYAAACs2N87AAAgAElEQVR4Xu2dT4wnx1XHu2fiePHa2CR27AORN0jIvmFziuNdYiIkcuBgceGIuAAHJHKDKFLCMYgrhyAuOXHJAXHkgtYksBxQWCQkHImQNQrCAjs2YdZZ\/5lf8br71zP96+nq96q6+jf1q\/mMNDuzv64\/733eq6pvV\/d01xVfEIAABCAAAQhAAAJJCdRJW6MxCEAAAhCAAAQgAIEKgUUSQAACEIAABCAAgcQEEFiJgdIcBCAAAQhAAAIQQGCRAxCAAAQgAAEIQCAxAQRWYqA0BwEIQAACEIAABBBY5AAEIAABCEAAAhBITACBlRgozUEAAhCAAAQgAAEEFjkAAQhAAAIQgAAEEhNAYCUGSnMQgAAEIAABCEAAgUUOQAACEIAABCAAgcQEEFiJgdIcBCAAAQhAAAIQQGCRAxCAAAQgAAEIQCAxAQRWYqA0BwEIQAACEIAABBBY5AAEIAABCEAAAhBITACBlRgozUEAAhCAAAQgAAEEFjkAAQhAAAIQgAAEEhNAYCUGSnMQgAAEIAABCEAAgUUOQAACEIAABCAAgcQEEFiJgdIcBCAAAQhAAAIQQGCRAxCAAAQgAAEIQCAxAQRWYqA0BwEIQAACEIAABBBY5AAEIAABCEAAAhBITACBlRgozUEAAhCAAAQgAAEEFjkAAQhAAAIQgAAEEhNAYCUGSnMQgAAEIAABCEAAgUUOQAACEIAABCAAgcQEEFiJgdIcBCAAAQhAAAIQQGCRAxCAAAQgAAEIQCAxAQRWYqA0BwEIQAACEIAABBBY5AAEIAABCEAAAhBITACBlRgozUEAAhCAAAQgAAEEFjkAAQhAAAIQgAAEEhNAYCUGSnMQgAAEIAABCEAAgUUOQAACEIAABCAAgcQEEFiJgdIcBCAAAQhAAAIQQGCRAxCAAAQgAAEIQCAxAQRWYqA0BwEIQAACEIAABBBY5AAEIAABCEAAAhBITACBlRgozUEAAhCAAAQgAAEEFjkAAQhAAAIQgAAEEhNAYCUGSnMQgAAEIAABCEAAgUUOQAACEIAABCAAgcQEEFiJgdIcBCAAAQhAAAIQQGCRAxCAAAQgAAEIQCAxAQRWYqA0BwEIQAACEIAABBBY5AAEIAABCEAAAhBITACBlRhoTs25v3\/s1cq5XxCbnpfvp6u6erJy8lsT9eZnVb0l329W7vSNqj5+Vn5\/Zmv\/HSnwrfrl+3dz8gdbIAABCEAAAodCAIF1KJEKsNN9+9E\/EhX1+1XtnpiuNgx7p7Q61TX15e6KGLtXHVUitmr53ryB8AoIBkUhAAEIQOBKEkBgFRZ2953Hviku\/Wa3RdVvVQ1\/Dh3uy8RA2PxA2n9fuvgvqS27YE52weoHhpaekzL9Ttmb8vv3DHW0Imu02fd5aG13u5Xdl8Y3pOw4Bkvq9m3FtBFS59DKjhmnzL1c2wrJBVs83em1qj56WqbAZ2ROuiYd3KkeOfmT+sXqXW0i4TgEUhJAYKWkeclttTtXdf21dcWVtuPlgVA7112WrNPl3Bpt9uYfXNshcQkpO47nkrp9WzFthNQ5tLIjxilzL9e2zly2xMpSxpBbzr0pO\/HfkJPC2\/XnTl675Oma7q8AgXSL3RWAlbuLsnvVnKE9rguskAlr6HXsjpeIq5TCqjVpjTbPJukV7F2z7ZC4hJSdEldLp4yY\/kPqHFrZC4wT5l7KMZKyraEY0vJppXi6ZjfL3W6\/P3b6V\/VLD+7lPr9j3+ER0LL78Dy6oha3N7Rvqr\/UxVUrTpqdpEBSMXXWEkJrTPZrCqA12w6JS0hZxNU5gRBuIWURV\/OTUAjLkLJTud1ePrwn0+K\/ys+52xYslyktZXyuz9W1tBtTplkMhrcVdP\/v\/yiq+2OoO\/XLJ18JXDSufPHQVfbKA8sVwPqXB2MnsDXE0BptrimC1mw7JC4hZRFYCKzLztuQfA0pe+bX9hfLMmjZ9beU8a0gc3Ut7caUGdfp\/9\/beP7n5ttPXHt59eWTL+S6DuZmlyWzcrMZeyYIrCuwYiavxsgUQmg06GvZfnNO8naF1G3bXqNhQbFm24yIwyeQMj+m2mo+i\/maGvq7n8VODtPWrNl2OyW13a4wecTAPbQ6Z4LrR\/XNk08emvWXYS+JdhnUV+hz3UuEsXNojMCaOoua2k2xzJOWs7rzWfd83rXU08pox61n0dZ2pvywJFpI+1abp\/rNsR+fTSGfW\/xKVWYJ\/9gxZMqh7rTEJfwDlrNuZQ5J3vaSNi2xTJX\/sWPaWk\/L896PXiYMyztElmFoILAMkA6liP0m934AWsO\/lsDynVSntstq\/7icpZ5WRjs+XDTn\/La2Expba\/++RcMaq5z78bEN+dwSn1RllrCcElqhMfTNiDEnVNbZdY22l7RpiWWqMRM7pq31tDz3zIvOvVbfOnnFGsGrWC7VyLqK7LLzeb3LhNGTiVRszmqnhJQv9ULPEK22xZaz1NPKaMetC6a1HevEmmKxDbHJ6meqhSnENm2RsbCy9JeqzBKWFl9ip7clokXrc422l7RpiWWqXI4d09Z6Wv5PiKxmdr91goaYSVvgjOC4O9duVKfHvy264LPbQ\/2rZPqHaPr+SiPV5023oW2de+GqV+U\/L2hT1f6Ox6aYdfJau5ylfa2Mdty6WFrbsU6qKRbaEJusfqZalEJs0xYYCytLf6nKLGFp8SV2hlgiWLQ+12h7SZuWWKbK5dgxba2n5f+EwGqv3W6+Xt+8\/2Utclf1eOzqVwSvVkxtHpJ39bkXZJPlFfn+7PbJv2PZtf3\/FC7fjkuqz\/sB0vwc92\/d7bGWm+trOKFP2eJLiZC+Yyd+60QXW85STyujHbcumNZ2rBNrLPNhvRCbrH6mWphCbNMWGQsrS3+pyixhafEldppfIlq0Ptdoe0mbllimyuXYMW2tp+X\/hMhyFZcJZ1K2lstKt+XpthspM96pGVeb2lWxPHOjaSd0R2at8tvnfbjPVJujp0SvXNeG8+7xucGkJad1QkvZh7XPmAkgdGIJLW8Re6ELjNUG39naXLZobWvHrb5Y27FOqktyxGpzTH5dRp0UY9gSn1RllvBPEXffeFgiWLQZeY22l7RpiWWqXI4d09Z6Wv4jsLTsHB+v5cbofotBjoXsNkyVtdb3ldv351Z7h9hSCiAtoUMGpnWgW8tZBmVIW5b2Qvy1xiRFOYufWhntuHWxtLazJu8Ui3OIH1Y2sfmjtR8yTi1+pSqj2R2yHFhssra3RLBofazR9pI2Y7nlWE\/L8wmBVTkuEc6k7EhgxQzYqaBYk0cLqHUiX9qO1V5t0Vpqh4V\/aB9WhjGLUwg3jZ0vSy19WMqE9D81kWhX0zUbtOOW2If4EFrW2n9MnhxKndCxFTv3WXLBUmZJzJbMC5chgs58FTCpHweBwOroavl\/cV6U52FpE6OWLEUf9wis0Mk5dqKxBNU6EWjJobWTakJbaodl0gztQ\/N9Lsc1LtrxJX1b8tDaf2w5Sz2tjHbcEnMLiyFra5\/UsS0uljy2ME9VxpozlvXLYpOlnTZHVxBAiKv5HNViY4mvtqZMnHRy\/5UGvlIEVlPfIlARWOektUS1TNTaYhrah7XPqXzRBqd2fEnfGgfL8dCFaGIiUceAxkA7brXR2k4IFwQWAiskr7Q1BYGlEYp7F2zsmLbW09aU0XHn3pFHNHxC9\/Vql5gRWNbAzC0O1oGrBde6SC9tZ6m9c8yW2mZZCFPYb2VtFQWh7Vn8DO07loulnlZGO271xdpO6Li19h8jvg+lToqxaYlPqjJLYrZkPGqLJeJKI4S40gmVVAKBtbM7YZkAtQUsxWSduo8lk6rGRDu+Rt9Nn82XtrsaW85STyujHR8uknO+WNvpc8bCZSxir2odH9uQzy3xSVXGmjOWJcpik6WdNu+2jaW+N2qttpfYG8stx3panvfx386zHTYey2AdFs0KtftXhKkXQ+viu7YosbZvsXeujLWf4UTpe7bW3JPOQ+uMF1RNmGj2WY8nzCe3eUNae1Pub70n92K+PpnjtTwOxFXPbLWXPHbEWK7TJvP1tLa14+dz1byN1nY6TWTzdwjrKtfx+R7yuYVfqjLWnLFM+BabLO20Zdxz8k83Xqr6Tfnne+aqasE12l7QZiy3HOvpef5k997H6i352cR1MC+6OzxQVE3eCwUQWME7WAis8yyyCNJhzlnKSxlXvSNh+Vv55ba8QPauXOu\/HZ7a1IAABCAAAQhcHgFFYHUS1nYpZuop45adkrV3faztx\/rZB8\/aT2z5uVhYbLfGUrPPenyc1D4bN82O1PvtmXDt7lTHp39Wv\/Tg3uUNCXqGAAQgAAEILCeAwDpjqO1MNQVLf1VOf01+eWJNtHAinzXvcxQhVf2LiKp3z7ahLxa2viFgXHNw6aLd4k546aLtau3258Dvs++0fbnTa1V9\/Kw4t72sVN2pjj76c4T0KuOMRiEAgUwIbAXW1MLaiwltd2TquFZH2wVZezdo3P7o\/869Jzt3\/yOC6l4rAob38ujXsRsddl4ntHyn46bvrbFe17eW6\/vaVF+UPh\/33zM+FJYhN2uGlG2MCS2\/zaNa7r5sq65xk23T7Mrtz00G++x7lb5mYurcu+L67fZS8LFcCv7cyWuZzIuYAQEIQGAxARFYj8oMOHdD9VQf3Z1w3VfM4uubdPf9eXu\/j1yeqv6hnehlkq\/qD+9epTNreRflj0SX\/Mz5peBebC4Rzr1Yslwi1sS2luNr\/ml460czPkIc0QwOOL7Pvtfoy3qiNRDXtZNLxs3l4upvhP236pfv3w0ARlEIQAAC2RAwXCL02OrcA3lJ9PsiUI6lxEcyGf5Yvv+jkr3\/CzXq6kk59uhWkJ20f6XQfB25T8lrpuVY\/XGZUD+Qz+WSjvu+\/P+nJv+qy7Szs3m7quVFzpX7tLTx8FYBfiBr5H35\/fTMDlf\/UH7\/R\/m8OYsefsVenmrasNS1lPElSEjdubLdsU11S\/z\/GOLKh3sN0WEd+\/vse42+IsSV\/0SvGaM\/kcNymdk1l5rlW04Kaicva68f6W4TlV1nVzfHurnF\/yUveW\/qydd5+anP+hbmjjVlmpfGPyU2fFx+\/0C+\/3tgg6+uYoPMrLWMTpON7ufE+Z\/ujG3m4Prfu183D8k82OxKf6qzrT32z3LkuxNotHll6fFxl1p7vujF1LPWsZZb4os+J3etN7c3NCd1T7f55Z+gx2fDw\/8342DYTtOuzPXNWn3WR38LxdCuO\/XLJ1\/xBYDPwwhECqzISzk7tilttPfoODl7bS7TyVlt1ewuuXenLiO4v7v+gkxHn5eU\/JKUu6HflD8FaYlPlrqWMr7ghdSdKzs8Nv6935Uc\/hzaE7pghmz6hLS9Y9PKu0trCA\/rAN1n32v0ZY2ptdyYW5+\/Vp6Ug8BVJjC85afh4LsK1RyT+aCubovQ+sJVJpbC9wiBFTshxi7WE2424uvI\/VDOQK9JLsizO+onbH\/tOCdgQgRBqC9LmIXUnSs7PjZ38hP7F6Ht4NwOXmt6hpbv211DFOxTvM3xWdu3tf20xtRabjze+gVCy7Gpk43xZ7FlQm0KOUk6y\/HtL6FzU0xfh9CnJVY+P3xx9+WQduuL1Zapk1otb6fEUD+3Dutqt\/bMnTQPx553HP5bffP\/fl6zluN+AoECK2ZCHHe+tA1fYodOQsOBuGbdJf6G1A0VV\/0i5RNaoSIylmeIj2sLg322f9UFVowICMmVqbK+k4y5XNf61I7HnHTE1llSb0ldCwNfvlvrWuLpm4N8cY+d+6y2TIkYX59abo7rWWSN5p9FZLm79c2TFy29UeYigT0LrJhJ1bLQWwfpVAqsXXft9i3CZmrwIrDmJ4R97iJdOAmRgO3rxvo1\/LTkvKWMZexbx7S2gE0JDM1G7XisaLG0a\/Xbuuzl3KdV0FhiaBU4vthZbblscTVcF8Zz\/dSa4Yt\/+\/k3ZSfrt6yZRLlzAgECK3YAxk6SFxadJtATsVti19p1124\/Rlz1EwcCC4HV5sIKYs6S95YysXOHZRGMLRNqU6ifsaJsSb0ldWP8s8xbGudZQTCo7BPWPqEV06+WS5qo08T\/uH6IhNH8nBKCU2tv+3YNuS3Hncq5X\/OHbc1N9NwQr4TiQARWkwS9ILAKL0sSrj05rN2+ZaKaG\/zawNcmGx\/jUL9Dy5\/5vYI42PF55fbncnQN4eONV2I\/58arJWeXjHFtsfOJCW2Ri7EpJq9j6iwRSEvqxtoa0qclnr6cuuriasilXz\/n8lwTrf243hkL7Q3x1SMnv16\/KPdG87VD4IAE1twNfWveQ7VEROxjAtImq7lBMx50c2dKIb6ElNXsv0wRsk+Rc2EBTyx69s1RywHteEpxbxFPljKhNoX4GCM8Q+1ZMpdN1Y3xL9RPBNb5X\/wtWedSCKzhXD1aK5zMlUfymKZ685+VO26eLTl+k4b2GIzQ4\/1jLBqjst1JQ2D5H1+uaHHL5GIpk2LSm+vHclYy9dcmIRNbisk3ltXaImjt9vctfLz5toKg02KqHQ9djH1i3SKeLGVCBY3Vv9B2U4y3Q+kzZB7SYjg+gQw9obTaMiyn9Rlqc8wWUdNHKoE1I7LOHj4+xcnyF4++vO5t7\/se+nJWR3bS3HfkwcS\/FENorToBAss3eYWatsakE9NmzOQ99tXSr6VMDiJrLo7anyzP2T8cHFquDCcCrezOArGtuNaN4Y3Iav2IPYUMcWZUdp99r9HXXEytY8NazjdHaYvYVD2tT+147Hxpade3EMWmZ859WkWNJYaa2NmZU5rxPh6LEZ9pfWq5OScCrdOKr40pIWhZ4zSfhrHonpe7nT+tBs+UU94iUzt52G\/9XdF6H0n4PpSGzh+22jzwfGh6dx+Z\/\/h5V9H3m9XyqhRRftaBGTsQtcTVuGv9asfn2l+77trt977N9aMda8WDfPeLoRaPbI+LA0MfEud1866+zWDW3Rk3PsbWz5WFpBbHNu7cobO+LfllKbMzD3r60uI+00+XXo0XI51qtc1abmqhtSy+1jKhc1mI3ZaxfJlz2VTfMf6F+onIir9M2M+HUw+QjhVYw7HiE1vj8TS0Q8vhfj0aj7W5\/JsSXr71bPycsXG7U\/nWth\/8ANba\/VP1RHXy6O9J7V+Rb3lgZ\/M4\/frTMhVuX79g6VybeFO0oQ1k7bgWVOtiHOPLvmzThJS2TTv0bZywc8JFGzxW\/1OVs7bjW4xDFxKriPItLJYFxFIm1G7fmAjhF7pYDsuP+58bgyE2WVjFlkFg7UYtJC4xc6dvjFrH3LicTxBY8iHElinxYu1bszlkvR33OTVerSyncl8TWGOxZM2XEJt8QmopJ++VG\/MDWGdVhexuvSIvQH6iOnUvyC7XDRFwN+TnC6LkHu9MjxUlfaKGtGEJjLbQayIrxJ5xsml192XbXD+aDeNEVbZjz\/ZbNeGm5Ylm13hRXtpfSP7F8PTVGX8+VS6mjE9YaTk5teDto47H3naXTiaVs\/BaLtGEiETfwjUnmrR5RzvuW5S1yd\/Sri\/u2ngLYabZGevf1EKvzc\/WfNDibBU6Pt9ixJjWZ6jN1rj05ca7Nr653To3av7Mxdea2yEia8l67Jtzx+wG+eDca\/Wtk1e0KMSOxKoVX7X7VXldzUttJ7Vcy3TtOwMfaJ2eHz+9VtXHItyqZ+Szbvesrn9Wfm4F3NQCYDG5Bfa\/0q68x7B6XX6+brbJ90JpSwOWupYyvr5C6s6V1dqZOq6+aFte5n0kL97duEe6fJAX7zp3JL91\/692XsQrL\/jevoS2u2Y+fEHu0Pv5crX7TLWpu1w5chLv+gcjdOcvGW+Wbbe9ftja1l5\/330JeVe5ezlu8\/Lx2v2kqyN+tX3I5xv3UPd7\/aH8Ln+WLG3V7rEJOwa2N23JS4C7cbxt\/8zv3c9qeamx187GjraR90Y8m88Gvp75N2I5eOF6d\/+BVmeEswmjMHfDlwtX3cuFw76aeyEeFSYdVyf+HLU2v73bzKbZTZeXxMt3LeU31TWJQcDJXSoBq50AaMc7J7svy\/zVU4ipE9vXIfRpiafPD20RHSewd\/diW9Bqy7Bc\/7s2WKbE0DCufX3tRFPrx3fckqM5C6xhDmi+DEWcT+ROfS6z4M2TZn2b\/dJ61+qvdjxq98y578sC8Kfdiyrvy4ui+YIABEoj0L7c3VW\/YT65s5wwdOtXc6K3PVmUk7JxvakyQ7jaiUvX9vMX+tECFFNnqq+NeyD9i4\/1DXG2uRrxsNY1xw+RwFgczv2\/S+pw4d\/vgE39HDKL3YXq21irvs9Gi8jqhbL7en3z\/pfnMiRbgTVntPv2w79WVQ81lypvSmLILpi7Uz1y\/xv1L1ZvHOJwwGYIQAAC+ybg7ly7UZ0e\/46sr78sfT9T1UfPnttgXXSt5awLubU9rVyuxzW7NGExzhKtPZ9gCG1nSpD4drFKF1jbXHaVepnwIAXWvici+oMABCBwFQhsb\/2Qk9f6FfG3+ZZLstoyEXIp01JWEw1WEaK1c1nHtX6t\/lnLpRRZ1kuDmqBeysBaX7NjiqFxFwuBdRWmRHyEAAQgsA6B810uw722IZcyu7LPi3a7IQJudM+tdfHUyuV6XLPLKpys5awCqxcjzc+pPyiYy7EpET7n51IG1vorCqyq0EuE60wltAoBCEAAAvsmsBVxr3a7Zu3OmQgu6wKqlcv1uGaXVTxZy4WIrKHQ0rJh7kZ77SZ8y85oqHCbstfCeljGsIPVPBLr1onmgLr3q9HlOAQgAAEIQCAZgfYyZXN5sq5+V34+vfwSpXZZ8rKOa\/0OxdPUrtIYudbe+LhW3td\/X2\/KJkubFsEzt\/NkrW8Vn+O+NIElxw2XBy0RSzZoaAgCEIAABCAQQqB9EPb963\/Q\/cWo\/BWkk8cBNY8EmnockHaJMtfjml09sFTlQv861tv\/6T2Jw02JzfPymJVPdsW0TR2rOPKVs9YPEaeBu1eVe0se0fCUJY81GpY2KAMBCEAAAhCAwBUl0Arh966\/Ks+q+0P5a9TnLmKw7Gz1O0lTQs1af9yzRZAFCCzn3pFLg5+whhmBZSVFOQhAAAIQgAAEZglM7zrWsts18aU\/wLp5Xps8kLg27Rjt9pBQXLX6zv11fev+F0PCj8AKoUVZCEAAAhCAAAT2SmD7zmR5ZZ+8tq86kgcNtw\/K\/fy0EZbdrmEZ371p0vrGvS1vCfmL6vp7X61frOTNHWFfCKwwXpSGAAQgAAEIQCADAtNvdWjuDTvefWXf7k7ZsdzLd9qa397P12xONW84cE\/I\/zdyT9mP24eXX7\/\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\/w+I3U6RVKA4mQAAAABJRU5ErkJggg==\" style=\"position: absolute; left: 5px; top: -15px; z-index: -1;\">",
        "comment": [
          
        ],
        "time": 1370413446145,
        "pic": "",
        "user": {
          "name": "wolf",
          "avatar": "wolf.jpg"
        }
      }
    ],
    "13": [
      {
        "content": "web管理系统应用非常广泛",
        "pcontent": "<canvas class=\"pcanvas\" width=\"600\" height=\"80\"><\/canvas><span class=\"psignal\" style=\"color:#00b0f0;\"> |     <\/span>通过 Web 管理系统可以同时对企业日常办公进行管理,实现了企业员工之间的消息发送与接受功能,大大方便了企业内部人员的沟通,同时系统提供的公告栏管理,方便各级员工及时了解公司的动态以及相关信息,与系统的其他模块相互协助促进企业的管理进入科学系统的管理轨道。\n<img src=\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABQCAYAAADFqguYAAAUyklEQVR4Xu1dXY5cRxWualsk0niIw5PhxckOPI+xYyneADgrIDsgrABnBfwsAJwFAGEFcZSEVzuKkPISaUxAmBewNWMY4aQv5\/51366uunXq1I+7qz9L9rjnnp86X5069d1Tt7u1wh8gAASAABAAAkAACACBpAjopNZgDAgAASAABIAAEAACQECBYCEJgAAQAAJAAAgAASCQGAEQrMSAwhwQAAJAAAgAASAABECwkANAAAgAASAABIAAEEiMAAhWYkBhDggAASAABIAAEAACIFjIASAABIAAEAACQAAIJEYABCsxoDAHBIAAEAACQAAIAAEQLOQAEAACQAAIAAEgAAQSIwCClRhQmAMCQAAIAAEgAASAAAgWcgAIAAEgAASAABAAAokRAMFKDCjMAQEgAASAABAAAkAABAs5AASAABAAAkAACACBxAiAYCUGFOaAABAAAkAACAABIKCbz658TN9I+A+lmgul9OMekua6apqrSi+uDhA92bzOAY5sKP0qSV7j25DocMYyxBQ8Hq5trlzO+MYx5PCR0maMLYnunM7MtaZ5Q2n9yiR\/l7QG6KVeDEgPr9UP6HeX6dJR93utnpPct\/Sfr+jna\/TzmXUNbNtv15hbvl2TvvxtbbY2xnXbqK9pPF\/qW+e\/4WYo5IAAEAACQCANAkSwjttdoyVVw89ulxB2tiQ2JDrc4HPa3qUx5Igzpc0YWxLdOZ3Za5NJbZfAZEl034s+vu6I1vB6XCrjzxD7vnXHid0c4zQE0l8P9Vyp5RdqoX6nb\/7nt9zshRwQAAJAAAjIEGg7WHQnHkOqpptECDEbN48QHW6QOW3v0hhyxJnSZowtie6czuy1YVJXJMnx2pz76X1IiH3fmuHEPhIr817IpTslYp3\/\/xFH\/Df957+q0UMN2OCXYyfuX0bnbuhmdzXD06EWdg\/nunX2zh913xnjCe4amvPN6CKuVEJku\/nwdCh91111aYf1zPnQ6ju1pDzV+tIQjf3kxDaP3YmLfkp6mycmDWX5Zif6SX86M8rS\/5U+I\/yP6Wer3\/vc1jM72Fw5e6d7u5S41tt857yz03XMzXUq6bjTOlr8Senmqb55\/gl3p4OcG4GBYMWQHM5msFWohmof49dZUDLa5qaSBBOu7VEuh4+UNmNsSXQPnVzZ4nd13MwO3Pi6Iyltwd5gWusXrI7aTCc8VWfRXAPduB1dd1ssnDhCfEhku43Rc2rgu+6rgXO42HRL+NvqCjNPTqzz6MpTy+\/NG4xRZOMmydBzrgOPHHfdudabr3Mu1TPX+cye06gzKgW\/V3r5a33r+aPQ3QnyPQKTI0IJJKk3QskYpjqS8cT6NPVLjCGHj5Q2Y2xJdEGuhuU87BauzcSV667OnUkc5m6IxHMwc0MU2qXbqAXDC26XMWYdh+asT9533UesQm9cS\/gz55Lr05YDzrywzfnkd1w9qRx33fk65eZ1kwxuYWnEzSGTQfvefXV09nN9otoOH\/4EIBBBsLgLpBQBkownACmWaIkx5PCR0maMLYmueGN3FCVXcTOLXPt61nfgBs+J3brZGASFW+R9RRvkivcsKmfeQmpgqL2QebIVsRL+QK7WyO8duRqHfkrdrHfRzWIRgZVQJMGS3CmF6nADagtFLtu7NIYccaa0GWNLojunM3uNJtU8HrC9No\/TzM1y7mjK9nyUU56Rv9MWv43ggVytjzfRufJXLZCrHiNvB1d4M2bOwN6Sqz6QhjpYi+UdkCz\/ylrdvq7fRchX6u\/cQ8mMRIc7ppy2d2kMOeJMaTPGlkT3kMnVSLDGdQhyBXLFrVU2cs7VDSFl6FxV0LkyE+OUjgtPcFzIWy\/CDlbqzZA3WLeUZDyxPk39EmPI4SOlzRhbEt1DJlhm7Ganzfd6zF+zK7b6PeMmSoz\/jO2o8RhdSZOE+tZ8SA6GyHLGEWovZJ5scZfwZ+u4cm7MbTngzAvbnBtdKdv7H7bGZrHTt21knW5X5zvUnmuduuzMddx9+c++\/qF+++w9tvQBC4JgJZt8acEKGUAOHyltxtiS6Io3eGHRnM5VyPGjb4PlxD63WfnIFLfYh2zaYuxBrraWPGf+XxZJ4ub81g2nucYYhN1GaFy\/48hySZlUjrvupCRJqueKJ2Sv8cheevGmfuviNKHFKk0JCJakGEh0uHjntL1LY8gRZ0qbMbYkuuINvgJyZRI2bqH33T2DYPFWfGi++uR9112j2mU9dK\/43S+TSPnW6UvtXo2DRReLUSxAsBgg+UWkhc5veS2Rw0dKmzG2JLqHTLDM2EGwtjczX9dwq+PC7LCE2uXIS\/KfY\/dlEjMQrKoJFj3wrm+fvR6ygx2iLAhWklmXFsgQ5zl8pLQZY0uiC4LVZw\/IFchViToSskZBrqomV+tG9x19+\/xBSPYdmiwIVpIZDyk+Uoc5fKS0GWNLoguCBYJlHq1M11ZITuWS5XSZQnxL4yutB4J1EARrod7VN88+ku5oh6AHgpVklqVFMsR5Dh8pbcbYkuiCYIFggWCFVJAhXwKOQqXEDATrIAhW03xAHax74Tl4OBogWEnmWkIQQh3n8JHSZowtiS4IFggWCFZoFZF9hiGnE7dBxuiF+UGv+HiGsI97cOX2TjzgPnJ1ECzPAhQQrNDFtkoU4Z0Tp4RINmiO3RCZEmPI4SOlzRhbEt1DJVnTuPEMFp7BKlGnQtYnOlgH0cHCEaF34YFgeSHiCoQUIK5NUy6Hj5Q2Y2xJdA+VYE1vckCwQLBC6olknYXeVINgHQTBaho85I4OVkjxiZGVFq4Qnzl8pLQZY0uiC4KFY0IcE4ZUkPFsJ\/yrzkCy3KTJd5MjPe6T6hX4oFGlntGnuV8Nz73D0hB2sEIXG44J06WVhIj4vKe0GWNLonuoJAvHhJtZbdtUQvIplyynVob4nka9y3roYlXexcIHjfq2VboeSbBaD5yHF6cEK1SHEUUn0habXLZ3aQw54kxpM8aWRHdOZ\/baMKm+b7g35958eNeVc0M6bj3s65Rn5K9pc9xgfXfQ5nXXnXHIjZCY2M48i+m68+YQCRAsbpXCg+6+T0qP7Rxx15vvgfXYcfAzIlhSL0\/0reePgvUOTCGCYElJjWQT5c5KTtu7NIYccaa0GWNLonuoJGsaN0gWnsXi1qixdofcHIeQbycxYL7RyUqW25t5S4A+WSdpN+xJ5bjrTkqWpHpZjwnRvWIuNSJYV5ZhXSjTcuoNkTlyp5hkPLE+U2ASOoYccaa0GWNLorsLJIvmcEEfrd43mvrdwNZ8sTW3pnV0rb2ZFNq03Xlp\/Wnr3hOSUqbtnq24RtJf8cXR2pzamO5F85bHuKZS\/vGM8U5j6X3ydpu17GT+VjO5iaZtNPb5sc+srXlhYjJvj2e3t2nkpCVvfL7G622urXHm5OdahouvbyyuvG71lsK1wMsQMwdsjC9k1e2wrDO0x+ro7IY+UU93ePA7M7SBYHWrMCJZUm+IsfhIxhPr09QvMYYcPlLajLEl0c1Nssh+u0y2TuamLCpmHdlycIwpdo2Wsh0z3tp0JfFwdErJlPLT5ibL1ySJV0f7I9V17GGTy9bjete6cupZxtCNP\/L3U\/0pd27j5HbJuHI9657\/Y43nmdLLd3A0yOcKkyNCToL7DEtsSHR841glqGfxce3EyOWML2ecKccdY0uiO6cze219t2\/WNesNiIQEcnNp32zHjLc2XUk8HJ1SMqX8TInV3I2JrV3oG6Or4SnWGxauSUycfpjyU30byeLWC46cj1S5bLTjar4hTvZjkCsOzmsZ3Xx69IJefkM3EF8qvXjYXdLNdXpNb8HU49swnxC4F6rRj9nmOxv6VZqYa4NOb6Nr4epX6N9r5Oc18nGZfF3pZfSQYU2fCbqh48tFe3ND\/7Sv9Tm9+JbsPtsah2nLlNXNj0jne6RLPjvbZEO\/oJuDv7Njcgn6fI96W3KK4lH2eExfL9NHD9h6nnTAuL1xxMwxYxx2zC+rJcWj27zTx0PuDTnIzQZfoebascntm+2Y8damK4mHo1NKppSfNu9ZvoYFwn1zSWfXosPxF0uWxrXMtbMP5GqIqWn+qhbNT0Cwwuq6lNIGeWk+P7qhmsXPKO\/v9qRqxTgs\/kM6Fj5Z3\/WgMAzhnLZXC7VAB65EHCbO++6TszFIc2vfbMeMtzZdSTwcnVIypfxwyI6LKPnGCHK1XXkSbfMNPXe1WN4ByeLX9kTI2x02D9VV9fz4l3T1Pf\/dim\/hTH34ZH3X+QBtS+a0bRKr1M\/zhGAYg5FLtwR2LjKXCsucMeyb7Zjx1qYriYejU0qmlB+Qq80O264eCzrr\/yk95H6Ch9x5+2M2gjV0rf5Iw3gD5Io3Gb0Up9CF2LPJlvCRm+hwMMgRZ2szFVmzYbRPtmOwqE1XEg9Hp5RMKT9jjfPlue1tfb4xut4KKNajwXI\/GmLsuHHkp+PkPpgulePUyWAZfEwDE7IsBKsjV8vFx5Sb9AyXb5PzXQ\/puoTYYiK0EstpG52r0Nnwy+eYL1+h9o\/KLbFvtmPGW5uuJB6OTimZUn5ArjY\/q01Kmrh6MfXIo3vpxZv6rYvTjB6qMJ2cYA3Hgu3D8uhcBaVIDkJQaxfJB2wuLDkbkW9sruv7ZjtmvLXpSuLh6JSSKeUHBKsagqUUuliMUp+eYH12fJ\/8\/rT37Vu4vutm92r2rbx7enQz7V752uaMGZ0VCcE71lfJuGxEMgeWOfHbN9sx461NVxIPR6eUTCk\/nD2hk6G\/Wx+H4KnvOB7c\/rysVDXcYoceeNe3z17P6KEK00kJ1vDcVf9RDyBXAQnCKXAB5qyiJXyUIjpzWOSKM5ddzlqJmfsc446xWZuuJB6OTimZUn64eQ5y1ZNL7jGgSy6mZjB1m+aOvn3+gCl9kGJpCRa6V8Ik4hQ5oemVWgkfIFiyWco5Nzlsx9isTVcSD0enlEwpPyBYFR0P9mVuod7VN88+ktW8w9BKTbDa7ycaPufKt3B916cT4JP1XY+ZzJy2x3HV4gMES5ZpOec\/h+0Ym7XpSuLh6JSSKeUHBKs6gtU0H1AH656s5h2GVjKC1Xx65R169\/rHPWy+Reu7DnKVNv1C8E7luTafOePZN9sx461NVxIPR6eUTCk\/nH2hk6G\/eP5qT44IQbA822U6gvXn47v0NTjt516BYAVxFE6BCzJoES7ho+buFSenY+Yo5\/zksB1jszZdSTwcnVIypfxw1xAI1t48g4UjQm\/RT0ewPr1yjzpYvwDB8mJuCHAKXKjN2smOC4+cWML2GvUYLGrTlcTD0SklU8oPCFaFR4R4yL1YBwsES8iCOAVOaHqlVsLHIZC6nDjum+2Y8damK4mHo1NKppQfkKyKSNYz\/fYZfZA4\/swhkK6DhSNCYaZxipvQNAhWLHAFu4058yCH7RibtelK4uHolJIp5QcEqyKChQ8aZewu6QgWHnJnwG0T4RQ3oWkQrFjgQLCcCMbkbW26kng4OqVkSvkBwaqGYOnlib71\/FHiAluduWQEq1s6nx3jYxpEKcIpcCLDE6USPnbhmDAWJ59+Thz3zXbMeGvTlcTD0SklU8oPSFYFJAvdK982MVxPTbDuk118TQ4T\/LUYp7gFGy3YfXGNrURcpUldG1P7J9dX8eyT7RgsatOVxMPRKSVTys9IsHx5PiyzjY9s8I3RpsPx59RzbJOx8lP98f+x9d2ln3SLb508VkdnN\/SJapsp+ONBICn6+Kocab6VICIlfJQmOza8S8TpK\/TSPOBsBrtmOwaL2nQl8XB0SsmU8sPNc5CsmNW+1k22zT9TevkOjgb5s5IM+dElHRPep\/+ji8Wfg0GyFDHI0XmZC7ZEXC+D2HE2o+AkmOSC7w5\/l2zHYFGbriQejk4pmVJ+QLL6o8JundPfne9kPSZydRfkKqzupidYD9VV9fy4ffjtev+J7nMbhe\/6NBifrO96GDCb0jltr6hpxqOnkj5sZCcXWXDNaYn54m4Q0rzLGUMO2zE2a9OVxMPRKSVTyg93DaGTJa0im3ri7f5DOhZ8H8eC4bMgRny2Z\/H50Q3VLB6QDH0voW+x+q6DZIVP6+zsFCByh0SypptEDiI5ro99sR0z3tp0JfFwdErJlPLDXUPTLs+4dfnGaNPh+HPqTYrbdPuMlbd1sMZPtU\/9s6sl89tKo85I5A\/q0ot7+q2L07R70OFYy0KwuvTtSVb7TdvoZAXlUwjhDDI8ES7h49BI1hhvh+1f6L7iMv18Qn8vlG5OaS38UzpbKz3dXFeNfpVW17Xhd0+oCF7Q7x7vpO2Y8damK4mHo1NKppSfbu9n5HnTvKEWtBYa1a8FTWutaeiGXtPD1471YdNZNhdqQVbm1pVLr\/VrjqG1F\/t7RV86138n44J+XqX305ypZvlDenmhls0RjbeTSPKz0c\/Jx7fk4yuyfaEu0579XfOUvsT5QXRNgQEfjY1DqOmPC39FVuiZLN+m7rs+HYtP1nc9Jq6ctjc26XaBZSPA\/vmIwcilWwK7EsSu+YLq31MqcI+o0LXvpumKEYpSjpyBTSAABIDAfiKQcQNfAzJ0s96n39yljf376ys2AuFr+dqIVre9WWIJsRU6gTltm0TLFV\/omG3yJeJwkZ6ccUX41M3fiDh9TSlFnSfqPi3o75L+f+X8EZ5DSJFzsAEEgAAQqB+BIgRrgxK1n\/h+SV+lNuQNbyuY0yoejftkfddj5jqnbW58MeMv6cMcZwnsfD41kalGfUkdqU\/wLpkUiQQbQAAIAAEgUJxgAXIgAASAABAAAkAACNSOAAhW7TOM+IAAEAACQAAIAIHiCIBgFYccDoEAEAACQAAIAIHaEQDBqn2GER8QAAJAAAgAASBQHAEQrOKQwyEQAAJAAAgAASBQOwIgWLXPMOIDAkAACAABIAAEiiMAglUccjgEAkAACAABIAAEakcABKv2GUZ8QAAIAAEgAASAQHEEQLCKQw6HQAAIAAEgAASAQO0IgGDVPsOIDwgAASAABIAAECiOAAhWccjhEAgAASAABIAAEKgdARCs2mcY8QEBIAAEgAAQAALFEQDBKg45HAIBIAAEgAAQAAK1IwCCVfsMIz4gAASAABAAAkCgOAIgWMUhh0MgAASAABAAAkCgdgT+D3owV188AZWwAAAAAElFTkSuQmCC\" style=\"position: absolute; left: 5px; top: -15px; z-index: -1;\">",
        "comment": [
          {
            "content": "Web管理系统应当使用在各行各业",
            "user": {
              "name": "test",
              "avatar": "default.png"
            },
            "time": 1369813751305
          },
          {
            "content": "是这样的",
            "user": {
              "name": "wolf",
              "avatar": "wolf.jpg"
            },
            "time": 1369813762935
          }
        ],
        "time": 1369813630344,
        "pic": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABQCAYAAADFqguYAAAUyklEQVR4Xu1dXY5cRxWualsk0niIw5PhxckOPI+xYyneADgrIDsgrABnBfwsAJwFAGEFcZSEVzuKkPISaUxAmBewNWMY4aQv5\/51366uunXq1I+7qz9L9rjnnp86X5069d1Tt7u1wh8gAASAABAAAkAACACBpAjopNZgDAgAASAABIAAEAACQECBYCEJgAAQAAJAAAgAASCQGAEQrMSAwhwQAAJAAAgAASAABECwkANAAAgAASAABIAAEEiMAAhWYkBhDggAASAABIAAEAACIFjIASAABIAAEAACQAAIJEYABCsxoDAHBIAAEAACQAAIAAEQLOQAEAACQAAIAAEgAAQSIwCClRhQmAMCQAAIAAEgAASAAAgWcgAIAAEgAASAABAAAokRAMFKDCjMAQEgAASAABAAAkAABAs5AASAABAAAkAACACBxAiAYCUGFOaAABAAAkAACAABIKCbz658TN9I+A+lmgul9OMekua6apqrSi+uDhA92bzOAY5sKP0qSV7j25DocMYyxBQ8Hq5trlzO+MYx5PCR0maMLYnunM7MtaZ5Q2n9yiR\/l7QG6KVeDEgPr9UP6HeX6dJR93utnpPct\/Sfr+jna\/TzmXUNbNtv15hbvl2TvvxtbbY2xnXbqK9pPF\/qW+e\/4WYo5IAAEAACQCANAkSwjttdoyVVw89ulxB2tiQ2JDrc4HPa3qUx5Igzpc0YWxLdOZ3Za5NJbZfAZEl034s+vu6I1vB6XCrjzxD7vnXHid0c4zQE0l8P9Vyp5RdqoX6nb\/7nt9zshRwQAAJAAAjIEGg7WHQnHkOqpptECDEbN48QHW6QOW3v0hhyxJnSZowtie6czuy1YVJXJMnx2pz76X1IiH3fmuHEPhIr817IpTslYp3\/\/xFH\/Df957+q0UMN2OCXYyfuX0bnbuhmdzXD06EWdg\/nunX2zh913xnjCe4amvPN6CKuVEJku\/nwdCh91111aYf1zPnQ6ju1pDzV+tIQjf3kxDaP3YmLfkp6mycmDWX5Zif6SX86M8rS\/5U+I\/yP6Wer3\/vc1jM72Fw5e6d7u5S41tt857yz03XMzXUq6bjTOlr8Senmqb55\/gl3p4OcG4GBYMWQHM5msFWohmof49dZUDLa5qaSBBOu7VEuh4+UNmNsSXQPnVzZ4nd13MwO3Pi6Iyltwd5gWusXrI7aTCc8VWfRXAPduB1dd1ssnDhCfEhku43Rc2rgu+6rgXO42HRL+NvqCjNPTqzz6MpTy+\/NG4xRZOMmydBzrgOPHHfdudabr3Mu1TPX+cye06gzKgW\/V3r5a33r+aPQ3QnyPQKTI0IJJKk3QskYpjqS8cT6NPVLjCGHj5Q2Y2xJdEGuhuU87BauzcSV667OnUkc5m6IxHMwc0MU2qXbqAXDC26XMWYdh+asT9533UesQm9cS\/gz55Lr05YDzrywzfnkd1w9qRx33fk65eZ1kwxuYWnEzSGTQfvefXV09nN9otoOH\/4EIBBBsLgLpBQBkownACmWaIkx5PCR0maMLYmueGN3FCVXcTOLXPt61nfgBs+J3brZGASFW+R9RRvkivcsKmfeQmpgqL2QebIVsRL+QK7WyO8duRqHfkrdrHfRzWIRgZVQJMGS3CmF6nADagtFLtu7NIYccaa0GWNLojunM3uNJtU8HrC9No\/TzM1y7mjK9nyUU56Rv9MWv43ggVytjzfRufJXLZCrHiNvB1d4M2bOwN6Sqz6QhjpYi+UdkCz\/ylrdvq7fRchX6u\/cQ8mMRIc7ppy2d2kMOeJMaTPGlkT3kMnVSLDGdQhyBXLFrVU2cs7VDSFl6FxV0LkyE+OUjgtPcFzIWy\/CDlbqzZA3WLeUZDyxPk39EmPI4SOlzRhbEt1DJlhm7Ganzfd6zF+zK7b6PeMmSoz\/jO2o8RhdSZOE+tZ8SA6GyHLGEWovZJ5scZfwZ+u4cm7MbTngzAvbnBtdKdv7H7bGZrHTt21knW5X5zvUnmuduuzMddx9+c++\/qF+++w9tvQBC4JgJZt8acEKGUAOHyltxtiS6Io3eGHRnM5VyPGjb4PlxD63WfnIFLfYh2zaYuxBrraWPGf+XxZJ4ub81g2nucYYhN1GaFy\/48hySZlUjrvupCRJqueKJ2Sv8cheevGmfuviNKHFKk0JCJakGEh0uHjntL1LY8gRZ0qbMbYkuuINvgJyZRI2bqH33T2DYPFWfGi++uR9112j2mU9dK\/43S+TSPnW6UvtXo2DRReLUSxAsBgg+UWkhc5veS2Rw0dKmzG2JLqHTLDM2EGwtjczX9dwq+PC7LCE2uXIS\/KfY\/dlEjMQrKoJFj3wrm+fvR6ygx2iLAhWklmXFsgQ5zl8pLQZY0uiC4LVZw\/IFchViToSskZBrqomV+tG9x19+\/xBSPYdmiwIVpIZDyk+Uoc5fKS0GWNLoguCBYJlHq1M11ZITuWS5XSZQnxL4yutB4J1EARrod7VN88+ku5oh6AHgpVklqVFMsR5Dh8pbcbYkuiCYIFggWCFVJAhXwKOQqXEDATrIAhW03xAHax74Tl4OBogWEnmWkIQQh3n8JHSZowtiS4IFggWCFZoFZF9hiGnE7dBxuiF+UGv+HiGsI97cOX2TjzgPnJ1ECzPAhQQrNDFtkoU4Z0Tp4RINmiO3RCZEmPI4SOlzRhbEt1DJVnTuPEMFp7BKlGnQtYnOlgH0cHCEaF34YFgeSHiCoQUIK5NUy6Hj5Q2Y2xJdA+VYE1vckCwQLBC6olknYXeVINgHQTBaho85I4OVkjxiZGVFq4Qnzl8pLQZY0uiC4KFY0IcE4ZUkPFsJ\/yrzkCy3KTJd5MjPe6T6hX4oFGlntGnuV8Nz73D0hB2sEIXG44J06WVhIj4vKe0GWNLonuoJAvHhJtZbdtUQvIplyynVob4nka9y3roYlXexcIHjfq2VboeSbBaD5yHF6cEK1SHEUUn0habXLZ3aQw54kxpM8aWRHdOZ\/baMKm+b7g35958eNeVc0M6bj3s65Rn5K9pc9xgfXfQ5nXXnXHIjZCY2M48i+m68+YQCRAsbpXCg+6+T0qP7Rxx15vvgfXYcfAzIlhSL0\/0reePgvUOTCGCYElJjWQT5c5KTtu7NIYccaa0GWNLonuoJGsaN0gWnsXi1qixdofcHIeQbycxYL7RyUqW25t5S4A+WSdpN+xJ5bjrTkqWpHpZjwnRvWIuNSJYV5ZhXSjTcuoNkTlyp5hkPLE+U2ASOoYccaa0GWNLorsLJIvmcEEfrd43mvrdwNZ8sTW3pnV0rb2ZFNq03Xlp\/Wnr3hOSUqbtnq24RtJf8cXR2pzamO5F85bHuKZS\/vGM8U5j6X3ydpu17GT+VjO5iaZtNPb5sc+srXlhYjJvj2e3t2nkpCVvfL7G622urXHm5OdahouvbyyuvG71lsK1wMsQMwdsjC9k1e2wrDO0x+ro7IY+UU93ePA7M7SBYHWrMCJZUm+IsfhIxhPr09QvMYYcPlLajLEl0c1Nssh+u0y2TuamLCpmHdlycIwpdo2Wsh0z3tp0JfFwdErJlPLT5ibL1ySJV0f7I9V17GGTy9bjete6cupZxtCNP\/L3U\/0pd27j5HbJuHI9657\/Y43nmdLLd3A0yOcKkyNCToL7DEtsSHR841glqGfxce3EyOWML2ecKccdY0uiO6cze219t2\/WNesNiIQEcnNp32zHjLc2XUk8HJ1SMqX8TInV3I2JrV3oG6Or4SnWGxauSUycfpjyU30byeLWC46cj1S5bLTjar4hTvZjkCsOzmsZ3Xx69IJefkM3EF8qvXjYXdLNdXpNb8HU49swnxC4F6rRj9nmOxv6VZqYa4NOb6Nr4epX6N9r5Oc18nGZfF3pZfSQYU2fCbqh48tFe3ND\/7Sv9Tm9+JbsPtsah2nLlNXNj0jne6RLPjvbZEO\/oJuDv7Njcgn6fI96W3KK4lH2eExfL9NHD9h6nnTAuL1xxMwxYxx2zC+rJcWj27zTx0PuDTnIzQZfoebascntm+2Y8damK4mHo1NKppSfNu9ZvoYFwn1zSWfXosPxF0uWxrXMtbMP5GqIqWn+qhbNT0Cwwuq6lNIGeWk+P7qhmsXPKO\/v9qRqxTgs\/kM6Fj5Z3\/WgMAzhnLZXC7VAB65EHCbO++6TszFIc2vfbMeMtzZdSTwcnVIypfxwyI6LKPnGCHK1XXkSbfMNPXe1WN4ByeLX9kTI2x02D9VV9fz4l3T1Pf\/dim\/hTH34ZH3X+QBtS+a0bRKr1M\/zhGAYg5FLtwR2LjKXCsucMeyb7Zjx1qYriYejU0qmlB+Qq80O264eCzrr\/yk95H6Ch9x5+2M2gjV0rf5Iw3gD5Io3Gb0Up9CF2LPJlvCRm+hwMMgRZ2szFVmzYbRPtmOwqE1XEg9Hp5RMKT9jjfPlue1tfb4xut4KKNajwXI\/GmLsuHHkp+PkPpgulePUyWAZfEwDE7IsBKsjV8vFx5Sb9AyXb5PzXQ\/puoTYYiK0EstpG52r0Nnwy+eYL1+h9o\/KLbFvtmPGW5uuJB6OTimZUn5ArjY\/q01Kmrh6MfXIo3vpxZv6rYvTjB6qMJ2cYA3Hgu3D8uhcBaVIDkJQaxfJB2wuLDkbkW9sruv7ZjtmvLXpSuLh6JSSKeUHBKsagqUUuliMUp+eYH12fJ\/8\/rT37Vu4vutm92r2rbx7enQz7V752uaMGZ0VCcE71lfJuGxEMgeWOfHbN9sx461NVxIPR6eUTCk\/nD2hk6G\/Wx+H4KnvOB7c\/rysVDXcYoceeNe3z17P6KEK00kJ1vDcVf9RDyBXAQnCKXAB5qyiJXyUIjpzWOSKM5ddzlqJmfsc446xWZuuJB6OTimZUn64eQ5y1ZNL7jGgSy6mZjB1m+aOvn3+gCl9kGJpCRa6V8Ik4hQ5oemVWgkfIFiyWco5Nzlsx9isTVcSD0enlEwpPyBYFR0P9mVuod7VN88+ktW8w9BKTbDa7ycaPufKt3B916cT4JP1XY+ZzJy2x3HV4gMES5ZpOec\/h+0Ym7XpSuLh6JSSKeUHBKs6gtU0H1AH656s5h2GVjKC1Xx65R169\/rHPWy+Reu7DnKVNv1C8E7luTafOePZN9sx461NVxIPR6eUTCk\/nH2hk6G\/eP5qT44IQbA822U6gvXn47v0NTjt516BYAVxFE6BCzJoES7ho+buFSenY+Yo5\/zksB1jszZdSTwcnVIypfxw1xAI1t48g4UjQm\/RT0ewPr1yjzpYvwDB8mJuCHAKXKjN2smOC4+cWML2GvUYLGrTlcTD0SklU8oPCFaFR4R4yL1YBwsES8iCOAVOaHqlVsLHIZC6nDjum+2Y8damK4mHo1NKppQfkKyKSNYz\/fYZfZA4\/swhkK6DhSNCYaZxipvQNAhWLHAFu4058yCH7RibtelK4uHolJIp5QcEqyKChQ8aZewu6QgWHnJnwG0T4RQ3oWkQrFjgQLCcCMbkbW26kng4OqVkSvkBwaqGYOnlib71\/FHiAluduWQEq1s6nx3jYxpEKcIpcCLDE6USPnbhmDAWJ59+Thz3zXbMeGvTlcTD0SklU8oPSFYFJAvdK982MVxPTbDuk118TQ4T\/LUYp7gFGy3YfXGNrURcpUldG1P7J9dX8eyT7RgsatOVxMPRKSVTys9IsHx5PiyzjY9s8I3RpsPx59RzbJOx8lP98f+x9d2ln3SLb508VkdnN\/SJapsp+ONBICn6+Kocab6VICIlfJQmOza8S8TpK\/TSPOBsBrtmOwaL2nQl8XB0SsmU8sPNc5CsmNW+1k22zT9TevkOjgb5s5IM+dElHRPep\/+ji8Wfg0GyFDHI0XmZC7ZEXC+D2HE2o+AkmOSC7w5\/l2zHYFGbriQejk4pmVJ+QLL6o8JundPfne9kPSZydRfkKqzupidYD9VV9fy4ffjtev+J7nMbhe\/6NBifrO96GDCb0jltr6hpxqOnkj5sZCcXWXDNaYn54m4Q0rzLGUMO2zE2a9OVxMPRKSVTyg93DaGTJa0im3ri7f5DOhZ8H8eC4bMgRny2Z\/H50Q3VLB6QDH0voW+x+q6DZIVP6+zsFCByh0SypptEDiI5ro99sR0z3tp0JfFwdErJlPLDXUPTLs+4dfnGaNPh+HPqTYrbdPuMlbd1sMZPtU\/9s6sl89tKo85I5A\/q0ot7+q2L07R70OFYy0KwuvTtSVb7TdvoZAXlUwjhDDI8ES7h49BI1hhvh+1f6L7iMv18Qn8vlG5OaS38UzpbKz3dXFeNfpVW17Xhd0+oCF7Q7x7vpO2Y8damK4mHo1NKppSfbu9n5HnTvKEWtBYa1a8FTWutaeiGXtPD1471YdNZNhdqQVbm1pVLr\/VrjqG1F\/t7RV86138n44J+XqX305ypZvlDenmhls0RjbeTSPKz0c\/Jx7fk4yuyfaEu0579XfOUvsT5QXRNgQEfjY1DqOmPC39FVuiZLN+m7rs+HYtP1nc9Jq6ctjc26XaBZSPA\/vmIwcilWwK7EsSu+YLq31MqcI+o0LXvpumKEYpSjpyBTSAABIDAfiKQcQNfAzJ0s96n39yljf376ys2AuFr+dqIVre9WWIJsRU6gTltm0TLFV\/omG3yJeJwkZ6ccUX41M3fiDh9TSlFnSfqPi3o75L+f+X8EZ5DSJFzsAEEgAAQqB+BIgRrgxK1n\/h+SV+lNuQNbyuY0yoejftkfddj5jqnbW58MeMv6cMcZwnsfD41kalGfUkdqU\/wLpkUiQQbQAAIAAEgUJxgAXIgAASAABAAAkAACNSOAAhW7TOM+IAAEAACQAAIAIHiCIBgFYccDoEAEAACQAAIAIHaEQDBqn2GER8QAAJAAAgAASBQHAEQrOKQwyEQAAJAAAgAASBQOwIgWLXPMOIDAkAACAABIAAEiiMAglUccjgEAkAACAABIAAEakcABKv2GUZ8QAAIAAEgAASAQHEEQLCKQw6HQAAIAAEgAASAQO0IgGDVPsOIDwgAASAABIAAECiOAAhWccjhEAgAASAABIAAEKgdARCs2mcY8QEBIAAEgAAQAALFEQDBKg45HAIBIAAEgAAQAAK1IwCCVfsMIz4gAASAABAAAkCgOAIgWMUhh0MgAASAABAAAkCgdgT+D3owV188AZWwAAAAAElFTkSuQmCC",
        "user": {
          "name": "wolf",
          "avatar": "wolf.jpg"
        }
      }
    ]
  },
  "reader": [
    "wolf",
    "test"
  ],
  "salons": [
    {
      "comment": [
        {
          "content": "同感！非常棒！",
          "user": {
            "name": "test",
            "avatar": "default.png"
          },
          "time": 1369796819760
        },
        {
          "content": "是的：）",
          "user": {
            "name": "wolf",
            "avatar": "wolf.jpg"
          },
          "time": 1369814893466
        }
      ],
      "content": "该书完整地阐述了Web开发过程。介绍了各种不同的技术，从前端到后端如：HTML，CSS,JavaScript,Java，Asp等等。收益颇多",
      "like": {
        "num": NumberInt(1),
        "users": [
          "test"
        ]
      },
      "time": 1369796657081,
      "title": "相当不错的编程入门读物",
      "user": {
        "name": "wolf",
        "avatar": "wolf.jpg"
      }
    }
  ],
  "status": NumberInt(1),
  "time": ISODate("2013-05-29T02:39:24.713Z"),
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
db.getCollection("cata").insert({
  "cname": "哲学",
  "_id": ObjectId("514a6c1eb28db2a319000002")
});

/** msg records **/
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/51a56a5cf4d9f3a248000001\/salon\/salon_1369796657081",
  "urlTitle": "相当不错的编程入门读物",
  "content": "您的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1369796819780,
  "_id": ObjectId("51a570d3258c6b174e000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/51a56a5cf4d9f3a248000001\/note\/1369812453158",
  "urlTitle": "去看看",
  "content": "您关注的笔记有了新评论 : ",
  "type": "notesComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1369812881742,
  "_id": ObjectId("51a5af913ee7fff00a000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/51a56a5cf4d9f3a248000001\/note\/1369813630344",
  "urlTitle": "去看看",
  "content": "您关注的笔记有了新评论 : ",
  "type": "notesComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1369813762962,
  "_id": ObjectId("51a5b302f72554a016000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/51a56a5cf4d9f3a248000001\/salon\/salon_1369796657081",
  "urlTitle": "相当不错的编程入门读物",
  "content": "您的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1369814883295,
  "_id": ObjectId("51a5b763a235f6501e000001")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/51a56a5cf4d9f3a248000001\/salon\/salon_1369796657081",
  "urlTitle": "相当不错的编程入门读物",
  "content": "您关注的书评有了新评论 : ",
  "type": "salonsComment",
  "relate": {
    "name": "test",
    "avatar": "default.png"
  },
  "time": 1369814893482,
  "_id": ObjectId("51a5b76da235f6501e000002")
});
db.getCollection("msg").insert({
  "status": NumberInt(1),
  "url": "\/book\/51a56a5cf4d9f3a248000001\/salon\/salon_1369796657081",
  "urlTitle": "相当不错的编程入门读物",
  "content": "您的书评有了新喜欢 : ",
  "type": "salonsLike",
  "relate": {
    "name": "wolf",
    "avatar": "wolf.jpg"
  },
  "time": 1369815253319,
  "_id": ObjectId("51a5b8d56bd414af21000001")
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": "\/hrTircNnsRDd7v1vZNwOBoh",
  "session": "{\"cookie\":{\"originalMaxAge\":11999998,\"expires\":\"2013-06-05T09:44:15.605Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"wolf\",\"password\":\"v0OX2LTcBh4bbRkaNS6RNA==\",\"id\":\"512c8d51e7d3c3a00f000001\",\"avatar\":\"wolf.jpg\",\"admin\":1}}",
  "expires": ISODate("2013-06-05T09:44:15.605Z")
});
db.getCollection("sessions").insert({
  "_id": "3e9HslzyovY6TEYAE8tef7b2",
  "session": "{\"cookie\":{\"originalMaxAge\":12000000,\"expires\":\"2013-06-05T09:39:53.273Z\",\"httpOnly\":true,\"path\":\"\/\"},\"flash\":{},\"user\":{\"name\":\"test\",\"password\":\"aY1RoZ2KEhzlgUmde3AWaA==\",\"id\":\"512dbc6d4fc2a09d4c000001\",\"avatar\":\"default.png\"}}",
  "expires": ISODate("2013-06-05T09:39:53.273Z")
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
