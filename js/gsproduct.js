$(function(){
    var shopid;
    var areaid;
    $.ajax({

        url:'http://127.0.0.1:9090/api/getgsshop',
        type:'get',
        dataType:'json',
        success:function(info){
            // console.log(info);
            var htmlstr = template('numTpl',info);
            $('.addnum ul').html(htmlstr);
           

        }

    })
        





    
    $.ajax({

        url:'http://127.0.0.1:9090/api/getgsshoparea',
        type:'get',
        dataType:'json',
        success:function(info){
            // console.log(info);
            var htmlstr = template('areaTpl',info);
            // console.log($('.areadata ul'))
            // console.log(htmlstr)
            $('.areadata ul').html(htmlstr);
        }

    })
        

    //注册点击事件  
    var as = $('.gspro-content a.lii');
    // console.log(as);
    as.each(function(index,item){
        // console.log(item);
        $(item).click(function(){
        //    $(this).children('.second').toggle();
        // console.log($(this));
            if(index == 0){
                $('.second.hideone').toggle();
                // $('.current.arrow i').toggle();
               
               
            }else if(index == 1){
                $('.second.hidetwo.areadata').toggle();
             
            }else{
                $('.second.hidethree').toggle();
                
            
            }
    //    shopid = $(item).next('.second.hideone').children('li').data('id');
    //    console.log(shopid);
      
        })
        
    })
    

    //二级菜单 
    $('.second.hideone.addnum ul').on('click','li',function(){
        $(this).find("i").show();
        $(this).siblings().find("i").hide();

        shopid = $(this).data('id');
        // console.log(shopid);
        render(shopid);
        $('.second.hideone').toggle();
    })


    $('.second.hidetwo.areadata ul').on('click','li',function(){
        $(this).find("i").show();
        $(this).siblings().find("i").hide();

        areaid = $(this).data('id');
        // console.log(areaid);
        render(areaid);
        $('.second.hidetwo.areadata').toggle();
    })

   
   

    render();
    function render(){
        $.ajax({

            url:'http://127.0.0.1:9090/api/getgsproduct',
            type:'get',
            data:{
                shopid:shopid || 0,
                areaid:areaid || 0
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var htmltr = template('listTpl',info);
                $('.gslist ul').html(htmltr);
            }
    
        })
    }

})