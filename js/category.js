
$(function(){
    // var id; //获取分类标题id
    // 分类标题
    $.ajax({
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        type:'get',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlstr = template('cateTpl',info);
            $('.content-box ul').html(htmlstr);
        }
    })




    //分类列表 注册点击事件  事件委托
    //点击按钮  切换类名
    




    $('.content-box').on('click','.title',function(){
        // alert(111);
        if($(this).find('.fa').hasClass('fa-angle-down')){ 
            $(this).find('.fa').addClass('fa-angle-up')
            $(this).find('.fa').removeClass('fa-angle-down')       
         }else {
            $(this).find('.fa').removeClass('fa-angle-up')
            $(this).find('.fa').addClass('fa-angle-down')
         }




        // console.log($(this))
        // 切换二级 分类
        $(this).next().toggle();


        //获取 id 
        var id = $(this).data('id');
        // console.log(id);

        $.ajax({
            url:'http://127.0.0.1:9090/api/getcategory',
            type:'get',
            data:{
                titleid:id
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var htmlStr = template('secondTpl',info);
                $('#hide-box ul').html(htmlStr);
            }
        })
    
    })
   







    

    









})


















