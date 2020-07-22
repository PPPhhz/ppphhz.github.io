$(function() {
    $(".iconfont").click(function () {
        $(".left-side").stop().toggle(500);
    });
    $(window).scroll(function () {
        var offset=$('body').scrollTop() || $('html').scrollTop();
        //     // 获取网页高度
        //     var $winHeight = $(window).height();
        //     //判断是否滚出一屏

        // 2.2遍历拿所有楼层
        $(".floor").each(function (idx, ele) {
            // 2.2.1获得当前楼层距离顶部距离
            var $floorOffset = $(ele).offset().top;
            // 2.2.2获取当前楼层高度
            var $floorHeight = $(ele).height();
            //判断滚动出去的距离是否大于当前楼层
            if(offset >=$floorOffset-1){
                // 获取对应楼层按钮
                var $li = $(".footer li").eq(idx);
                // 自动设置楼层按钮背景为当前楼层
                $li.addClass("cur").siblings().removeClass("cur");
            }
        });
    });

    // 1.监听楼层点击事件
    $(".footer li").click(function () {
        // 1.0设置当前点击楼层背景颜色
        $(this).addClass("cur").siblings().removeClass("cur");
        // 1.1.获取当前点击的楼层索引
        var index = $(this).index();
        // 1.2获取索引对应楼层距离顶部的距离
        var offset = $(".floor").eq(index).offset().top;
        // 1.3让网页滚动到对应楼层的位置
        $('body , html').animate({scrollTop: offset}, 1000);
    });

    // 给reol戴帽子
    $(".hat").click(function () {
        $(".getHat").fadeOut(1000);
        $(".gotHat").delay(1000).fadeIn(1000);
    });
    $(".hat").mouseenter(function () {
        $(".getHat").fadeOut(1000);
        $(".gotHat").delay(1000).fadeIn(1000);
    })
});