



    function getSearch(){
        //从地址栏获取地址
        var str =  window.location.href;
        // var str = location.search;
        // console.log(str);
        // 进行中文解码
        var str = decodeURI(str);
        // console.log(str);
        //截取
        var arr = str.split('?');
        // console.log(arr);
        var arr = arr.slice(1);
        // console.log(arr);
        // var obj = {};
        // console.log(arr);
        // arr.forEach(function(v,i){
        //     var key = v.split('=')[0];
        //     var value = v.split('=')[1];
        //     obj[key] = value;
        //     // console.log(key,value);
        //     // console.log(obj[key] = value);

            
        // })
        // return obj[k];
        for(var i = 0 ;i < arr.length; i++){
        num = arr[i].indexOf("=");
        if(num>0){
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            this[name]=value;
        // console.log(this[name]=value);
            }
        }
     }

    //  getSearch("categoryId");
     var m = new getSearch();
     var id = m.categoryId;
    //  console.log(getSearch.categoryId);
    

    $.ajax({
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        type:'get',
        data:{
            categoryid:id
        },
        dataType:'json',
        success:function(info){
            // console.log(info);
            var htmlStr = template('telTpl',info);
            $('.pro-lujing .left').html(htmlStr);
        }
    })




    












