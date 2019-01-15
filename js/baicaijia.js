// window.addEventListener("load", function() {
//     new IScroll(".mmm_nav");
  
//     new IScroll(".mmm_nav", {
//       scrollX: true,
//       scrollY: false
//     });
//   })


$(function(){
    var id ;//全局声明一个标题id

      $.ajax({
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        type:'get',
        dataType:'json',
        success:function(info){
          console.log(info);
          var htmlstr = template('navTpl',info);
          $('.mmm_nav ul').html(htmlstr);

          

         

          //获取可视区的宽
          $(window).on('resize',function(){
            var ulwidth = 0;
            var lis = $('.mmm_nav ul li');
            var liwidth = 0;
            lis.each(function(index,ele){
              // console.log(index,ele);
              liwidth += $(ele).width(); 
             
            })
          })
          window.addEventListener("load", function() {
            // new IScroll(".jd_content_left");
          
            new IScroll(".mmm_nav", {
              scrollX: true,
              scrollY: false
            });
          })

          
          $('.mmm_nav ul').on('click','li',function(){
            // console.log($(this));
            $(this).siblings().children('a').removeClass('current');
            $(this).children('a').addClass('current');

            id =  $(this).data('id');
            console.log(id);
            render(id);

            
           

            
          })



          

        }
})



  function render(id){
    $.ajax({
      url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
      type:'get',
      data:{
        titleid :id || 0
      },
      dataType:'json',
      success:function(info){
        console.log(info);
        var htmlstr = template('listTpl',info);
        $('.mmm_list ul').html(htmlstr);

      }


    })
  }

  render();

  })



