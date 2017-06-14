//header部分鼠标移入功能
function HeaderMove(selector,addClass,nextClass){
	this.ele=$(selector).get(0);
	this.getSelect();
	this.addClass=addClass;
	this.nextClass=nextClass;
}
HeaderMove.prototype.getSelect=function(){
	var oSelf=this;
	$(this.ele).on({
		'mouseenter':function(){
			$(this).first('a').addClass(oSelf.addClass);
			$(oSelf.nextClass).toggle();
		},
		'mouseleave':function(){
			$(this).first('a').removeClass(oSelf.addClass);
			$(oSelf.nextClass).toggle();
		}
	})
}

//function ClickHeader(selector){
//	this.ele=$(selector).get(0);
//	
//}
//ClickHeader.prototype.clickAction=function(){
//	
//}

//banner部分鼠标移入功能
function BannerMove(selector){
	this.ele=$(selector).get(0);
	this.hide=$(this.ele).find('.banner_hide .hide');
	this.mBanner=$('body').find('.banner_m');
	this.greaterChange();
}
//鼠标移入变化功能
BannerMove.prototype.greaterChange=function(){
	var oSelf=this;
	//移入移出banner_l
	$(oSelf.ele).find('.banner_ll .list li').on({
		'mouseenter':function(){
			$(oSelf.ele).find('banner_ll').css('borderRight','1px solid #999');//边框变灰
			$(this).find('dl dt i').html('&#xe654;');//尖角号变换
			$(this).find('dl dt i').css({
				'right':-4,
				'background':'#fff',
				'line-height':1,
				'color':'#999'
			});
//			console.log($(oSelf.hide).get($(this).index()));
			$(oSelf.hide).removeClass('show');
			$(oSelf.hide).eq($(this).index()).addClass('show');
			$(oSelf.mBanner).css('display','none');
			
		},
		'mouseleave':function(){
//			$(oSelf.ele).find('.banner_ll').css('borderRight','1px solid #d51819');
			//移除其余尖角号
			$(this).find('dl dt i').html('&#xe63c;');
			$(this).find('dl dt i').css({
				'right':10,
				'background':'',
				'line-height':'',
				'color':''
			});			
		}
	});
//	console.log(oSelf.hide);
	$(oSelf.hide).on({
		'mouseenter':function(){
	//		console.log($);
	//		console.log($(this).index());
			//自身尖角号变
			$(oSelf.ele).find('.banner_ll dl dt i').eq($(this).index()).html('&#xe654;');//尖角号变换
			$(oSelf.ele).find('.banner_ll dl dt i').eq($(this).index()).css({
				'right':-4,
				'background':'#fff',
				'line-height':1,
				'color':'#999'
			});
		},
		'mouseleave':function(){
			//移除所有尖角号
			$(oSelf.ele).find('.banner_ll dl dt i').html('&#xe63c;');
			$(oSelf.ele).find('.banner_ll dl dt i').css({
				'right':10,
				'background':'',
				'line-height':'',
				'color':''
			});	
		}
	});
	
	$(oSelf.ele).mouseleave(function(){
		$(oSelf.ele).find('.banner_ll').css('borderRight','1px solid #d51819');
		$(this).find('.banner_ll dl dt i').html('&#xe63c;');
		$(this).find('.banner_ll dl dt i').css({
			'right':10,
			'background':'',
			'line-height':'',
			'color':''
		});		
		$(oSelf.hide).removeClass('show');
		$(oSelf.mBanner).css('display','block');
	})
	
}
