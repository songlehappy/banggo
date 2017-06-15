//读取cookie并赋值
function GiveValue(selector) {
	this.ele = $(selector).get(0);
	this.getData();
	this.iconfontChange();
	this.priceChange();
	this.account();
}

GiveValue.prototype.getData = function() {
	var oSelf = this;
	var that = $(oSelf.ele).find('.element');
	//克隆模板并加到main_m后
	if($.cookie('cart')) {
		oSelf.elemen = that.clone(true).appendTo(oSelf.ele).css('display', 'block');

		//	console.log(that.size());

		oSelf.arr = JSON.parse($.cookie('cart'));
		//图片
		$(oSelf.elemen).find('li:nth-child(2) dt img').attr('src', oSelf.arr[0]);
		//衣服名字
		$(oSelf.elemen).find('li:nth-child(2) dd p a').html(oSelf.arr[1]);
		//编号
		$(oSelf.elemen).find('li:nth-child(2) dd i span').html(oSelf.arr[2]);
		//颜色
		$(oSelf.elemen).find('li:nth-child(3) p span').html(oSelf.arr[3]);
		//尺寸
		$(oSelf.elemen).find('li:nth-child(3) div span').html(oSelf.arr[4]);
		//挂牌价
		$(oSelf.elemen).find('li:nth-child(4) p').html(oSelf.arr[5]);
		//售价
		$(oSelf.elemen).find('li:nth-child(4) h4').html(oSelf.arr[6]);
		//数量
		$(oSelf.elemen).find('li:nth-child(5) input').val(oSelf.arr[7]);

		//加减按钮变化
		oSelf.buttonChange();
		oSelf.iconfontChange();
	}

}

//
GiveValue.prototype.buttonChange = function() {
	var oSelf = this;
	oSelf.num = $(oSelf.elemen).find('li:nth-child(5) input').val(); //-----------------------oSelf.num---------------
	//	console.log(oSelf.num);
	$(oSelf.elemen).find('.minus').on({
		'click': function() {
			oSelf.num--;
			if(oSelf.num < 1) {
				oSelf.num = 1;
			}
			$(oSelf.elemen).find('li:nth-child(5) input').val(oSelf.num);
			//计算价格
			oSelf.priceChange();
			oSelf.iconfontChange();
		}
	});
	$(oSelf.elemen).find('.plus').on({
		'click': function() {
			oSelf.num++;
			$(oSelf.elemen).find('li:nth-child(5) input').val(oSelf.num);
			//计算价格
			oSelf.priceChange();
			oSelf.iconfontChange();

		}
	});
	
	$(oSelf.elemen).find('li:nth-child(5) input').on({
		'blur':function(){
			//计算价格
			oSelf.num=$(this).val();
			oSelf.priceChange();
			oSelf.iconfontChange();
		}
	})
}

//价格变化
GiveValue.prototype.priceChange = function() {
	var oSelf = this;
	//小计的内容
	var price1 = $(oSelf.elemen).find('li:nth-child(4) h4').html().slice(1);
	//	var num1=$(oSelf.elemen).find('li:nth-child(5) input').val();

	oSelf.price = Number(price1) * oSelf.num; //------------------------------------------oSelf.price---------------------------
	//		console.log((oSelf.price));

	$(oSelf.elemen).find('li:nth-child(6)').html('￥' + oSelf.price);
	$(oSelf.ele).parent().find('.main_b .main_bm p span').html(oSelf.num);
	$(oSelf.ele).parent().find('.main_b .main_bm p b').html('￥' + oSelf.price);
	$(oSelf.ele).parent().find('.main_b .main_bm p strong').html('￥' + oSelf.price);
}

//iconfont
GiveValue.prototype.iconfontChange = function() {
	var oSelf = this;
	var price = oSelf.price;
	var num = oSelf.num;
	$(oSelf.ele).parents('.main_in').find('.iconfont').toggle(
		function() {
			$(this).parents('.main_in').find('.iconfont').html(' ').css('border-color', 'red');
			oSelf.price = 0;
			oSelf.num = 0;
			oSelf.priceChange();
		},
		function() {
			$(this).parents('.main_in').find('.iconfont').html('&#xe664;').css('border-color', '#fff');
			oSelf.price = price;
			oSelf.num = num;
			oSelf.priceChange();
		}
	)
}

//
GiveValue.prototype.account = function() {
	var oSelf = this;
	//	console.log($(oSelf.ele).parents('.main_in').find('.main_b a'));
	$(oSelf.ele).parents('.main_in').find('.main_b a').on({
		'click': function() {
			alert('这些都是你的！！！！！！！！！')
		}
	})
}