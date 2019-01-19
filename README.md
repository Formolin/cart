## 1、通过滚轮实现切换屏幕效果
> FullPage插件，实现全屏切换

window.onmousewheel = function(){
	console.log('ok')	
}

>http://www.dowebok.com/demo/2014/77/

## 2、引入

<link rel="stylesheet" href="http://cdn.dowebok.com/77/css/jquery.fullPage.css">
<script src="http://cdn.staticfile.org/jquery/1.8.3/jquery.min.js"></script>
<script src="http://cdn.dowebok.com/77/js/jquery.fullPage.min.js"></script>

- 纵向切换使用section  默认显示 active


每个 section 代表一屏，默认显示“第一屏”，如果要指定加载页面时显示的“屏幕”，可以在对应的 section 加上 class=”active”，如：

<div class="section active">第三屏</div>
同时，可以在 section 内加入 slide，如：

<div id="dowebok">
	<div class="section">
		<h3>第一屏</h3>
		<p>fullPage.js — 基本演示</p>
	</div>
	<div class="section">
		<div class="slide"><h3>第二屏的第一屏</h3></div>
		<div class="slide"><h3>第二屏的第二屏</h3></div>
		<div class="slide"><h3>第二屏的第三屏</h3></div>
	</div>
	<div class="section">
		<h3>第三屏</h3>
	</div>
	<div class="section">
		<h3>第四屏</h3>
		<p>这是最后一屏</p>
	</div>
</div>



##进行初始化

JavaScript
$(function(){
    $('#dowebok').fullpage();
});

