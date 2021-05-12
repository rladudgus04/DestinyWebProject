window.onload = function(){
    var bottom = $(".bottom-menu");
    var point = $(".point");
    var close = $(".close");

    point.click(function(){
        bottom.animate({ bottom : '0'});
    });

    close.click(function(){
        bottom.animate({bottom : '-60%'});
    });


    var skilItme1 = $(".item1");
    var skilItem2 = $(".item2");
    var skilItem3 = $(".item3");
    var skilBack = $(".wrapper");

    skilItme1.hover(function(){
        skilBack.css('background-color', 'rgb(37, 107, 205)');
    })
    skilItem2.hover(function(){
        skilBack.css('background-color', 'rgb(173, 81, 15)');
    });
    skilItem3.hover(function(){
        skilBack.css('background-color', 'rgb(103, 9, 84)');
    });
    
    
}