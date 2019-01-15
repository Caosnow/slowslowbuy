


    var url = new getSearch();
    var cateid = url.categoryId;
    console.log(cateid);
    var id = url.productId;
    console.log(id);
    

    //二级分类 点击电视跳转 电视页 
    $.ajax({
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        type:'get',
        data:{
            categoryid:cateid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('oneTpl',info);
            $('.seconds').html(htmlStr);
        }

    })



    
    //三级分类
    $.ajax({
        url:'http://127.0.0.1:9090/api/getproduct',
        type:'get',
        data:{
            productid:id
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            // console.log(info.result[0].bjShop);
            // console.log(info.result[0].productName);
            var str = info.result[0].productName;
            var arr = str.split(' ')[0];
            // console.log(arr);
        //    var arr1= arr.slice(2);
        //    console.log(arr1);
           var htmlStr = template('telTpl',{arr:arr});
           $('.three').html(htmlStr);

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
            // console.log(info);

            var hstr = template('commentTpl',info);
            $('.comment .morecontent').html(hstr);
        }
    })









