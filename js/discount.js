$(function(){

    var url = new getSearch();
    var id = url.productId;
    console.log(id);


    $.ajax({
        url:'http://127.0.0.1:9090/api/getdiscountproduct',
        type:'get',
        data:{
            productid :id
        },
        dataType:'json',
        success:function(info){
            // console.log(info);
            var htmlstr = template('contralTpl',info);
            $('.mmm_content .ups_box').html(htmlstr);

            var hs = template('commentTpl',info);
            $('.mmm_content .mmm_commen').html(hs);
        }
    })




})