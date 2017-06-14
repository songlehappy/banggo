
//此为衣服选取颜色尺寸的功能
function ClothStyle(selector,target){
	if(selector){
		this.ele=$(selector).get(0);
		this.target=target;
		this.changeColor();
	}
	
//	console.log(this.choiceSize);
}

ClothStyle.prototype.changeColor=function(){
	var oSelf=this;
	oSelf.value=$(oSelf.ele).find('span').html();
	$(oSelf.ele).find(oSelf.target).on({
		'click':function(){
			if(/2px/.test($(this).css('border'))){
				$(this).css('border','1px solid #ccc');
				$(oSelf.ele).find('span').html(oSelf.value);
			}else{
				$(this).css({
					'border':'2px solid #F8584F'
				}).siblings().css({
					'borderColor':'#ccc',
					'borderWidth':'1'
				});
//				oSelf.choiceSize=true;
//				console.log(oSelf.choiceSize);
				if(/img/.test(oSelf.target)){
					$(oSelf.ele).find('span').html($(this).attr('title'));
					//保存颜色
					oSelf.color=$(this).attr('title');
//					console.log(3);
//					oSelf.choiceColor=true;
				}else{
					$(oSelf.ele).find('span').html($(this).html());
					//保存尺寸
					oSelf.size=$(this).html();
				}				
			}			
		},		
	})
}





//加减按钮功能
function PlusMinus(selector){
	this.ele=$(selector).get(0);
	this.plus();
	this.minus();
}

//加的方法
PlusMinus.prototype.plus=function(){
	var oSelf=this;
	oSelf.num=$(oSelf.ele).find('input').val();
	$(oSelf.ele).find('.plus').click(function(){
		
		oSelf.num++;
		if(oSelf.num>50){
			oSelf.num=50;
			$(oSelf.ele).find('div').addClass('purchase').html('对不起，数量最多为50件。')
			setTimeout(function(){
				$(oSelf.ele).find('div').removeClass();
			},3000)
		}
		$(oSelf.ele).find('input').val(oSelf.num);
	})
}

//减的方法
PlusMinus.prototype.minus=function(){
	var oSelf=this;
	$(oSelf.ele).find('.minus').click(function(){
//		var num=$(oSelf.ele).find('input').val();
		oSelf.num--;
		if(oSelf.num<1){
			oSelf.num=1;
			$(oSelf.ele).find('div').addClass('purchase');
			setTimeout(function(){
				$(oSelf.ele).find('div').removeClass();
			},3000)
		}
		$(oSelf.ele).find('input').val(oSelf.num);
	})
}



