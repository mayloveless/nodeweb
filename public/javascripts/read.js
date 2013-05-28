 var curPage,pageNum,pages;
var isMoveing = false;
var pageWidth = $('#content').width();
var pageHeight = 0 ;
var vertical = false;

var Tohtml = function (str) {
    return str ? str.replace(/&((g|l|quo)t|amp);/g, function (m) {
        return {
            '&lt;':'<',
            '&amp;':'&',
            '&quot;':'"',
            '&gt;':'>'
        }[m]
    }) : '';
};

//初始化
var init = function(){
    //将段落存起来，方便控制和扩展
    $('#hideContent').html(Tohtml($('#hideContent').html()));
    var pList = [];
    var cList = [];
    var pCount = 0;
    var cataInPage = [];
    //make pone
    $('.psignal').parent().each(function(){
        ++pCount;
    	var htmlSection = '<p id="p_'+pCount+'" style="'+
                                $(this).attr('style')+
                                '" class="pone">'+
                                '<canvas class="pcanvas" width="'+pageWidth+'"></canvas>'+
                            $(this).html()+'</p>';
    	pList.push(htmlSection);
    });
    $('#hideContent').html(' ');
    //make images
    var imgWhich = imgNum.toString().split(',');
    var imgData = imgDataList.toString().split('&amp;&amp;&amp;');
     images ={};
    for(var i=0;i<imgWhich.length;i++){
        if(i!==0){
            thisData = imgData[i].slice(1);
        }else{
            thisData = imgData[i];
        }
        images[imgWhich[i]] = thisData;
    }
    //device pages  user #pageWrap dom to calculate 
    for(var i=0;i<pList.length;i++){
    	$('#pageWrap').append(pList[i]);
    }
    var viewHeight = $(window).height()-100;
	var curHeight = 0;
	pages = [];
	var pageContent = '';
	for(var i=0;i<pList.length;i++){
		pageContent += pList[i];
		if( curHeight < viewHeight ){
            var oneHeight = $('#pageWrap>p:eq('+i+')').height();
            curHeight = curHeight + oneHeight;
        }else{
			pages.push(pageContent);
			pageContent = '';
			curHeight = 0;
		}

        if($('#pageWrap>p:eq('+i+')').children('span').hasClass('csignal')){
            cList.push($('#pageWrap>p:eq('+i+')').text());
            cataInPage.push(pages.length+1);
        }
	}

	//catalogue
	for(var i=0;i<cList.length;i++){
        var cataHTML = '<li><a class="cataList" href="javascript:;" '+
                            'link="'+
                            cataInPage[i]+'">'+
                            cList[i]+
                        '</a><li>';
    	$('#catalogue').append(cataHTML);
    }

    //show
    pageNum = pages.length;
    $('#pageWrap').html('').css('width',pageNum*pageWidth);
    for(var i=0;i<pageNum;i++){
        var pageHTML = '<div class="page">'+
                            '<div class="curPageNum">'+(i+1)+'</div>'+
                            '<div class="title">'+bookName+'</div>'+
                            '<hr>'+
                             pages[i]+
                        '</div>';
        $('#pageWrap').append(pageHTML);
        if($('#pageWrap>.page:eq('+i+')').height() > pageHeight){
            pageHeight = $('#pageWrap>.page:eq('+i+')').height()
        }
    }
    //统一每页高度
    $('#pageWrap>.page').height(pageHeight)
    //show page info
    curPage = 1;
    $('#total').text(pageNum);
    $('#curPage').text(curPage);

    //canvas
    for(var i=0;i<$('.pone').length;i++){
        $('.pcanvas')[i].setAttribute('height',$('.pone')[i].offsetHeight);
        if(images[i]){
            var theImg = new Image();
            theImg.src = images[i];
            theImg.onload = function(i,img){
               $('.pone:eq('+i+')').append(img);
               $('.pone:eq('+i+')>img').css('position','absolute').css('left','0').css('top','0').css('z-index',-1);
              // $('.pcanvas')[i].getContext('2d').drawImage(img,0,0);
            }(i-1,theImg);
        }
    }
};


var preAction = function(){
    //lock
    if(isMoveing){
        return;
    }
    
    if(curPage == 1){
        alert('已然第一页了');
    }else{
        isMoveing = true;
        if(vertical){
            $('body').scrollTop((curPage-2)*pageHeight);
            --curPage;
            $('#curPage').text(curPage);
            isMoveing = false;
            location.hash = curPage;
        }else{
            var moveOpt = {
                'left':  (curPage-2)*-pageWidth
            }
            $('#pageWrap').animate(moveOpt,500,function(){
                --curPage;
                $('#curPage').text(curPage);
                isMoveing = false;
                location.hash = curPage;
            });
        }
    }

};

var nextAction = function(){
    //lock
    if(isMoveing){
        return;
    }
    
    if(curPage == pageNum){
        alert('已然最后一页了');
    }else{
        isMoveing = true;
        if(vertical){
            $('body').scrollTop(curPage*pageHeight);
            ++curPage;
            $('#curPage').text(curPage);
            isMoveing = false;
            location.hash = curPage;
        }else{
            var moveOpt = {
                'left': curPage*-pageWidth
            }
            $('#pageWrap').animate(moveOpt,500,function(){
                ++curPage;
                $('#curPage').text(curPage);
                isMoveing = false;
                location.hash = curPage;
            });
        }
    }
};

var goTo = function(gotoNum){
    if(gotoNum > pageNum){
        gotoNum = pageNum
    }
    if(gotoNum < 1){
        gotoNum = 1;
    }
    if(parseInt(gotoNum)){
        gotoNum = parseInt(gotoNum);

        if(vertical){
            $('body').scrollTop((gotoNum-1)*pageHeight);
        }else{
            $('#pageWrap').css('left',(gotoNum-1)*-pageWidth);
        }
        curPage = gotoNum;
        $('#curPage').text(curPage);
        location.hash = curPage;
    }
};

$(document).ready(function(){
    init();
    //if from single note
    var fromNote = location.search;
    if(fromNote && fromNote.split('?pid=')){
        var pid = fromNote.split('?pid=')[1];
        for(var i=0;i<pages.length;i++){
            if(pages[i].indexOf('p_'+pid) !== -1){

                location.href =location.pathname+'#'+(i+1); 
            }
        }
    }

    var urlPage = location.hash;
    if(urlPage){
        goTo(parseInt(urlPage.split('#')[1]));
    }
    //hash change 
    if("onhashchange" in window){
        window.onhashchange = function(){
           goTo(parseInt(location.hash.split('#')[1]));
        };
    }else{
        // ie
    }

    //wheel
    var sTop = document.body.scrollTop;
    $(document).bind('scroll',function(e){
        if(vertical){
            var curTop = document.body.scrollTop;
            if(curTop > sTop){
                //down
                var curWatch =  parseInt($(document).scrollTop()/pageHeight)+1;
                if(curWatch > parseInt(location.hash.split('#')[1])){
                    location.hash = curWatch;
                }
            }else{
                //up
                var curWatch =  parseInt($(document).scrollTop()/pageHeight)+2;
                var hashNum = parseInt(location.hash.split('#')[1]);
                if(curWatch < hashNum && hashNum!=2){
                    location.hash = curWatch;
                }else if(hashNum == 2 && parseInt($(document).scrollTop()/pageHeight) ==0 ){
                    //为应对hashChange带来的换页，只能按照页面全部出现改变hash。
                    //这样的话第一页就不行了，只能强制切换 了
                    location.hash = 1;
                }
            }
            sTop = curTop;
            
        }
    });

    //pre page
    $('#pre').bind('click',preAction);
    //next page
    $('#next').bind('click',nextAction);
    //key events
    $(document).bind('keydown',function(event){
        var key = event.which || event.keyCode ;
        if(key == 39 || key == 40){
            nextAction();
        }else if(key == 37 || key == 38){
            preAction();
        }
    });
    //jump to 
    $('#jump').bind('keydown',function(){
        var key = event.which || event.keyCode ;
        if(key == 13){
            goTo(parseInt($(this).val()));
        };
    });
    //read derection
    $('.derection').bind('click',function(){
        if(vertical){
            $(this).text('横向');
            vertical = false;
            $('.page').css('float','left')
            $('#pageWrap').css('top','0px');
            $('body').scrollTop(0);
        }else{
            $(this).text('垂直');
            vertical = true; 
            $('.page').css('float','none');
            $('#pageWrap').css('left','0px');
        }
        goTo(parseInt(location.hash.split('#')[1]));
    });

    //check big image
    $('.img').bind('click',function(){
       var src = $(this).children().attr('src');
       $('#largeImg > .modal-body').html('<img src="'+src+'"/>');
    });
    //tool
    //show catalogue
    var isShow = 0;
    $('.showCata').bind('click',function(){
        if(isShow){
            $('#catalogue').hide();
            isShow = 0;
        }else{
            $('#catalogue').show();
            isShow = 1;
        }
    });
    $('.cataList').bind('click',function(){
        location.hash = $(this).attr('link');
        $('#catalogue').hide();
        isShow = 0;
    });


    //full screen
    $('.fullScreen').bind('click',function(){
        //HTML5 full screen API
        // Webkit (works in Safari5.1 and Chrome 15) , Firefox (works in nightly)
        var node = $('#container')[0];

        if (!document.fullscreenElement &&    
              !document.mozFullScreenElement && !document.webkitFullscreenElement) { 
            if (node.requestFullscreen) {
              node.requestFullscreen();
            } else if (node.mozRequestFullScreen) {
              node.mozRequestFullScreen();
            } else if (node.webkitRequestFullscreen) {
              node.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                 document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                 document.webkitCancelFullScreen();
            }
        }

    });

    //connect socket
    var host = 'http://'+window.location.hostname+':'+window.location.port;
    var socketNote = io.connect(host);
    //listen channel note
    socketNote.emit('getNoteNum', { id: bid });
    socketNote.on('reNoteNum', function (data) {
        var plen = $('.psignal').length;
        var note = data['note'];
        for(var i=0;i<plen;i++){
            if(note[i]){
                $('#p_'+i+'>.psignal').text(note[i].length);
            }else{
                $('#p_'+i+'>.psignal').text(0);
            }
        }
    });
    //增加新笔记的时候,显示黄背景
    socketNote.on('addNoteNum', function (data) {
        var which = data.note;
         console.log(which['bid'] == bid);
        if(which['bid'] == bid){
             var cur = $('#p_'+which['pid']+'>.psignal').text();
            $('#p_'+which['pid']+'>.psignal').text(++cur);
            $('#p_'+which['pid']+'>.psignal').css('background','#ffff00');
        }
    });
    //即时消息
    socketNote.on('im'+bid, function (data) {
        var html = '<li><span style="color:#dff0d8;">'+data.msg.user.name+'</span>:'+data.msg.content+'<p>'+(new Date(data.msg.time)).toString().substring(16,25)+'</p></li>';
        $('#chatWin').append(html);
    });

    //show theirs notes
    $('.showMine').live('click',function(){
        $('.mine').show();
        $('.theirs').hide();
    });
    //show mine notes
    $('.showTheirs').live('click',function(){
        $('.theirs').show();
        $('.mine').hide();
    });

    //add note
    $('.addNote').live('click',function(){
        var text = $.trim($('textarea').val());
        var pcontent = $('.pcontent').html();
        var pid = $('#notes>.contents').attr('pid');
        $.post('/addNote',{'content':text,'pcontent':pcontent,id:bid,pid:pid},function(data){
            var one = data['success']['data'];
            var html = '<p tid="'+one['time']+'">'+one['content']+'时间'+(new Date(one['time'])).toString().substring(10,25)+
                            '<a target="_blank" href="/book/'+bid+'/note/'+one['time']+'">查看</a>/'+
                            '<a href="###" class="delNote">删除</a></p>'+
                            '<a class="showTheirs">查看其他人的笔记</a>';
            $('.mine').html(html);
        });
    });

    //del note
    $('.delNote').live('click',function(){
        var pid = $('#notes>.contents').attr('pid');
        var tid = $(this).parent().attr('tid');
        $.post('/delNote',{id:bid,pid:pid,tid:tid},function(data){
            var html = '<h4>增加笔记</h4>'+
                            '<textarea></textarea>'+
                            '<a class="btn addNote">增加</a>'+
                        "</div>"+    
                        '<div class="theirs"><a class="showMine">查看我的笔记</a>'+  
                        "</div>";
           $('.mine').html(html);
        });
    });

    //显示所有笔记
    $('.psignal').bind('click',function(){
        var node = $(this).parent();
        var pid = node.attr('id').split('p_')[1];
        var imgData ='';
        $.post('/getNotes',{id:bid,pid:pid},function(data){
            var notes = data['success']['data'];
            if(notes){
                var theirs ='<div class="theirs">';
                var hasMine = "";
                for(var i=0;i<notes.length;i++){
                    if(notes[i]['user']['name'] == username){
                        imgData = notes[i]['pic'];
                        if(notes[i]['content']!==''){
                            hasMine = '<p  class="alert_none"  tid="'+notes[i]['time']+'">'+notes[i]['content']+
                                '<a href="/book/'+bid+'/note/'+notes[i]['time']+
                                '"target="_blank">查看</a>/'+
                                '<a href="###" class="delNote">删除</a></p>';
                        }
                    }else{
                        theirs += '<p >'+notes[i]['content']+"时间："+(new Date(notes[i]['time'])).toString().substring(10,25)+
                        '<a href="/book/'+bid+'/note/'+notes[i]['time']+'" target="_blank">查看</a></p>';
                    }
                }
                theirs +="<a class='showMine'>查看我的笔记</a>"+"</div>";
                if(!hasMine){
                    var html = '<div class="mine"><h4>增加笔记</h4>'+
                                '<textarea></textarea>'+
                                '<a class="btn addNote">增加</a>'+
                                '<a class="showTheirs">查看其他人的笔记</a></div>' +
                                    theirs+"</div>";
                }else{
                    var html = "<div class='mine'>"+hasMine +"<a class='showTheirs'>查看其他人的笔记</a></div>"+theirs;
                }
                html ='<div class="pcontent" style="position:relative;">'+
                        node.html()+
                        "</div>"+html;
                $('#notes>.contents').html(html);
                $('#notes>.contents  img').attr('src',imgData).css('top','-15px').css('left','5px');
                $('#notes>.contents').attr('pid',pid);
                $('#notes').modal('show');
            }else{
                var html = '<div class="mine"><h4>增加笔记</h4>'+
                                '<textarea></textarea>'+
                                '<a class="btn addNote">增加</a>'+
                            "</div>"+    
                            '<div class="theirs"><a class="showMine">查看我的笔记</a>'+  
                            "</div>";

                $('#notes>.contents').html(html);
                $('#notes>.contents').attr('pid',pid);
                $('#notes').modal('show');
            }
        });

    });

    //move draw btn
    var curPone = 0;
    $('.pone').hover(function(){
        if(!hasPannel){
            var id = $(this).attr('id').split('p_')[1];
            var startId = $(this).parent().children('.pone')[0].id.split('p_')[1];
            var top = 80;
            for(var i=startId-1;i<id;i++){
                top +=$('.pone')[i].offsetHeight;
            }
            $('#draw').css('top',top+'px');
            curPone = id-1;
        }
    });

    // show drawPannel
    var hasPannel = false;
    var context = '';
    var screenWidth ='';
    var screenHeight = '';
    $('#draw').bind('click',function(){
        if(hasPannel){
            $('#drawPannel').hide();
            $('.pone')[curPone].style.border = 'none';
            //hide canvas
            //$('.pone')[curPone].children[0].style.zIndex = -1;
            hasPannel = false;
        }else{
            $('#drawPannel').show();
            $('.pone')[curPone].style.border = '2px dashed red';
            //show canvas
            //$('.pone')[curPone].children[0].style.zIndex = 0;
            //预设文字
            context = $('.pcanvas')[curPone].getContext('2d');
            //画布宽高
            screenWidth = parseInt($('.pcanvas')[curPone].width);  
            screenHeight = parseInt($('.pcanvas')[curPone].height);
            hasPannel = true;
        }
    });

    //draw action
    //画图
    var drewAble = 0;
    var mousePosition = {};
    var drawLeft = 350;
    var drawTop =0;
    $('.pone').bind('mousedown',function(e){
        if(hasPannel){
            drewAble=1;
            drawTop =  $('.pone')[curPone].offsetTop - $(document).scrollTop() +60;
            mousePosition = {x:e.clientX-drawLeft,y : e.clientY-drawTop};
           // console.log(mousePosition);
        }
    });

    $('.pone').bind('mousemove',function(e){
        if(drewAble){  
            context.beginPath();  
            context.lineJoin='round';
            context.lineCap='round';
            context.strokeStyle=$('#canvas_currentColor').css('background-color');
            context.moveTo(mousePosition.x,mousePosition.y); 
            context.lineTo(e.clientX-drawLeft,e.clientY-drawTop);  
            context.stroke();  
            context.closePath();
            mousePosition = {x:e.clientX-drawLeft,y : e.clientY-drawTop};
        }
    });
                        
    $('.pone').bind('mouseup',function(){
        if(hasPannel){
            drewAble=0;
        }
    });

    //canvas功能：清屏
    $('#canvas_clear').bind('click',function(){
        drewAble=0;
        context.clearRect(0,0,screenWidth,screenHeight);
    });
    //笔画粗细
    $('#pen_large').bind('click',function(){
        if(context.lineWidth<27){
            context.lineWidth+=3;
            $('#pen_sample').css('height',context.lineWidth+'px');
        }
    });
    $('#pen_small').bind('click',function(){
            context.lineWidth-=3;
            $('#pen_sample').css('height',context.lineWidth+'px');
    });
    //选颜色
    $('#choose_color').bind('click',function(){
        $('#canvas_colors').show();
    });

    $('#canvas_colors>li>a').bind('click',function(){
        var choose_color=$(this).css('background-color');
        $('#canvas_currentColor').css('background-color',choose_color);
        $('#canvas_colors').hide();
    });
    //保存
    $('#saveDrew').bind('click',function(){
        var img = $('.pone:eq('+curPone+') img')[0];
        if(img){
            context.drawImage(img,0,0);
        }
        var data = $('.pcanvas')[curPone].toDataURL();
        $.post('/saveNoteImg',{
            pic:data,
            id:bid,
            pid:curPone+1,
            pcontent:$('.pone')[curPone].innerHTML
        },function(data){
            console.log(data);
        });
    });

    //发即时消息
    $('.sendMsg').bind('click',function(){
        var text = $('.msgTextarea').val();
        if(!text){
            alert('type anything?');
            return;
        }
        $.post('/sendIm',{
            content:text,
            bid:bid
        });
        $('.msgTextarea').val('');
    });

});