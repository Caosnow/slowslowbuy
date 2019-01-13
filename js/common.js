

$(function(){

    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false, //是否显示滚动条
    });




   $('.mmm_footer .topBar').click(function(){
    //    alert(111);
       mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);//100毫秒滚动到顶
   })
    // $(window).scroll(function(){
    //     //获取滚动的高
    //     var scrollTop = $(window).scrollTop();
    //     console.log(scrollTop);
    // })


    
   








})




