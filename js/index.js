$(function () {
    $('#dowebok').fullpage({//注意有大括号
        // 配置参数，参见文档
        // 颜色配置
        sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#8ac060'],
        // 不垂直居中,默认是居中的
        verticalCentered: false,
        //navigation    布尔值 false   是否显示项目导航
        navigation: true,
        //scrollingSpeed    整数  700 滚动速度，单位为毫秒
        scrollingSpeed: 400,
        // afterLoad    滚动到某一屏后的回调函数，
        //接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function (anchorLink, index) {
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('now');
            }, 700)

        },
        // 点击更多切换下一屏
        // 最好在组件初始完毕或渲染完毕执行
        afterRender: function () {
            $('.more').on('click', function () {
                // fullpage插件的方法使用,注意a标签的href
                $.fn.fullpage.moveSectionDown();
            })
        },
        // 离开某一屏幕触发
        onLeave: function (index,nextIndex,direction) {
            // alert('ok')
            if(index == 2 && nextIndex == 3){
                // 证明从第二页到的三页
                
            }
        },
    });
})