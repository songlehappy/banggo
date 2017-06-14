
//回到顶部功能
function ToTop(selector){
	this.ele=$(selector).get(0);
	this.flag=true;
	this.isAppear();
	this.goTop();
	
}
//回到顶部框的出现与隐藏
ToTop.prototype.isAppear=function(){
	var oSelf=this;
	$(window).scroll(function(){
		if($(this).scrollTop()>=660 && oSelf.flag==true){
			$(oSelf.ele).find('.top').toggle();
			oSelf.flag=false;
		}
		if($(this).scrollTop()<660 && oSelf.flag==false){
			$(oSelf.ele).find('.top').toggle();
			oSelf.flag=true;
		}
	})
}
//点击回到顶部
ToTop.prototype.goTop=function(){
	
	$(this.ele).find('.top').on({
		'click':function(){
			$('html,body').animate({
				'scrollTop':0
			});
		},
	});
}
