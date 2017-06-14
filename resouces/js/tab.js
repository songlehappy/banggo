
//tab切换功能
function Tab(selector){
	this.ele=$(selector).get(0);
	this.str=[
		{name:'用户名：',passwo:'登录密码：'},
		{name:'手机号：',passwo:'登录密码：'},
		{name:'卡号：',passwo:'卡密码：'}
	]
	
	this.clickAction();
	this.changeFocus();
	this.getFocus();
}

//点击切换
Tab.prototype.clickAction=function(){
	var oSelf=this;
	$(oSelf.ele).find('ul li').click(function(){
		$(this).addClass('select').siblings().removeClass();
		oSelf.index=$(this).index();
		oSelf.changeContent();
		oSelf.changeFocus();
	});
}

//点击后变换内容
Tab.prototype.changeContent=function(){
	var str=[
		{name:'用户名：',passwo:'登录密码：'},
		{name:'手机号：',passwo:'登录密码：'},
		{name:'卡号：',passwo:'卡密码：'}
	];
	
	$(this.ele).find('.main_m .txt').eq(0).html(str[this.index].name);
	$(this.ele).find('.main_m .txt').eq(1).html(str[this.index].passwo);
	
}

//点击后变换焦点
Tab.prototype.changeFocus=function(){
//	console.log(1);
	$(this.ele).find('.main_m input:empty').get(0).focus();
	
	
}

//匹配获取焦点的元素
Tab.prototype.getFocus=function(){
	var oSelf=this;
	$(oSelf.ele).find(':focus').on({
		'focus':function(){
//			console.log($(this).prev().html());
			if($(this).prev().html()=='用户名：'){
				$(this).next().html('请输入账号');
			}else if($(this).prev().html()=='手机号：'){
				$(this).next().html('请输入手机号');
			}else if($(this).prev().html()=='卡号：'){
				$(this).next().html('请输入卡号');
			}
		},
		'blur':function(){
			$(this).next().html('');
		}
	})
	$(this.ele).find('.main_m input').on({
		'focus':function(){
//			console.log($(this).prev().html());
			if($(this).prev().html()=='登录密码：'){
				$(this).next().html('请输入密码');
			}else if($(this).prev().html()=='卡密码：'){
				$(this).next().html('请输入卡密码');
			}else if($(this).prev().html()=='验证码：'){
				$(this).nextAll('.hint').html('请输入验证码');
			}
		},
		'blur':function(){
//			$(this).next().html('');
			$(this).nextAll('.hint').html('');
		}
	})
}
