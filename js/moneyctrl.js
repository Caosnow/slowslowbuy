$(function(){

    $.ajax({
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        type:'get',
        data:{
            pageid:1
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlstr = template('contralTpl',info);
            $('.content .cents').html(htmlstr);
        }
    })



















})