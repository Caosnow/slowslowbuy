// mui.init();
// 		var createFragment = function(count) {
// 			var fragment = document.createDocumentFragment();
// 			var li;
// 			for (var i = 0; i < count; i++) {
// 				li = document.createElement('li');
// 				li.className = 'mui-table-view-cell mui-media';
// 				li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload="http://www.dcloud.io/hellomui/images/' + (i % 5 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body">主标题<p class="mui-ellipsis">列表二级标题</p></div></a>';
// 				fragment.appendChild(li);
// 			}
// 			return fragment;
// 		};

// (function($) {
//     var list = document.getElementById("list");
//     list.appendChild(createFragment(50));
//     $(document).imageLazyload({
//         placeholder: '../images/60x60.gif'
//     });
// })(mui);




$(function(){


    $.ajax({
        url:'http://127.0.0.1:9090/api/getinlanddiscount',
        type:'get',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlstr = template('infoTpl',info)
            $('.ups_box ul').html(htmlstr);
        }
    })
    



    




})