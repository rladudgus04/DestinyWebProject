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
}