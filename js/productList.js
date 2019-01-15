
    //封装的获取地址栏id
    
    var pageid = 1;
    var m = new getSearch();
    var id = m.categoryId;
    var pages;     //页数
   //  console.log(getSearch.categoryId);
   
   list();
  function list(id){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        type:'get',
        data:{
            categoryid:id || 0,
        },
        dataType:'json',
        success:function(info){
         //    console.log(info);
            var htmlStr = template('telTpl',info);
            $('.pro-lujing .left').html(htmlStr);
        }
    })
  }





// var getSearch = new getSearch();
// var id = getSearch.categoryId;

//渲染商品列表
render();
function render(id,pageid){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getproductlist',
        type:'get',
        data:{
            categoryid:id || 0,
            pageid: pageid || 1
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('contentTpl',info);
            $('.content ul').html(htmlStr);
            // var totalCount = info.totalCount;
            // var pagesize = info.pagesize;
            // var yeshu = Math.ceil(totalCount/pagesize);
        }
    })
}





// 注册点击事件 给左右页码
    
    var $left = $('.paginator-box a.left');
    var $right = $('.paginator-box a.right');

    $right.click(function(){
        //判断 如果下一页的id 大于 总页数 pages ,就停止

        if(pageid >= 3){
            mui.toast('已经没有更多数据了..',{ duration:'long', type:'div' }) 
            return false;
        }
        pageid++;
        render(id,pageid);
       
        // console.log(yeshu);
        var texts = $('.paginator-box .texts').text(pageid);
       
    })
    $left.click(function(){
        //判断 如果下一页的id 大于 总页数 pages ,就停止

        if(pageid == 1){
            mui.toast('已经没有更多数据了..',{ duration:'long', type:'div' }) 
            return false;
        }
        pageid--;
        render(id,pageid);
       
        // console.log(yeshu);
        var texts = $('.paginator-box .texts').text(pageid);
       
    })




    
