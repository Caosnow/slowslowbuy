$(function(){

    var url = new getSearch();
    var id = url.brandtitleid;
    console.log(id);

    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrand',
        type:'get',
        data:{
            brandtitleid:id
        },
        dataType:'json',
        success:function(info){
            console.log(info);

            var htmlstr = template('listbranTpl',info);
            $('.brandlist ul').html(htmlstr);
        }

    })
        



    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        type:'get',
        data:{
            brandtitleid:id,
            getbrandproductlist:4
        },
        dataType:'json',
        success:function(info){
            console.log(info);

            var htmlStr = template('contentTpl',info);
            $('.content ul').html(htmlStr);

            var productid = $('.content ul li').eq(0).data('id');
             console.log(productid);
            //获取动态的img的路径,和文本信息
            var img = $('.content li img').eq(0).attr('src');
            console.log(img);
            var text = $('.content li .first').eq(0).text();
            console.log(text);
             $.ajax({

                url:'http://127.0.0.1:9090/api/getproductcom',
                type:'get',
                data:{
                    productid: productid
                },
                dataType:'json',
                success:function(info){
                    console.log(info);
                  if(info){
                    var result = info.result;
                    result.forEach(function(v,i){
                        // console.log(v,i);
                        v.img = img;
                        v.text = text;
                    })
                  }

                    var htmls = template('lastTpl',info);
                    $('.brabdnewst .contents ul').html(htmls);
                }



                })
            }

    })



    

})