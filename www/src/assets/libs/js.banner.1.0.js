;(function($){
	"use strict"
	$.fn.banner = function(options){
		var autoPlay = options.autoPlay != undefined ? options.autoPlay : true ;
		var delayTime = options.delayTime || 1500;
		var moveTime = options.moveTime || 200;
		
		this.LOCAL = {
			iprev:options.ele.length-1,
			index:0
		};
		
		var that = this;
		
		//小图标的滑动
		if(options.list != undefined && options.list.length > 0){
			options.list.find("*").hover(function(){
				if(that.LOCAL.index == $(this).index()){};
				//向右走的条件
				if(that.LOCAL.index > $(this).index()){
					that.LOCAL.move($(this).index(),1)
					};
				//向左走的条件
				if(that.LOCAL.index < $(this).index()){
					that.LOCAL.move($(this).index(),-1)
					};
			});
		}
		
		//点击按钮判断
		if(options.left != undefined && options.left.length > 0 && options.right != undefined && options.right.length > 0){
			options.left.on("click",function(){
				that.LOCAL.changeIndex(1)
			})
			options.right.on("click",function(){
				that.LOCAL.changeIndex(-1)
			})
		}
		
		//自动播放
		if(autoPlay && options.right != undefined && options.right.length > 0){
			this.LOCAL.timer = setInterval(()=>{
				options.right.trigger("click");
			},delayTime)
			
			options.ele.parent().parent().hover(function(){
				options.left.stop().animate({left:0})
				options.right.stop().animate({right:0})
				options.list.stop().animate({bottom:0})
				clearInterval(that.LOCAL.timer)
				$(this).on("mousemove",function(){
					setTimeout(()=>{
//						setTimeout(()=>{
//							options.left.stop().animate({left:-$(this).width()})
//							options.right.stop().animate({right:-$(this).width()})
//							options.list.stop().animate({bottom:-$(this).height()})
//						},3000)
						clearInterval(that.LOCAL.timer)
						that.LOCAL.timer = setInterval(()=>{
						options.right.trigger("click");
						},delayTime)
					},3000)
				})
			},function(){
				options.left.stop().animate({left:-$(this).width()})
				options.right.stop().animate({right:-$(this).width()})
				options.list.stop().animate({bottom:-$(this).height()})
				clearInterval(that.LOCAL.timer)
				that.LOCAL.timer = setInterval(()=>{
				options.right.trigger("click");
				},delayTime)
			})
			
			
			//用不了延时器
//			this.LOCAL.timer = function(){
//				setTimeout(()=>{
//					options.right.trigger("click");
//					that.LOCAL.timer()
//				},1000)
//			}
//			this.LOCAL.timer()
//			options.ele.parents($("body")).hover(function(){
//				that.LOCAL.timer = ""
//			},function(){
//				that.LOCAL.timer = function(){
//					setTimeout(()=>{
//						options.right.trigger("click");
//						that.LOCAL.timer()
//					},1000)
//				}
//				that.LOCAL.timer()
//			})
		}
		
		
		
		
		//点击按钮 改变index
		this.LOCAL.changeIndex = function(num){
			if(num == 1){
				if(that.LOCAL.index == 0){
						that.LOCAL.index = options.ele.length-1;
						that.LOCAL.iprev = 0 ;
					}else{
						that.LOCAL.index --;
						that.LOCAL.iprev = that.LOCAL.index +1;
					}
			}else{
				if(that.LOCAL.index == options.ele.length-1){
					that.LOCAL.index = 0 ;
					that.LOCAL.iprev = options.ele.length -1;
				}else{
					that.LOCAL.index ++;
					that.LOCAL.iprev = that.LOCAL.index -1;
				}
			}
			options.list.find("*").removeClass("active").eq(that.LOCAL.index).addClass("active");
			that.LOCAL.btnMove(num)
		}
		
		//点击按钮图片移动
		this.LOCAL.btnMove = function(i){
			options.ele.eq(that.LOCAL.iprev).css({
					left : 0
				}).stop().animate({
					left : options.ele.eq(0).width() * i
				},moveTime).end().eq(that.LOCAL.index).css({
					left : -options.ele.eq(0).width() * i
				}).stop().animate({
					left : 0
				},moveTime)
		}
		
		
		
		//图片运动
		this.LOCAL.move = function(num,i){
			options.ele.eq(that.LOCAL.index).css({
						left:0
					}).stop().animate({
						left : options.ele.eq(0).width() * i
					},moveTime).end().eq(num).css({
						left : -options.ele.eq(0).width() * i
					}).stop().animate({
						left : 0
					},moveTime)
				that.LOCAL.index =num
				options.list.find("*").removeClass("active").eq(num).addClass("active");
		}
		
		
		
		
		
		
	}
})(jQuery);
