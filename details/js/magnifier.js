
//放大镜功能
function Magnifier(selector){
	this.ele=$(selector).get(0);
	//选择区的宽、高
	this.smallWidth=$(this.ele).find('.small').width();
	this.smallHeight=$(this.ele).find('.small').height();
	this.moveAction();
}

//在图片中移动
Magnifier.prototype.moveAction=function(){
	var oSelf=this;
	$(oSelf.ele).find('.hide').on({
		'mouseenter mouseleave':function(){
			$(oSelf.ele).find('.small,.big').toggle();
		},
		'mousemove':function(oEvent){
			oSelf.left=oEvent.offsetX-oSelf.smallWidth/2;
			oSelf.top=oEvent.offsetY-oSelf.smallHeight/2;
			//左右边界
			if(oSelf.left<0){
				oSelf.left=0;
			}else if(oSelf.left>($(this).width()-oSelf.smallWidth)){
				oSelf.left=$(this).width()-oSelf.smallWidth;
			}
//			//上下边界
			if(oSelf.top<0){
				oSelf.top=0;
			}else if(oSelf.top>($(this).height()-oSelf.smallHeight)){
				oSelf.top=$(this).height()-oSelf.smallHeight;
			}
			//给选择区设置值
			$(oSelf.ele).find('.small').css({
				'left':oSelf.left,
				'top':oSelf.top
			})
			//给大图区设置值
			$(oSelf.ele).find('.big').css({
				'backgroundPositionX':oSelf.left*-1.655,
				'backgroundPositionY':oSelf.top*-1.655
			})
		}
	});
}

//点击改变dt图（中图）的功能
function MiddleClick(selector,target){
	this.ele=$(selector).get(0);
	this.target=target;
	this.clickTarget();
	
}
//点击目标将其加入到中图（dt）和大图（.big）中
MiddleClick.prototype.clickTarget=function(){
	var oSelf=this;
	$(oSelf.ele).find(oSelf.target).on({
		'click':function(){
			var index=$(this).index();
			if(/color/.test(oSelf.target)){
				index+=4;
			}else{
				$(this).css('borderColor','red').siblings().css('borderColor','#ccc');
			}
			$(oSelf.ele).find('.banner_l dl dt img').attr({
				'src':'../../resouces/img/details/middel'+index+'.jpg',
			});
			$(oSelf.ele).find('.banner_l .big').css({
				background:'url(../../resouces/img/details/big'+index+'.jpg)'
			});
		},
	});
}
