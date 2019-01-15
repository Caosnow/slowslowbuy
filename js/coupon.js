

$(function(){


    $.ajax({
        url:'http://127.0.0.1:9090/api/getcoupon',
        type:'get',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlstr = template('imgTpl',info);
            $('.mmm_imgs ul').html(htmlstr);
           
        }

    })












})