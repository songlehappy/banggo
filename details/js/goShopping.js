
//判定点击加入购物袋后的功能
function GoShopping(selector){
	ClothStyle.call(this);
	this.ele=$(selector).get(0);
	//购买数量
	this.num1=$(this.ele).find('.count input').val();
	//库存
	this.num2=$(this.ele).find('.count strong span').html();
	this.isTrue();
	this.isGo();
}
//原型
//GoShopping.prototype=new ClothStyle();

//
GoShopping.prototype.isTrue=function(){
	var oSelf=this;
//	var that=GoShopping.prototype.changeColor;
	
	$(oSelf.ele).find('.add').on({
		'click':function(){
//			console.log(that.choiceColor);
//			console.log(oSelf.choiceColor);
			//库存
			var num2=parseInt($(oSelf.ele).find('.count strong span').html());
			//尺寸
			oSelf.size=$(oSelf.ele).find('.yard span').html();
			oSelf.color=$(oSelf.ele).find('.color span').html()
			//购买数量
			var num1=parseInt($(oSelf.ele).find('.count input').val());
//			console.log(typeof num1)
//			console.log(typeof num2)
			
			if(oSelf.size=='请选择尺码' && oSelf.color=='请选择颜色'){
				alert('加入购物袋前，请先选择颜色和尺码！');
			}else if(oSelf.size=='请选择尺码'){
				alert('加入购物袋前，请先选择尺码！');
			}else if(oSelf.color=='请选择颜色'){
				alert('加入购物袋前，请先选择颜色！');
			}else if(num1 > num2){
//				console.log(num1);
//				console.log(num2);
				alert('冰淇淋亮片绣花T恤-云朵白-'+oSelf.size+'商品库存不足！  ');
				
			}else{
				$(this).parent().find('.fullblack').toggle();
				
				//并开始保存cookie值
				var cookie=new Cookie('.banner_in');
				
			}
		}
	});
}


GoShopping.prototype.isGo=function(){
	var oSelf=this;
	$(oSelf.ele).find('.fullblack .goTo .close').on({
		'click':function(){
			$(this).parents('.fullblack').toggle();
		}
	});
	$(oSelf.ele).find('.fullblack .goTo .goon').on({
		'click':function(){
			$(this).parents('.fullblack').toggle();
		}
	});
	$(oSelf.ele).find('.fullblack .goTo .account').on({
		'click':function(){
			return true;
//			$(this).parents('.fullblack').toggle();
		}
	})
}
