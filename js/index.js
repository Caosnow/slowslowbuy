
$(function(){

//已进入页面发送ajax请求

$.ajax({
    url:"http://127.0.0.1:9090/api/getindexmenu",
    type:'get',
    dataType:'json',
    success:function(info){
        console.log(info);
        var htmlStr = template('navTpl',info);
        $('.mmm_mav ul').html(htmlStr);
       
        
    }
})



// 折扣列表中的数据
$.ajax({
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    type:'get',
    dataType:'json',
    success:function(info){
        console.log(info);

        var htmlStr = template('proTpl',info);
        $('.content ul').html(htmlStr);

       
    }
})










})