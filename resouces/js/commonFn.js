
//获取页面选择器
function GetSelector(selector){
	this.ele=$('body').get(0);
	this.selector=selector;
}
//页面部分出现红色字体功能
GetSelector.prototype.isRed=function(){
	$(this.ele).find(this.selector).css(
		'color','#D30A06'
	)
}
//红色字体功能结束



//图像变化功能
GetSelector.prototype.changeOpacity=function(){
	$(this.ele).find(this.selector).not('.bigPic img').on({
		'mouseenter':function(){
			$(this).animate({'opacity':'0.5'});
			$(this).animate({'opacity':'0.8'});
			$(this).css('cursor','pointer');
		},
		'mouseleave':function(){
			$(this).animate({'opacity':'1'});
		}
	});	
	
}
//图像变化功能结束




//轮播功能
function Slider(selector){
	this.ele=$(selector).get(0);
	this.count=0;
	this.btnClick();
	this.clickSmallFont();
	this.addTimer();
	this.moveBigPic();
	
}
//点击左右实现切换图片
Slider.prototype.btnClick=function(){
	var oSelf=this;
	$(oSelf.ele).find('.toLeft').click(function(){
		oSelf.count--;
		oSelf.countChange();
	});
	
	$(oSelf.ele).find('.toRight').click(function(){
		oSelf.count++;
		oSelf.countChange();
	});
	
}
//count的变化
Slider.prototype.countChange=function(){
	var oSelf=this;
	if(oSelf.count<0){
			oSelf.count=5;
		}else if(oSelf.count>5){
			oSelf.count=0;
		}
		
		$(oSelf.ele).find('.bigPic li').stop().animate({
			'opacity':0
		});
		$(oSelf.ele).find('.bigPic li').eq(oSelf.count).stop().animate({
			'opacity':1
		});
		//小样式变化
		$(oSelf.ele).find('.smallFont li').removeClass().eq(oSelf.count).addClass('select');
}
//添加定时器
Slider.prototype.addTimer=function(){
	
	var oSelf=this;
	oSelf.timer=setInterval(function(){
		oSelf.count++;
		oSelf.countChange();
	},3000)
}
//点击下面文字变化
Slider.prototype.clickSmallFont=function(){
	var oSelf=this;
	$(this.ele).find('.smallFont li').mouseenter(function(){
		oSelf.count=$(this).index();
		$(this).addClass('select').siblings().removeClass();
		//大图变化
		$(oSelf.ele).find('.bigPic li').stop().animate({
			'opacity':0
		});
		$(oSelf.ele).find('.bigPic li').eq(oSelf.count).stop().animate({
			'opacity':1
		});
	});
}

//进出入bigPic
Slider.prototype.moveBigPic=function(){
	var oSelf=this;
	$(oSelf.ele).on({
		'mouseenter':function(){
			clearInterval(oSelf.timer);
			$(this).find('.btn').toggle();
		},
		'mouseleave':function(){
			oSelf.addTimer();
			$(this).find('.btn').toggle();
		}
	})
}

//轮播结束


//aside滑动
function AsideSlide(selector){
	this.ele=$(selector).get(0);
	this.asideBtn();
}
//点击左右功能
AsideSlide.prototype.asideBtn=function(){
	var oSelf=this;
	$(oSelf.ele).find('.toLeft').click(function(){
		console.log($(oSelf.ele).find('ul li').innerWidth());
		$(oSelf.ele).find('ul').animate({
			left:0
		})
	});
	$(oSelf.ele).find('.toRight').click(function(){
		$(oSelf.ele).find('ul').animate({
			left:-$(oSelf.ele).find('ul li').innerWidth()*5
		})
	})
}
//aside滑动结束