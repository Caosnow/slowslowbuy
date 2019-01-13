
$(function(){

    var url = new getSearch();
    var id = url.productId;
    console.log(id);

    $.ajax({
        url:'http://127.0.0.1:9090/api/getproduct',
        type:'get',
        data:{
            productid:id
        },
        dataType:'json',
        success:function(info){
            // console.log(info);
            // console.log(info.result[0].bjShop);
            // console.log(info.result[0].productName);
            var str = info.result[0].productName;
            var arr = str.split(' ')[0];
            // console.log(arr);
        //    var arr1= arr.slice(2);
        //    console.log(arr1);
           var htmlStr = template('telTpl',{arr:arr});
           $('.pro-lujing .left').html(htmlStr);

           var htmls = template('contentTpl',info);
           $('.content-main .content-mbox').html(htmls);
        }
    })






    $.ajax({
        url:'http://127.0.0.1:9090/api/getproductcom',
        type:'get',
        data:{
            productid :id
        },
        dataType:'json',
        success:function(info){
            console.log(info);

            var hstr = template('commentTpl',info);
            $('.comment .morecontent').html(hstr);
        }
    })









})