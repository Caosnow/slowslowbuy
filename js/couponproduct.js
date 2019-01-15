


$(function(){

    var url = new getSearch();
    var couponid = url.couponId;
    console.log(couponid);
   
    

    
    $.ajax({
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        type:'get',
        data:{
            couponid:couponid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('contentTpl',info);
           $('.content ul').html(htmlStr);

           var contentLength = info.result.length;
        //    给li 注册点击事件  事件委托
            $('.content ul').on('click','li',function(){
                //获取点击的li 的下标
                var index = $(this).index();
                console.log(index);
                //动态设置 img 图片 拿到了图片
                var img1 = info.result[index].couponProductImg;
                //模态框展示
                $('.mmm_mtk').css('display','block');
                //赋值图片
                $('.mmm_mtk .imge_box').html(img1);

                //给左右箭头注册点击事件
                
                $('.arrow-right').on('click',function(){
                    console.log($(this));
                   
                    if(index < contentLength-1){
                        index++;
                        //    拿到图片
                            img1 = info.result[index].couponProductImg;
                        //赋值图片
                        $('.mmm_mtk .imge_box').html(img1);

                    }
                    return false;
                })

                    $('.arrow-left').on('click',function(){
                        if(index > 0){
                            index--;
                        //    拿到图片
                        img1 = info.result[index].couponProductImg;
                        //赋值图片
                        $('.mmm_mtk .imge_box').html(img1);
                        }
                        return false;
                    })

            })
        }

    })














})













