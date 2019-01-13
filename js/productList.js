
    //封装的获取地址栏id
    

    var m = new getSearch();
    var id = m.categoryId;
   //  console.log(getSearch.categoryId);
   

   $.ajax({
       url:'http://127.0.0.1:9090/api/getcategorybyid',
       type:'get',
       data:{
           categoryid:id
       },
       dataType:'json',
       success:function(info){
        //    console.log(info);
           var htmlStr = template('telTpl',info);
           $('.pro-lujing .left').html(htmlStr);
       }
   })





// var getSearch = new getSearch();
// var id = getSearch.categoryId;

//渲染商品列表
$.ajax({
    url:'http://127.0.0.1:9090/api/getproductlist',
    type:'get',
    data:{
        categoryid:id,
        pageid: 1 
    },
    dataType:'json',
    success:function(info){
        console.log(info);
        var htmlStr = template('contentTpl',info);
        $('.content ul').html(htmlStr);
    }
})











    
