
//
function Slide(selector){
	this.ele=$(selector).get(0);
	
}

Slide.prototype.clickSlide=function(){
	var oSelf=this;
	$(oSelf.ele).find('.more').toggle(
		function(){
			$(oSelf.ele).find('dd:first').attr({
				style:'height:auto',
			});
			$(this).html('收起<i class="iconfont">&#xe650;</i>');
		},
		function(){
			$(oSelf.ele).find('dd:first').attr({
				style:'height:22px'
			});
			$(this).html('更多<i class="iconfont">&#xe756;</i>');
		}
	)
}

//左边列表
Slide.prototype.clickList=function(){
	var oSelf=this;
//	console.log($(oSelf.ele).find('.list2 dt strong'));
	
//	$(oSelf.ele).find('.list2 dt strong').toggle(
//		function(){
//			$(this).parents('.list2').find('dd').css({
//			display:'block',
////				background:"url('../../resouces/img/list/Veo_mbshop_spirit_pic.png') no-repeat -24px -80px"
//			})
////			console.log($(oSelf.ele).find('.list2 dd'));
//		},
//		function(){
//			$(this).parents('.list2').find('dd').css({
//				display:'none',
////				background:"url('../../resouces/img/list/Veo_mbshop_spirit_pic.png') no-repeat -24px -88px"
//			})
//		}
//	)
	$(oSelf.ele).find('.list2 dt strong').click(function(){
		$(this).parents('.list2').find('dd').toggle();
		
	});
	$(oSelf.ele).find('.list2 dt strong').toggle(
		function(){
			// console.log(1);
			$(this).css({
				background:'url(../../resouces/img/list/Veo_mbshop_spirit_pic.png) no-repeat -16px -88px'
				// background:'red'
			})
			
		},
		function(){
			 // console.log(2);
			$(this).css({
				background:'url(../../resouces/img/list/Veo_mbshop_spirit_pic.png) no-repeat -24px -88px'
			})
			
		}
	);

	// $(oSelf.ele).find('.list b').toggle(
	// 	function(){
	// 		$(this).css({
	// 			background:"url('../../resouces/img/list/Veo_mbshop_spirit_pic.png') no-repeat 0px -88px"
	// 		});
	// 		$(this).parent().css({
	// 			height:'auto'
	// 		});
	// 	},
	// 	function(){
	// 		$(this).css({
	// 			background:"url('../../resouces/img/list/Veo_mbshop_spirit_pic.png') no-repeat -8px -88px"
	// 		});
	// 		$(this).parent().css({
	// 			height:18
	// 		})
	// 	}
	// );
	$(oSelf.ele).find('.list b').toggle(

		function(){
			//自己变下其余变>
			$(this).css({
				background:"url('../../resouces/img/list/Veo_mbshop_spirit_pic.png') no-repeat 0px -88px"
			}).parent().siblings().find('b').css({
					background:"url('../../resouces/img/list/Veo_mbshop_spirit_pic.png') no-repeat -8px -88px"
			})
			//同时父级展开其余收起
			$(this).parent().css({
				height:'auto'
			}).siblings().css({
				height:18
			});

		},
		function(){
			$(this).css({
				background:"url('../../resouces/img/list/Veo_mbshop_spirit_pic.png') no-repeat -8px -88px"
			});
			$(this).parent().css({
				height:18
			})
		}
		
	)


}








//高吸筛选
function Filter(selector){
	this.ele=$(selector).get(0);
	this.action();

}

Filter.prototype.action=function(){
	var oSelf=this;
	$(oSelf.ele).find('dd').on({
		'mouseenter mouseleave':function(){
			oSelf.index=$(this).index()-1;
			// console.log($(this).parents('.main_rt').find('div'));
			$(this).parents('.main_rt').find('>div').eq(oSelf.index).toggle();
		}
	});
	$(oSelf.ele).parent().find('>div').on({
		'mouseenter':function(){
			$(this).css('display','block');
		},
		'mouseleave':function(){
			$(this).css('display','none');
		}
	})

}








//图片更换
function ChangePic(selector){
	this.ele=$(selector).get(0);
	this.picMove();
}

ChangePic.prototype.picMove=function(){
	var oSelf=this;
	$(oSelf.ele).find('.sortList span img').on({
		'mouseenter':function(){
			oSelf.oSrc=$(this).parents('.sortList').find('>img').attr('src');
			$(this).parents('.sortList').find('>img').attr({
				'src':$(this).attr('src')
			})
			// console.log($(this).index())
		},
		'mouseleave':function(){
			$(this).parents('.sortList').find('>img').attr({
				'src':oSelf.oSrc
			})
		}
	})
}