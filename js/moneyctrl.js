$(function(){
    var pages = 1;  // 总的页数
    var pageid = 0;

    render();
    function render(pageid){
        $.ajax({
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            type:'get',
            data:{
                pageid:pageid || 0
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var htmlstr = template('contralTpl',info);
                $('.content .cents').html(htmlstr);
                var pages = Math.ceil(info.totalCount/info.pagesize);
                // console.log(pages);
            }
        })
    }




    
    // 注册点击事件 给左右页码
        
    var $left = $('.paginator-box a.left');
    var $right = $('.paginator-box a.right');

    $right.click(function(){
        //判断 如果下一页的id 大于 总页数 pages ,就停止

        if(pageid >= 14){
            mui.toast('已经没有更多数据了..',{ duration:'long', type:'div' }) 
            return false;
        }
        pageid++;
        render(pageid);
        pages ++;  
        // console.log(yeshu);
        var texts = $('.paginator-box .texts').text(pages);
    
    })
    $left.click(function(){
        //判断 如果下一页的id 大于 总页数 pages ,就停止

        if(pageid == 0){
            mui.toast('已经没有更多数据了..',{ duration:'long', type:'div' }) 
            return false;
        }
        pageid--;
        render(pageid);
        pages --;
        // console.log(yeshu);
        var texts = $('.paginator-box .texts').text( pages);
    
    })















})