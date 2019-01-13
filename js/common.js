



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



   function getSearch() {
    var name, value;
    var str = location.href; //取得整个地址栏
    var num = str.indexOf("?");
    str = str.substr(num + 1); //str得到?之后的字符串

    var arr = str.split("&"); //得到&分割的参数，放入数组中
    for (var i = 0; i < arr.length; i++) {
      num = arr[i].indexOf("=");
      if (num > 0) {
        name = arr[i].substring(0, num);
        value = arr[i].substr(num + 1);
        this[name] = value;
      }
    }
  }

//   var m = new getSearch();
//   var id = m.categoryId;
//  //  console.log(getSearch.categoryId);
 

//  $.ajax({
//      url:'http://127.0.0.1:9090/api/getcategorybyid',
//      type:'get',
//      data:{
//          categoryid:id
//      },
//      dataType:'json',
//      success:function(info){
//          console.log(info);
//          var htmlStr = template('telTpl',info);
//          $('.pro-lujing .left').html(htmlStr);
//      }
//  })












