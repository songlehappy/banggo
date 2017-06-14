
//会员规则、尺码选择助手、分享--移动到目标位置出现or隐藏
function Appear(selector,target){
	this.ele=$(selector).get(0);
	this.target=target;
	this.action();
}

Appear.prototype.action=function(){
	var oSelf=this;
	$(oSelf.ele).on({
		'mouseenter mouseleave':function(){
			$(oSelf.target).toggle();
		},		
	});
	$(oSelf.target).on({
		'mouseenter mouseleave':function(){
			$(this).toggle();
		},
	})
}




//点击尺寸按钮 -购物车内的数量变化
function CountChange(selector,target){
	this.ele=$(selector).get(0);
	this.target=target;
	this.Arr=[19,19,19,22,22]
	this.action();
	
}
CountChange.prototype.action=function(){
	var oSelf=this;
//	$(oSelf.ele).find('li').toggle(
//		function(){
////			console.log($(this).index())//火狐不会出现问题
//			$(oSelf.target).html(oSelf.Arr[$(this).index()])
//		},
//		function(){
//			var sum=0;
//			for(var i=0;i<oSelf.Arr.length;i++){
//				sum+=oSelf.Arr[i];
//			}
//			$(oSelf.target).html(sum)
//		}
//	);
	$(oSelf.ele).find('li').click(function(){
		if(/2px/.test($(this).css('border'))){
			$(oSelf.target).html(oSelf.Arr[$(this).index()]);
		}else{
			var sum=0;
			for(var i=0;i<oSelf.Arr.length;i++){
				sum+=oSelf.Arr[i];
			}
			$(oSelf.target).html(sum);
		}
	})
	
}






//main_r吸顶效果
function Ceiling(selector){
	this.ele=$(selector).get(0);
	this.scrollTop=$(this.ele).offset().top;
	this.flag=true;
	this.action();
}
Ceiling.prototype.action=function(){
	var oSelf=this;
	$(window).scroll(function(){
		//window滚动的高度值大于此选择器的高度
		if($(this).scrollTop()>=oSelf.scrollTop && oSelf.flag==true){
			oSelf.flag=false;
			$(oSelf.ele).addClass('changePosition');
			$(oSelf.ele).find('.thumbnail').toggle();
		}
		//window滚动的高度值小于此选择器的高度
		if($(this).scrollTop()<oSelf.scrollTop && oSelf.flag==false){
			oSelf.flag=true;
			$(oSelf.ele).removeClass('changePosition');
			$(oSelf.ele).find('.thumbnail').toggle();
		}
	})
}
