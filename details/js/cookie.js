
function Cookie(selector){
	this.ele=$(selector).get(0);
	this.getValue();
}

//得到需要保存的值
Cookie.prototype.getValue=function(){
	var oSelf=this;
	oSelf.arr=[];
	oSelf.obj={};
	//获取需要的值
	oSelf.obj.images=$(oSelf.ele).find('.banner_r .color img').attr('src');
	
	oSelf.obj.oName=$(oSelf.ele).find('.banner_r h2 span').html();
	
	oSelf.obj.oNumber=$(oSelf.ele).find('.banner_l .banner_lb span').html();
	
	oSelf.obj.color=$(oSelf.ele).find('.banner_r .color span').html();
	
	oSelf.obj.size=$(oSelf.ele).find('.banner_r .yard span').html();
	
	oSelf.obj.price1=$(oSelf.ele).find('.banner_r .price i').html();
	
	oSelf.obj.price2=$(oSelf.ele).find('.banner_r .price strong').html();
	
	oSelf.obj.count=$(oSelf.ele).find('.banner_r .count input').val();
//	console.log(oSelf.arr);
	//加入倒数组中
	oSelf.arr.push(oSelf.obj.images);
	oSelf.arr.push(oSelf.obj.oName);
	oSelf.arr.push(oSelf.obj.oNumber);
	oSelf.arr.push(oSelf.obj.color);
	oSelf.arr.push(oSelf.obj.size);
	oSelf.arr.push(oSelf.obj.price1);
	oSelf.arr.push(oSelf.obj.price2);
	oSelf.arr.push(oSelf.obj.count);
//	console.log(oSelf.arr);
	//转化为JSON字符串
	oSelf.str=JSON.stringify(oSelf.arr);
//	console.log(oSelf.str);
	
	//保存cookie
	$.cookie('cart',oSelf.str,{expires:7,path: '/'});
	
}
