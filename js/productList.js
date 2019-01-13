$(function(){
    //封装的获取地址栏id
    

    // var id = getSearch("categoryId");
    









    // for(var i = 0 ;i < arr.length; i++){
    // //   var key = arr[0];
    // //   var value = arr[1];
    // //   obj[key] = value;
    // num = arr[i].indexOf("=");
    // if(num>0){
    //     name=arr[i].substring(0,num);
    //     value=arr[i].substr(num+1);
    //     this[name]=value;
    //    console.log(this[name]=value);
    //     }
    // }
  



//   var str =  window.location.href;

//      //进行中文解码
//      str = decodeURI(str);
//      console.log(str);

//      //从问号开始全部截取
//      var arr = str.split("?");
//      console.log(arr);

//      //只要下标为1有数据的那项
//      var arr = arr.slice(1);
//      console.log(arr);   //["categoryid=0"]

//      //将数组用拆分开 :遍历数组,获取键和值
//      var obj = {};
//      arr.forEach(function(v, i){

//          var key = v.split("=")[0];
//          var value = v.split("=")[1];
//          obj[key] = value;
//      })

//      console.log(obj)





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











    
})