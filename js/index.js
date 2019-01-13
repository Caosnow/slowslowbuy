
$(function(){

//已进入页面发送ajax请求
    // 假设成立法
    var flag = true;

$.ajax({
    url:"http://127.0.0.1:9090/api/getindexmenu",
    type:'get',
    dataType:'json',
    success:function(info){
        console.log(info);
        var htmlStr = template('navTpl',info);
        $('.mmm_mav ul').html(htmlStr);
       
        mui('.mmm_mav ul').on('click','.current',function(){
            // alert(111);
            if(flag){
                $('li[data-type="1"]').toggle();
            }
           
        })
    }
})



// 折扣列表中的数据
$.ajax({
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    type:'get',
    dataType:'json',
    success:function(info){
        console.log(info);

        var htmlStr = template('proTpl',info);
        $('.content ul').html(htmlStr);

       
    }
})










})