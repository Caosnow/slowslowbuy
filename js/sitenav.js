
$(function(){

    
    $.ajax({
        url:'http://127.0.0.1:9090/api/getsitenav',
        type:'get',
        dataType:'json',
        success:function(info){
            console.log(info);

            var htmlstr = template('infoTpl',info);
            $('.mmm_nav_content ul').html(htmlstr);
        }

    })
        
})